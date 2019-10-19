
import org.junit.Test;

/**
 * @author Created by ShenBao
 * @description
 * @since on 2019-10-17 20:22.
 */
public class RSAUtilTest {

    String publicKey
        = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAthpIjNeS9DrXI33AZXRKPTQZDfq07rzpkBiiAsLDSl+cJx4gLdFzoB4PYDsNG5rleKJe/LYlWdXzen+TrthwEKsLH2bLXn9FAGcWEmUWGorzgBrnzTUbhlRuroxK4aj5J7W/BdriQqfcLrylKOTg+5pE9XfzhZe8237KqSmUbrguf+gxdMcBjPuz0hp22Lgj6TDUonCGYtfuyn7nl8dVzD+NumFHf8pUTV0atg+sXWoR9AIxz8rZc32fVkEUr7cEYoWS6X65uXNED3Kafd1QEwFXJeBLTRW7kzMtdgvk0U+5W0CLtAKpk54/d1PPobJDaIh8MrA+0yVZhY8xZ5uCLQIDAQAB";
    String privateKey
        = "MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQC2GkiM15L0OtcjfcBldEo9NBkN+rTuvOmQGKICwsNKX5wnHiAt0XOgHg9gOw0bmuV4ol78tiVZ1fN6f5Ou2HAQqwsfZstef0UAZxYSZRYaivOAGufNNRuGVG6ujErhqPkntb8F2uJCp9wuvKUo5OD7mkT1d/OFl7zbfsqpKZRuuC5/6DF0xwGM+7PSGnbYuCPpMNSicIZi1+7KfueXx1XMP426YUd/ylRNXRq2D6xdahH0AjHPytlzfZ9WQRSvtwRihZLpfrm5c0QPcpp93VATAVcl4EtNFbuTMy12C+TRT7lbQIu0AqmTnj93U8+hskNoiHwysD7TJVmFjzFnm4ItAgMBAAECggEAdR3ATTyT2ZlCJiRJKba5zFUGTBRSazx6Jl+BSq9B9EI7ZnkcjvsnFvJeRzCTRI7BSG19E6B9syJDviPwskGnCUFIHQD6iKLnmNOzwU7cAWQeKOSk8jhWpHUG3iGCQ1FuNJjR6w0T+XSFylUvD3bsL0TPVuO3bdLh9nS8GEGSogWilN62a28ULRjOpm0anD1Zpn8daUuGxhY3ebJUcia2gnLBmdvXptuDNmqwzGdn1AwpAybwtBOMm88tgsMIZJjVSN0dyiahtB12VULwPq0j9X4L/hLecNg3SptMBQqRgW6FMKDRl43kj58g56Gt3HJWrTa0Dm+HwWY3Gx2vhIZV4QKBgQDfnms5dWIKuwmJ2evT3joVkVLuVfxaGtsbbwFGiPMvpb7Ap4dHmFEEsFiCEDqXcw9EDqTH3b07aqRxVPEYEF0Wgyrh9BIUiTrF8BkpdH/lJO21Vc9ZJ9RZ+vCAsMgoBhDmjKDziYdFaTSblMu8nS55pm5i3bvcXnWCY/zphmVYOQKBgQDQeNrapg88gjFCTJukFPGN0yoFkELIA1MXyLu7VG0ZSQx1j2bso+i9Djz7rcHc9jwjSkeRUjdmcJzS0Ko6kHBiZFp/vfBMqnVyDLUjmW/Evm9DTi5gOIRkNSDPbMw3T/rM6J5nEe3fonYG/aKHPjaxqqYswsBR21nEWvgT/B5xlQKBgAmkgScnIqUnz498MCkgqgyICbVxS8Ju6gfSz5FFEod5dDJGhxTVQpkbKZXiMUSal4vtvblInIJVZOXmLcdF3V29Jjo8FhOAn2ItqkgZV/J/lyh8nMZRa1y972T9OoRPTqdCZSZbRdP+Z2BWGDr35CsmvBfTS+iCwjpvKVbAjtoxAoGAf/E796akgTExxAu6FYhY+v6WspVnttL7gwRJ2t0km7kOMXQR6bdqleSQHrHz4YUpQUtMAu7fWzpPtL4lSw3sOyZ1uCI8wQB4Vcdgv/lh8/Af3sGzipAFCG7mtQaDiorGVE2LMZx6TZ6qKv4sai4PaRhfJedcGqCxReXCjJlVocUCgYEAtZpsDCLFT98inWsYBGl4eRkYQKVPhFuT4nAyy+kmjmuJ18nq/nd98zYrxxQMXWbpE58awwE5fMC692OOVSVt0BnN4wviLOd3//7XILm0EkcvUYNGsoAkrQna5keCEmHMYzjPstmwxXRxkZJuMxZmKEeGO9BVhdPE4f588egQYPw=";

    @Test
    public void RSATest() throws Exception {

        String data = "qw9hgpnbkz94lolqlzk27oi808eoi01o";
        System.out.println("data: " + data);
        System.out.println("publicKey: " + publicKey);
        System.out.println("privateKey: " + privateKey);

        String encrypted = RSAUtil.encrypt(data, publicKey);
        System.out.println("encrypted: " + encrypted);

        String decrypted = RSAUtil.decrypt(encrypted, privateKey);
        System.out.println("decrypted: " + decrypted);

    }
}
