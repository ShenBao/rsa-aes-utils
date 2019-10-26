/**
 * Copyright (c) 2019-present ShenBao
 * @homepage https://github.com/ShenBao/rsa-aes-utils
 * @author ShenBao <shenbaoone@gmail.com>
 */

var crypto = require('crypto');

/**
 * 生成指定位数字符
 * @param length
 * @returns {String} 返回生成的指定位数字符
 */
function createString(length) {
    var expect = length;
    var str = Math.random().toString(36).substr(2);
    while (str.length < expect) {
        str += Math.random().toString(36).substr(2);
    }
    str = str.substr(0, length);
    return str;
}

/**
 * 生成 AESKEY
 * @returns {String} 返回生成的 32位 AESKEY
 */
function createAesKey() {
    return createString(32);
}

/**
 * 生成 AES IV
 * @returns {String} 返回生成的 16位 AES IV
 */
function createAesIv() {
    return createString(16);
}

/**
 * 转换为字符串
 * @param {*} data 
 * @returns {String}
 */
function parseToString(data) {
    var d = '';
    switch (typeof data) {
        case 'string':
            d = data;
            break;
        case 'object':
            d = JSON.stringify(data);
            break;
        default:
            d = data.toString();
    }
    return d;
}

/**
 * aes加密
 * @param data 待加密内容
 * @param key 必须为32位私钥
 * @param iv 初始化向量
 * @param mode 补位填充模式
 * @returns {string}
 */
function encrypt(data, key, iv, mode) {
    data = parseToString(data);
    iv = iv || '';
    var algorithm = 'aes-256-' + mode;
    var clearEncoding = 'utf8';
    var cipherEncoding = 'base64';
    var cipherChunks = [];
    var cipher = crypto.createCipheriv(algorithm, key, iv);
    cipher.setAutoPadding(true);
    cipherChunks.push(cipher.update(data, clearEncoding, cipherEncoding));
    cipherChunks.push(cipher.final(cipherEncoding));
    return cipherChunks.join('');
}

/**
 * aes解密
 * @param data 待解密内容
 * @param key 必须为32位私钥
 * @param iv 初始化向量
 * @param mode 补位填充模式
 * @returns {string}
 */
function decrypt(data, key, iv, mode) {
    if (!data) {
        return '';
    }
    iv = iv || '';
    var algorithm = 'aes-256-' + mode;
    var clearEncoding = 'utf8';
    var cipherEncoding = 'base64';
    var cipherChunks = [];
    var decipher = crypto.createDecipheriv(algorithm, key, iv);
    decipher.setAutoPadding(true);
    cipherChunks.push(decipher.update(data, cipherEncoding, clearEncoding));
    cipherChunks.push(decipher.final(clearEncoding));
    return cipherChunks.join('');
}

/**
 * aes ECB 加密
 * @param data 待加密内容
 * @param key 必须为32位私钥
 * @returns {string}
 */
function encryptByECB(data, key) {
    return encrypt(data, key, '', 'ecb');
}

/**
 * aes ECB 解密
 * @param data 待解密内容
 * @param key 必须为32位私钥
 * @returns {string}
 */
function decryptByECB(data, key) {
    return decrypt(data, key, '', 'ecb');
}

/**
 * aes CBC 加密
 * @param data 待加密内容
 * @param key 必须为32位私钥
 * @param iv 初始化向量
 * @returns {string}
 */
function encryptByCBC(data, key, iv) {
    return encrypt(data, key, iv, 'ecb');
}

/**
 * aes CBC 解密
 * @param data 待解密内容
 * @param key 必须为32位私钥
 * @param iv 初始化向量
 * @returns {string}
 */
function decryptByCBC(data, key, iv) {
    return decrypt(data, key, iv, 'ecb');
}

module.exports = {
    // 生成 AESKEY
    createAesKey: createAesKey,
    // 生成 AES IV
    createAesIv: createAesIv,
    // AES ECB 加密
    encryptByECB: encryptByECB,
    // AES ECB 解密
    decryptByECB: decryptByECB,
    // AES CBC 加密
    encryptByCBC: encryptByCBC,
    // AES CBC 解密
    decryptByCBC: decryptByCBC,
};
