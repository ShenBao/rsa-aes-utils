import { Form, Input, Select, Button, Divider } from "antd";
import CryptoJS from "crypto-js";
import { useEffect, useLayoutEffect } from "react";

import { AESWrapper } from "./styled";
import useAES from "./useAES";

const modeOptions = Object.keys(CryptoJS.mode).map((it) => {
  return { value: it, label: it };
});

const paddingOptions = Object.keys(CryptoJS.pad).map((it) => {
  return { value: it, label: it };
});

const AES = () => {
  const {
    form,
    mode,
    inputString,
    outputString,
    handleChangeInput,
    handleCreateKey,
    handleCreateIv,
    handleEncrypt,
    handleDecrypt,
  } = useAES();

  return (
    <AESWrapper>
      <div className="input-data">
        <Input.TextArea
          placeholder="请输入需要加密或者解密的内容"
          value={inputString}
          onChange={handleChangeInput}
        />
      </div>
      <div className="encryption-config">
        <Divider plain>
          <h3>加解密配置</h3>
        </Divider>

        <Form
          name="basic"
          layout="vertical"
          form={form}
          initialValues={{
            mode: "ECB",
            padding: "Pkcs7",
            type: 256,
          }}
        >
          <Form.Item
            label="mode"
            name="mode"
            rules={[{ required: true, message: "Please select mode!" }]}
          >
            <Select options={modeOptions} />
          </Form.Item>
          <Form.Item
            label="padding"
            name="padding"
            rules={[{ required: true, message: "Please select padding!" }]}
          >
            <Select options={paddingOptions} />
          </Form.Item>
          <Form.Item
            label="type"
            name="type"
            rules={[{ required: true, message: "Please select padding!" }]}
          >
            <Select
              options={[
                { value: 256, label: "AES-256" },
                { value: 192, label: "AES-192" },
                { value: 128, label: "AES-128" },
              ]}
            />
          </Form.Item>

          <Form.Item
            label={
              <>
                key
                <Button size="small" onClick={handleCreateKey}>
                  生成key
                </Button>
              </>
            }
            name="key"
            rules={[{ required: true, message: "Please input key!" }]}
          >
            <Input.TextArea />
          </Form.Item>
          {mode !== "ECB" ? (
            <Form.Item
              label={
                <>
                  iv
                  <Button size="small" onClick={handleCreateIv}>
                    生成iv
                  </Button>
                </>
              }
              name="iv"
              rules={[{ required: true, message: "Please input iv!" }]}
            >
              <Input.TextArea />
            </Form.Item>
          ) : null}

          <Form.Item>
            <Button type="primary" onClick={handleEncrypt}>
              encrypt
            </Button>
            <Button type="primary" onClick={handleDecrypt}>
              decrypt
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="output-data">
        <Input.TextArea
          placeholder="加密或者解密的内容将在此显示"
          value={outputString}
        />
      </div>
    </AESWrapper>
  );
};

export default AES;
