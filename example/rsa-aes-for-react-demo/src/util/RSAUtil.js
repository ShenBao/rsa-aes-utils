/**
 * Copyright (c) 2019-present ShenBao
 * @homepage https://github.com/ShenBao/rsa-aes-utils
 * @author ShenBao <shenbaoone@gmail.com>
 */

import JSEncrypt from 'jsencrypt';

var encryptor = new JSEncrypt();

/**
 * RSA 加密
 * @param {String} data 待加密数据
 * @param {String} publicKey 公钥
 * @returns {String>} 返回加密字符串
 */
function publicEncrypt(data, publicKey) {
  encryptor.setPublicKey(publicKey);
  return encryptor.encrypt(data);
}

/**
 * RSA 解密
 * @param {String} data 待解密数据
 * @param {String} privateKey
 * @returns {String} 返回后解密数据
 */
function privateDecrypt(data, privateKey) {
  encryptor.setPrivateKey(privateKey);
  return encryptor.decrypt(data);
}

export default {
  // RSA 加密
  publicEncrypt: publicEncrypt,
  // RSA 解密
  privateDecrypt: privateDecrypt
};