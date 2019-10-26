# AES

AES加密算法是密码学中的高级加密标准，该加密算法采用对称分组密码体制，密钥长度的最少支持为128、192、256，分组长度128位，算法应易于各种硬件和软件实现。这种加密算法是美国联邦政府采用的区块加密标准，AES标准用来替代原先的DES，已经被多方分析且广为全世界所使用。

A-->(通过 K 加密)-->B-->(通过 K 解密)-->A

AES 加解密涉及到的模式（如 CBC、ECB 等）、偏移量和填充等, 需要查阅资料。


## 前端 AES 加解密

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

[java 安全性文档](https://docs.oracle.com/javase/6/docs/technotes/guides/security/StandardNames.html#algspec)

Oracle JDK 7(经过测试)，AES的默认密码为 AES / ECB / PKCS5Padding
Java 中 AES 加密与解密默认使用 AES/ECB/PKCS5Padding 模式

### ECB 模式： AES/ECB/PKCS5Padding

查到资料说是 java AES的默认密码为AES/ECB/PKCS5Padding，但是试了不行，写成 AES 不加后面的 ECB/PKCS5Padding。

- js 中为：Pkcs7
- java 中为： PKCS5Padding

### CBC 模式： AES/CBC/NOPadding

加解密需要设置 IV

- js 中为：ZeroPadding
- java 中为：NOPadding
