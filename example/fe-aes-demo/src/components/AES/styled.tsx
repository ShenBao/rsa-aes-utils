import styled from "styled-components";

export const AESWrapper = styled.div`
  display: flex;
  height: 100%;
  .input-data,
  .output-data {
    flex: 1;
    .ant-input {
      height: 100%;
    }
  }
  .encryption-config {
    width: 240px;
    padding: 0 12px;
   .ant-divider {
    margin: 0;
   }
    .ant-btn[type="button"] {
      margin-left: 15px;
    }
  }
`;
