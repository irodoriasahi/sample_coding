import styled from "styled-components";


export const Logo = (props) => {
  return (
    <SLogo>
    <img src={"props.image"} alt="ロゴ"  />
    </SLogo>
      );
};

const SLogo = styled.img`
  width: 100%;
`;
