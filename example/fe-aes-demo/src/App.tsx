import { Tabs } from "antd";
import type { TabsProps } from "antd";

import { AppWrapper } from "./AppStyled";
import AES from "./components/AES";

const items: TabsProps["items"] = [
  {
    key: "aes",
    label: `AES 加密/解密`,
    children: <AES />,
  },
  // {
  //   key: "rsa",
  //   label: `RSA 加密/解密`,
  //   children: `RSA 组件`,
  // },
];

function App() {
  return (
    <AppWrapper className="App">
      <Tabs defaultActiveKey="aes" items={items} />
    </AppWrapper>
  );
}

export default App;
