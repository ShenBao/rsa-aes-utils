
import org.junit.Test;

/**
 * @author Created by ShenBao
 * @description
 * @since on 2019-10-17 20:22.
 */
public class AESUtilTest {

    String data = "{\n" +
            "    \"createTime\": 1570800281954,\n" +
            "    \"userInfo\": {\n" +
            "        \"name\": \"Zhang San\",\n" +
            "        \"sex\": \"男\",\n" +
            "        \"National\": \"Han\",\n" +
            "        \"age\": 18,\n" +
            "        \"IdentityCardNo\": \"身份证号码\",\n" +
            "        \"mobilePhone\": \"139 1949 2019\"\n" +
            "    },\n" +
            "    \"address\": {\n" +
            "        \"state\": \"BeiJing\",\n" +
            "        \"city\": \"BeiJing\",\n" +
            "        \"code\": \"100000\",\n" +
            "        \"address\": \"xxx\"\n" +
            "    }\n" +
            "}";
    String key = "h3uh74dnaejac29zhbp3q3rtqzxrd9oc";
    String iv = "fwoxfi01gldtze9c";

    @Test
    public void AESByCBCTest() throws Exception {

        String key = AESUtil.createAesKey();
        System.out.println("key: " + key);
        String iv = AESUtil.createAesIv();
        System.out.println("iv: " + iv);
        String encrypted = AESUtil.encryptByCBC(data, key ,iv);
        String decrypted = AESUtil.decryptByCBC(encrypted, key ,iv);
        System.out.println("encrypted: " + encrypted);
        System.out.println("decrypted: " + decrypted);

    }

    @Test
    public void AESByECBTest() throws Exception {

        String key = AESUtil.createAesKey();
        System.out.println("key: " + key);
        String encrypted = AESUtil.encryptByECB(data, key);
        String decrypted = AESUtil.decryptByECB(encrypted, key);
        System.out.println("encrypted: " + encrypted);
        System.out.println("decrypted: " + decrypted);
    }

}
