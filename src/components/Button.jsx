import styled from "styled-components";

export const Button = (props) => {
  return (
    <SButton type="button" {...props}>
      BUTTON
    </SButton>
  );
};

const SButton = styled.button`
  width: 65%;
  max-width: 390px;
  margin-top: 20px;
  margin-bottom: 30px;
  border-radius: 6px;
  padding: 8px 0;
  color: #fff;
  background-color: ${(props) => props.color || "black"};
  font-size: 18px;
  font-weight: bold;
`;
