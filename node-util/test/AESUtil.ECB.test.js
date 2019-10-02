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
