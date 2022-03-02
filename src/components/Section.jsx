import styled from "styled-components";
import { Icon } from "./Icon";
import icon from "./img/icon_sakura.png";

export const Section = () => {
  return (
    <SContainer>
      <Icon image={icon} alt="桜アイコン" text="IconLarge" />
      <ul>
        <li>
          <Icon image={icon} alt="桜アイコン" text="IconSmall" />
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </li>
        <li>
          <Icon image={icon} alt="桜アイコン" text="IconSmall" />
          <p>
            テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
          </p>
        </li>
      </ul>
      <SText>
        テキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
      </SText>
    </SContainer>
  );
};

const SContainer = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 600px;
  text-align: center;
  padding: 0 15px;
  background-color: #fff;
  border-radius: 10px;

  ul {
    padding: 40px 0;
    display: inline-block;

    li {
      display: flex;
      padding-bottom: 10px;
      align-items: flex-start; //垂直方向の揃え

      p {
        padding-left: 7px;
        text-align: left;
      }
    }
    li:last-child {
      padding-bottom: 0;
    }
  }

  @media only screen and (min-width: 600px) {
    max-width: 600px;
  }
`;

const SText = styled.p`
  text-align: left;
  display: inline-block;
  font-size: 14px;
  padding-bottom: 25px;
`;
