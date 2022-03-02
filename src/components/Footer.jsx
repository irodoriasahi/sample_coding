import styled from "styled-components";
import FooterImg from "./img/footer.jpg";

export const Footer = () => {
  return <SFooter></SFooter>;
};

const SFooter = styled.footer`
  background-image: url(${FooterImg});
  background-repeat: repeat;
  background-position: center center;
  background-size: cover;
  margin: 0 auto;
  width: 100%;
  max-width: 600px;
  max-height: 30px;
  object-fit: cover;
  padding-top: 30px;
  text-align: center;
`;
