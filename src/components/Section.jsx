import styled from "styled-components";
import icon from "./img/icon_sakura.png";

export const Section = () => {

  return (

    <SContainer>
      <ul>
        <li>
            <Icon src={icon} alt="桜アイコン" />
            <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </li>
        <li>
          <Icon src={icon} alt="桜アイコン" />
          <p>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</p>
        </li>
      </ul>
      <SText>テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト</SText>
    </SContainer>
  );

};

const SContainer = styled.div`
margin: 0 auto;
  max-width: 600px;
  text-align: center;
  padding: 0 15px;
  background-color: #fff;
  border-radius: 10px;

  ul  {
    padding: 40px 0;
    display: inline-block;

    li {
      display: flex;
      padding-bottom: 10px;

      p {
        padding-left: 7px;
        text-align: left;
      }
    }
    li:last-child {
      padding-bottom: 0;
    }
  }
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
`;

const SText = styled.p`
  text-align: left;
  display: inline-block;
  font-size: 14px;
  padding-bottom: 25px;
`;
