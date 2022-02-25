import styled from "styled-components";

export const Button = (props) => {
    return (
      <SButton type="button">BUTTON</SButton>
      );
};

const SButton = styled.button`
  width: 65%;
  max-width: 390px;
  margin-top: 20px;
  margin-bottom: 30px;
  background-color:  ${props => props.color};
  border-radius: 6px;
  padding: 8px 0;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
`;
