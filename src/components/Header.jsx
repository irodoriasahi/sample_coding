import styled from "styled-components";
import { Logo } from "./Logo";
import mv from "./img/mv.jpg";
import logo_pink from "./img/logo_pink.png";

export const Header = () => {

  return (
    <SHeader>
      <MVimage src={mv} alt="logo" />
      <SLogoContainer>
      <Logo image="logo_pink" />
      <p>COMING SOON</p>
      </SLogoContainer>
    </SHeader>
  );
};

const SHeader = styled.header`
position: relative;
  text-align: center;
`;

const MVimage = styled.img`

  width: 100%;
`;

const SLogoContainer = styled.div`
  position: absolute;
  width: 50%;
  text-align: center;
  top:25%;
  left: 25%;

    p {
      margin: 0;
      font-family: Oriya MN;
      color: #fff;
      font-size: 5vw;
      font-weight: bold;
      text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
`;

