import styled from "styled-components";

export const Logo = (props) => {
  return <SLogo src={props.image} alt="ロゴ" />;
};

const SLogo = styled.img`
  width: 100%;
`;
