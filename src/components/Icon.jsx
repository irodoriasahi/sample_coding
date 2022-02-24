import styled from "styled-components";


export const Icon = (props) => {
  return (
    <>
    <SIcon src={props.image}  ClassName="props.ClassName"/>
    </>
      );
};

  const SIcon = styled.img`
    .IconLarge {
      width: 60px;
    }

    .IconSmall {
      width: 30px;
    }
  `;
