# node-util

RSAUtil.test.js
```js
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
```

AESUtil.ECB.test.js
```js
var AESUtil = require('../util/AESUtil');

var data = {
    createTime: Date.now(),
    userInfo: {
        name: 'Zhang San',
        sex: '男',
        National: 'Han',
        age: 18,
        IdentityCardNo: '身份证号码',
        mobilePhone: '139 1949 2019'
    },
    address: {
        state: "BeiJing",
        city: "BeiJing",
        code: "100000",
        address: "xxx"
    }
};

console.log('================================ AES ECB 加密 ================================');
console.log("data:", JSON.stringify(data, null, 4));

var key = AESUtil.createAesKey();
console.log('key:', key);

var encryptedData = AESUtil.encryptByECB(data, key);
console.log('encryptedData:', encryptedData);

var decryptedData = AESUtil.decryptByECB(encryptedData, key);
console.log('decryptedData:', decryptedData);
```
