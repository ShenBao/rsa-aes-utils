/**
 * Copyright (c) 2019-present ShenBao
 * @homepage https://github.com/ShenBao/rsa-aes-utils
 * @author ShenBao <shenbaoone@gmail.com>
 */

var crypto = require('crypto')

/**
 * RSA 公钥加密
 * @param {String} data 待加密内容
 * @param {String} publicKey 加密 publicKey
 */
function publicEncrypt(data, publicKey) {
    var pubKey = publicKey.toString('ascii');
    var encryptedData = crypto.publicEncrypt({
        key: pubKey,
        padding: crypto.constants.RSA_PKCS1_PADDING // 注意这里的常量值要设置为RSA_PKCS1_PADDING
    }, Buffer.from(data)).toString('base64');
    return encryptedData;
}

/**
 * RSA 私钥解密
 * @param {String} data 待解密内容
 * @param {String} privateKey 解密privateKey
 */
function privateDecrypt(data, privateKey) {
    var priKey = privateKey.toString('ascii');
    var decryptData = crypto.privateDecrypt({
        key: priKey,
        padding: crypto.constants.RSA_PKCS1_PADDING
    }, Buffer.from(data.toString('base64'), 'base64')).toString();
    return decryptData;
}

module.exports = {
    // RSA 公钥加密
    publicEncrypt: publicEncrypt,
    // RSA 私钥解密
    privateDecrypt: privateDecrypt
};
