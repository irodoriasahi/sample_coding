import styled from "styled-components";
import FooterImg from "./img/footer.jpg";

export const Footer = () => {
    return (
      <SFooter>
      </SFooter>
      );
};

const SFooter = styled.footer`
  background-image: url(${FooterImg});
  background-repeat:  repeat;
  background-position:center center;
  background-size:cover;
  width:100%;
  height:30px;
  padding-top: 30px;
  text-align: center;
`;
