# rsa_aes_utils

RSA、AES 加解密，浏览器端 JS 加密，服务端 nodejs、java 解密。

[JS 版在线示例](https://shenbao.github.io/rsa_aes_utils/example/rsa-aes-demo/)

## 加解密介绍

加密算法分对称加密和非对称算法，其中对称加密算法的加密与解密密钥相同，非对称加密算法的加密密钥与解密密钥不同，此外，还有一类不需要密钥的散列算法。

常见的对称加密算法主要有 DES、3DES、AES 等，常见的非对称算法主要有 RSA、DSA 等，散列算法主要有SHA-1、MD5 等。

对称算法又可分为两类。一次只对明文中的单个位（有时对字节）运算的算法称为序列算法或序列密码。另一类算法是对明文的一组位进行运算（即运算之前将明文分为若干组，然后分别对每一组进行运算，这些位组称为分组），相应的算法称为分组算法或分组密码。

## AES 加密

- [AES 加密](./AES.md)

## RSA 加密

- [RSA 加密](./RSA.md)

## AES + RSA => 数据加密方案

RSA 等非对称加密,字符串过长,很慢不适用; 可参考 HTTPS, 生成随机数,通过 RSA 交换随机数, 使用随机数作密码,用AES 加密.

![rsa-aes.png](./img/rsa-aes.png)

流程：

接收方创建 RSA 秘钥对，

发送 RSA 公钥给发送方，自己保留 RSA 私钥

发送方创建 AES 密钥，加密待传送的明文，之后用 RSA 公钥加密该密钥，

RSA 公钥加密 AES 的密钥 + AES 密钥加密明文的密文----通过 Internet 发给---->接收方

接收方用 RSA 私钥解密加密的密钥，之后再用解密后的 AES 密钥解密数据密文，得到明文。

应用场景：

1. 注册登录流程；
2. 敏感数据传递：比如身份证号、银行卡号等信息；

## 前端 JS 加解密

API
- [crypto-js](https://code.google.com/archive/p/crypto-js/)
- [jsencrypt](http://travistidwell.com/jsencrypt/)

依赖
- [crypto-js](https://www.npmjs.com/package/crypto-js)
- [jsencrypt](https://www.npmjs.com/package/jsencrypt)

```bash
npm i crypto-js -D // AES加密算法
npm i jsencrypt -D // RSA加密算法
```

## js

具体代码实现见 js-util 内。

test.js
```js
import RSAUtil from '../utils/RSAUtil';
import AESUtil from "../utils/AESUtil";

// 请替换 key
var rsaPublicKey = `PUBLIC KEY`;
var rsaPrivateKey = `PRIVATE KEY`;
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

console.log('%c======================= AES + RSA  加解密 =======================', 'color: red;');
console.log("data:", JSON.stringify(data, null, 4));

var aesKey = AESUtil.createAesKey();
var encryptedData = AESUtil.encryptByECB(data, aesKey);
var encryptedAesKey = RSAUtil.publicEncrypt(aesKey, rsaPublicKey);

var encrypted = {
    aesKey,
    encryptedAesKey,
    encryptedData
};

console.log('encrypted:', JSON.stringify(encrypted, null, 4));

var decryptAesKey = RSAUtil.privateDecrypt(encryptedAesKey, rsaPrivateKey);
var decryptedData = AESUtil.decryptByECB(encryptedData, decryptAesKey);

var decrypted = {
    decryptAesKey,
    decryptedData
}
console.log('decrypted:', JSON.stringify(decrypted, null, 4));
```

## nodejs

具体代码实现见 node-utils 内。

## java

具体代码实现见 java-utils 内。

## 更多链接

- [GitHub 主页](https://github.com/ShenBao)
- [博客地址](https://shenbao.github.io)
