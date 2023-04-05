import { useCallback, useState } from "react";
import { Form, message } from "antd";
import { TextAreaProps } from "antd/es/input";
import CryptoJS from "crypto-js";

/**
 * 转换为字符串
 * @param {*} data
 * @returns {String}
 */
function parseToString(data: any) {
  let d = "";
  switch (typeof data) {
    case "string":
      d = data;
      break;
    case "object":
      d = JSON.stringify(data);
      break;
    default:
      d = data.toString();
  }
  return d;
}

const useAES = () => {
  const [form] = Form.useForm<{
    mode: string;
    padding: string;
    type: number;
    key: string;
    iv: string;
  }>();

  const mode = Form.useWatch( "mode", form)

  const [inputString, setInputString] = useState("");
  const [outputString, setOutputString] = useState("");

  const handleChangeInput: TextAreaProps["onChange"] = (e) => {
    setInputString(e.target.value);
  };

  const handleCreateKey = () => {
    const type = form.getFieldValue("type");
    const iv = CryptoJS.lib.WordArray.random(type / 2 / 8).toString(
      CryptoJS.enc.Hex
    );
    form.setFieldValue("key", iv);
    form.validateFields(["key"]);
    message.success("iv 已生成");
  };

  const handleCreateIv = () => {
    const type = form.getFieldValue("type");
    const iv = CryptoJS.lib.WordArray.random(type / 2 / 8).toString(
      CryptoJS.enc.Hex
    );
    form.setFieldValue("iv", iv);
    form.validateFields(["iv"]);
    message.success("iv 已生成");

    console.log("iv1:", iv);
    let iv2 = CryptoJS.lib.WordArray.random(128 / 2 / 8 ).toString(
      CryptoJS.enc.Hex
    );
    console.log("iv2:", iv2);
  };

  const handleEncrypt = useCallback(async () => {
    const values = await form.validateFields();
    console.log(values);
    const { key: aesKey, iv: aesIv, mode, padding } = values;

    const key = CryptoJS.enc.Utf8.parse(aesKey);
    const iv = CryptoJS.enc.Utf8.parse(aesIv);
    const data = parseToString(inputString);
    const srcs = CryptoJS.enc.Utf8.parse(data);
    const encrypted = CryptoJS.AES.encrypt(srcs, key, {
      iv: iv,
      // @ts-ignore
      mode: CryptoJS.mode[mode],
      // @ts-ignore
      padding: CryptoJS.pad[padding],
    });
    const encryptedString = encrypted.toString();
    setOutputString(encryptedString);
  }, [inputString]);

  const handleDecrypt = useCallback(async () => {
    const values = await form.validateFields();
    const { key: aesKey, iv: aesIv, mode, padding } = values;

    const key = CryptoJS.enc.Utf8.parse(aesKey);
    const iv = CryptoJS.enc.Utf8.parse(aesIv);
    const decrypt = CryptoJS.AES.decrypt(inputString, key, {
      iv: iv,
      // @ts-ignore
      mode: CryptoJS.mode[mode],
      // @ts-ignore
      padding: CryptoJS.pad[padding],
    });

    const encryptedString = CryptoJS.enc.Utf8.stringify(decrypt).toString();
    setOutputString(encryptedString);
  }, [inputString]);

  return {
    form,
    mode,
    inputString,
    outputString,
    handleChangeInput,
    handleCreateKey,
    handleCreateIv,
    handleEncrypt,
    handleDecrypt,
  };
};

export default useAES;
