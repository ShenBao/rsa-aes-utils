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

console.log('%c======================= AES CBC  加解密 =======================', 'color: red;');
console.log("data:", JSON.stringify(data, null, 4));

var aesKey = AESUtil.createAesKey();
console.log("aesKey:", aesKey);

var encryptedData = AESUtil.encryptByECB(data, aesKey);
console.log('encrypted data:', encryptedData);

var decryptedData = AESUtil.decryptByECB(encryptedData, aesKey);
console.log('decrypted data:', decryptedData);