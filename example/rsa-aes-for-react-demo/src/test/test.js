import RSAUtil from '../util/RSAUtil';

import AESUtil from "../util/AESUtil";

var rsaPublicKey = `-----BEGIN PUBLIC KEY-----
MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAthpIjNeS9DrXI33AZXRK
PTQZDfq07rzpkBiiAsLDSl+cJx4gLdFzoB4PYDsNG5rleKJe/LYlWdXzen+Trthw
EKsLH2bLXn9FAGcWEmUWGorzgBrnzTUbhlRuroxK4aj5J7W/BdriQqfcLrylKOTg
+5pE9XfzhZe8237KqSmUbrguf+gxdMcBjPuz0hp22Lgj6TDUonCGYtfuyn7nl8dV
zD+NumFHf8pUTV0atg+sXWoR9AIxz8rZc32fVkEUr7cEYoWS6X65uXNED3Kafd1Q
EwFXJeBLTRW7kzMtdgvk0U+5W0CLtAKpk54/d1PPobJDaIh8MrA+0yVZhY8xZ5uC
LQIDAQAB
-----END PUBLIC KEY-----`;
var rsaPrivateKey = `-----BEGIN PRIVATE KEY-----
MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC2GkiM15L0Otcj
fcBldEo9NBkN+rTuvOmQGKICwsNKX5wnHiAt0XOgHg9gOw0bmuV4ol78tiVZ1fN6
f5Ou2HAQqwsfZstef0UAZxYSZRYaivOAGufNNRuGVG6ujErhqPkntb8F2uJCp9wu
vKUo5OD7mkT1d/OFl7zbfsqpKZRuuC5/6DF0xwGM+7PSGnbYuCPpMNSicIZi1+7K
fueXx1XMP426YUd/ylRNXRq2D6xdahH0AjHPytlzfZ9WQRSvtwRihZLpfrm5c0QP
cpp93VATAVcl4EtNFbuTMy12C+TRT7lbQIu0AqmTnj93U8+hskNoiHwysD7TJVmF
jzFnm4ItAgMBAAECggEAdR3ATTyT2ZlCJiRJKba5zFUGTBRSazx6Jl+BSq9B9EI7
ZnkcjvsnFvJeRzCTRI7BSG19E6B9syJDviPwskGnCUFIHQD6iKLnmNOzwU7cAWQe
KOSk8jhWpHUG3iGCQ1FuNJjR6w0T+XSFylUvD3bsL0TPVuO3bdLh9nS8GEGSogWi
lN62a28ULRjOpm0anD1Zpn8daUuGxhY3ebJUcia2gnLBmdvXptuDNmqwzGdn1Awp
AybwtBOMm88tgsMIZJjVSN0dyiahtB12VULwPq0j9X4L/hLecNg3SptMBQqRgW6F
MKDRl43kj58g56Gt3HJWrTa0Dm+HwWY3Gx2vhIZV4QKBgQDfnms5dWIKuwmJ2evT
3joVkVLuVfxaGtsbbwFGiPMvpb7Ap4dHmFEEsFiCEDqXcw9EDqTH3b07aqRxVPEY
EF0Wgyrh9BIUiTrF8BkpdH/lJO21Vc9ZJ9RZ+vCAsMgoBhDmjKDziYdFaTSblMu8
nS55pm5i3bvcXnWCY/zphmVYOQKBgQDQeNrapg88gjFCTJukFPGN0yoFkELIA1MX
yLu7VG0ZSQx1j2bso+i9Djz7rcHc9jwjSkeRUjdmcJzS0Ko6kHBiZFp/vfBMqnVy
DLUjmW/Evm9DTi5gOIRkNSDPbMw3T/rM6J5nEe3fonYG/aKHPjaxqqYswsBR21nE
WvgT/B5xlQKBgAmkgScnIqUnz498MCkgqgyICbVxS8Ju6gfSz5FFEod5dDJGhxTV
QpkbKZXiMUSal4vtvblInIJVZOXmLcdF3V29Jjo8FhOAn2ItqkgZV/J/lyh8nMZR
a1y972T9OoRPTqdCZSZbRdP+Z2BWGDr35CsmvBfTS+iCwjpvKVbAjtoxAoGAf/E7
96akgTExxAu6FYhY+v6WspVnttL7gwRJ2t0km7kOMXQR6bdqleSQHrHz4YUpQUtM
Au7fWzpPtL4lSw3sOyZ1uCI8wQB4Vcdgv/lh8/Af3sGzipAFCG7mtQaDiorGVE2L
MZx6TZ6qKv4sai4PaRhfJedcGqCxReXCjJlVocUCgYEAtZpsDCLFT98inWsYBGl4
eRkYQKVPhFuT4nAyy+kmjmuJ18nq/nd98zYrxxQMXWbpE58awwE5fMC692OOVSVt
0BnN4wviLOd3//7XILm0EkcvUYNGsoAkrQna5keCEmHMYzjPstmwxXRxkZJuMxZm
KEeGO9BVhdPE4f588egQYPw=
-----END PRIVATE KEY-----`;
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
