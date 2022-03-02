import styled from "styled-components";
import { Logo } from "./Logo";
import mv from "./img/mv.jpg";
import logo_pink from "./img/logo_pink.png";
import logo_blue from "./img/logo_blue.png";
import logo_green from "./img/logo_green.png";

export const Header = () => {
  return (
    <SHeader>
      <MVimage src={mv} alt="logo" />
      <SLogoContainer>
        <Logo image={logo_blue} />
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
  max-width: 600px;
  min-height: 150px; //高さの最小値　指定した大きさ以下にはならない
  object-fit: cover; //画像を自動でトリミング

  @media only screen and (min-width: 600px) {
    max-height: 400px;
  }
`;

const SLogoContainer = styled.div`
  position: absolute;
  width: 50%;
  max-width: 300px;
  text-align: center;
  top: 25%;
  left: 25%;

  p {
    margin: 0;
    font-family: Oriya MN;
    color: #fff;
    font-size: 5vw;
    font-weight: bold;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }

  @media only screen and (min-width: 600px) {
    left: calc(50% - 150px);
    p {
      font-size: 30px;
    }
  }
`;
