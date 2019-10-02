var fs = require('fs')
var RSAUtil = require('../util/RSAUtil');

var publicKey = fs.readFileSync('../openssl/rsa_public_key.pem');
var privateKey = fs.readFileSync('../openssl/rsa_private_key.pem');

console.log(publicKey.toString());
console.log(privateKey.toString());

var data = "3g01vibca1u1o53hz9pzpks2eqb51y5p";
console.log("data: ", data)

//公钥加密
var encryptData = RSAUtil.publicEncrypt(data, publicKey);
console.log("encryptData: ", encryptData)

//私钥解密
var decryptData = RSAUtil.privateDecrypt(encryptData, privateKey)
console.log("decryptData: ", decryptData)
