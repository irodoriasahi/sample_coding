import styled from "styled-components";


export const Logo = (props) => {
  return (
    <SLogo>
    <img src={"this.props.image"} alt="ロゴ"  />
    </SLogo>
      );
};

const SLogo = styled.img`
  width: 100%;
`;
