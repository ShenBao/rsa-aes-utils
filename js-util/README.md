# js-util

test.js
```js
import RSAUtil from '../util/RSAUtil';

var rsaPublicKey = `-----BEGIN PUBLIC KEY------`;

var rsaPrivateKey = `-----BEGIN PRIVATE KEY-----`;

console.log('%c======================= RSA 加解密 =======================', 'color: red;');
console.log('rsaPublicKey:', rsaPublicKey);
console.log('rsaPrivateKey:', rsaPrivateKey);

var data = '3g01vibca1u1o53hz9pzpks2eqb51y5p';
console.log('data:', data);

var encryptedData = RSAUtil.publicEncrypt(data, rsaPublicKey);
console.log('encrypted data:', encryptedData);

var decryptedData = RSAUtil.privateDecrypt(encryptedData, rsaPrivateKey);
console.log('decrypted data:', decryptedData);
```
