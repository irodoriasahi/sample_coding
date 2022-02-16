import styled from "styled-components";
import logo from "./img/logo.png";
import mv from "./img/mv.jpg";
//画像等をインポートするときは{}はいらない

export const Header = () => {

  return (
    <SContainer>
      <MVimage src={mv} alt="logo" />
      <SLogoContainer>
      <Logo src={logo} alt="logoimagae" />
      <p>COMING SOON</p>
      </SLogoContainer>
    </SContainer>
  );
};

const SContainer = styled.div`
  position: relative;
  text-align: center;
`;

const MVimage = styled.img`
  width: 100%;
`;

const Logo = styled.img`
  width: 50%;
`;

const SLogoContainer = styled.div`
  position: absolute;
  text-align: center;
  top:10vh;
  left: 5vw;
`;

