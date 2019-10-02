import AESUtil from "../util/AESUtil";

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

console.log('%c======================= AES ECB  加解密 =======================', 'color: red;');
console.log("data:", JSON.stringify(data, null, 4));

var aesKey = AESUtil.createAesKey();
var aesIv = AESUtil.createAesIv();
console.log("aesKey:", aesKey);
console.log("aesIv:", aesIv);

var encryptedData = AESUtil.encryptByECB(data, aesKey, aesIv);
console.log('encrypted data:', encryptedData);

var decryptedData = AESUtil.decryptByECB(encryptedData, aesKey, aesIv);
console.log('decrypted data:', decryptedData);