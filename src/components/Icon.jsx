import styled from "styled-components";


export const Icon = (props) => {
  return (
    <>
    <SIconLarge src={props.image}  ClassName="props.text"/>
    <SIconSmall src={props.image}  ClassName="props.text"/>
    </>
      );
};

  const SIconLarge = styled.img`
      width: 60px;
  `;

    const SIconSmall = styled.img`
      width: 30px;
  `;
