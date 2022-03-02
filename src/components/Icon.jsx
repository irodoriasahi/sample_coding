import styled from "styled-components";

export const Icon = (props) => {
  return (
    <>
      <SIcon src={props.image} className={props.text} />
    </>
  );
};

const SIcon = styled.img`
  &.IconLarge {
    width: 60px;
    position: absolute;
    left: calc(50% - 30px);
    top: -30px;
  }
  &.IconSmall {
    width: 30px;
  }
`;
