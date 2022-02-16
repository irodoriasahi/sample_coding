import styled from "styled-components";
import logo from "./img/logo.png";
//画像等をインポートするときは{}はいらない

export const Fv = () => {

  return (
    <SContainer>
    <img src={logo} alt="logo" />
      <p>COMING SOON</p>
    </SContainer>
  );
};

const SContainer = styled.div`
  padding: "8px";
`;
