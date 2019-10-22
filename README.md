# rsa_aes_utils

RSA、AES 加解密，浏览器端 JS 加密，服务端 nodejs、java 解密。

[JS 版在线示例](https://shenbao.github.io/rsa_aes_utils/example/rsa-aes-demo/)

## 加解密介绍

加密算法分对称加密和非对称算法，其中对称加密算法的加密与解密密钥相同，非对称加密算法的加密密钥与解密密钥不同，此外，还有一类不需要密钥的散列算法。

常见的对称加密算法主要有 DES、3DES、AES 等，常见的非对称算法主要有 RSA、DSA 等，散列算法主要有SHA-1、MD5 等。

对称算法又可分为两类。一次只对明文中的单个位（有时对字节）运算的算法称为序列算法或序列密码。另一类算法是对明文的一组位进行运算（即运算之前将明文分为若干组，然后分别对每一组进行运算，这些位组称为分组），相应的算法称为分组算法或分组密码。

### AES 加密算法

AES加密算法是密码学中的高级加密标准，该加密算法采用对称分组密码体制，密钥长度的最少支持为128、192、256，分组长度128位，算法应易于各种硬件和软件实现。这种加密算法是美国联邦政府采用的区块加密标准，AES标准用来替代原先的DES，已经被多方分析且广为全世界所使用。

A-->(通过 K 加密)-->B-->(通过 K 解密)-->A

AES 加解密涉及到的模式（如 CBC、ECB 等）、偏移量和填充等, 需要查阅资料

### RSA 加密算法

RSA 加密算法是目前最有影响力的公钥加密算法，并且被普遍认为是目前最优秀的公钥方案之一。RSA 是第一个能同时用于加密和数宇签名的算法，它能够抵抗到目前为止已知的所有密码攻击，已被ISO推荐为公钥数据加密标准。RSA 加密算法基于一个十分简单的数论事实：将两个大素数相乘十分容易，但想要对其乘积进行因式分解却极其困难，因此可以将乘积公开作为加密密钥。

RSA加密是一个非对称的加密方式 即：

1. 公钥加密 私钥解密
2. 私钥加密 公钥解密 使用签名确定是否为该私钥加密

```
名称   密钥长度       运算速度   安全性   资源消耗

AES   128、192、256位   快       高       低
```

```
名称   成熟度   安全性(取决于密钥长度)   运算速度   资源消耗

RSA      高             高              慢        高
```

## 前端 JS 加解密

API
- [crypto-js](https://code.google.com/archive/p/crypto-js/)
- [jsencrypt](http://travistidwell.com/jsencrypt/)

依赖
- [crypto-js](https://www.npmjs.com/package/crypto-js)
- [jsencrypt](https://www.npmjs.com/package/jsencrypt)

```bash
npm i crypto-js -D //AES加密算法
npm i jsencrypt -D //RSA加密算法
```

### 前端 RSA 加解密

[在线生成非对称加密公钥私钥对、在线生成公私钥对、RSA Key pair create、生成 RSA 密钥对
](http://web.chacuo.net/netrsakeypair)

### 前端 AES 加解密

AES对称加密算法。

AES是基于数据块的加密方式，每次处理的数据是一块（16字节），当数据不是 16 字节的倍数时自动填充OR手动填充(填充方式取决于使用哪种填充方式)。

支持的模式包括：

- ECB：是一种基础的加密方式，密文被分割成分组长度相等的块（不足补齐），然后单独一个个加密，一个个输出组成密文。
- CBC：是一种循环模式，前一个分组的密文和当前分组的明文异或操作后再加密，这样做的目的是增强破解难度。
- CFB/OFB 实际上是一种反馈模式，目的也是增强破解的难度。
- ECB 和 CBC 的加密结果是不一样的，两者的模式不同，而且 CBC 会在第一个密码块运算时加入一个初始化向量。

补码方式包括：NoPadding，PKCS5Padding，ISO10126Padding；

补码方式的选择依据解码端，例如 OC 解码需要使用 noPadding，crypto-js 解码需要使用PKCS5Padding

加密内容必须为16的倍数，在 PKCS5Padding、ISO10126Padding 填充模式下会自动补位，在noPadding填充模式下需要自己进行补位；

注意：如果结合服务端加密内容使用 crypto-js 进行解密，无需进行 BASE64 解码

java 安全性文档
https://docs.oracle.com/javase/6/docs/technotes/guides/security/StandardNames.html#algspec

Oracle JDK 7(经过测试)，AES的默认密码为 AES / ECB / PKCS5Padding
Java 中 AES 加密与解密默认使用 AES/ECB/PKCS5Padding 模式

#### ECB 模式： AES/ECB/PKCS5Padding

查到资料说是 java AES的默认密码为AES/ECB/PKCS5Padding，但是试了不行，写成 AES 不加后面的 ECB/PKCS5Padding 

js 中为：Pkcs7
java 中为： PKCS5Padding

#### CBC 模式： AES/CBC/NOPadding

加解密需要设置 IV

js 中为：ZeroPadding
java 中为：NOPadding

## AES+RSA=数据加密方案

RSA 等非对称加密,字符串过长,很慢不适用; 可参考HTTPS, 生成随机数,通过RSA交换随机数 使用随机数作密码,用AES 加密.

![rsa-aes.png](./img/rsa-aes.png)

流程：

接收方创建 RSA 秘钥对，

发送 RSA 公钥给发送方，自己保留 RSA 私钥

发送方创建 AES 密钥，加密待传送的明文，之后用 RSA 公钥加密该密钥，

RSA 公钥加密 AES 的密钥 + AES 密钥加密明文的密文----通过 Internet 发给---->接收方

接收方用 RSA 私钥解密加密的密钥，之后再用解密后的 AES 密钥解密数据密文，得到明文。

应用场景：
1. 注册登录流程；
2. 敏感数据：比如身份证号、银行卡号等信息；

## js

具体代码实现见 js-util 内。

test.js
```js
import RSAUtil from '../util/RSAUtil';
import AESUtil from "../util/AESUtil";

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

具体代码实现见 node-util 内。

## java

具体代码实现见 java-util 内。
