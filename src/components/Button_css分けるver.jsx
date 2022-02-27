import styled from "styled-components";

export const Button = (props) => {
    return (
      <SButton type="button" className={props.text}>BUTTON</SButton>
      );
};

const SButton = styled.button`
  &.BgPink {
    background-color: #F1A0C3;
  }
  &.BgBlue {
    background-color: #91E6EC;
  }
  &.BgGreen {
    background-color: #A8ECA2;
  }

  width: 65%;
  max-width: 390px;
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 6px;
  padding: 8px 0;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
