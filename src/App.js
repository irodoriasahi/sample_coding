import styled from "styled-components";

import { Header } from "./components/Header";
import { Section } from "./components/Section";
import { Button } from "./components/Button";
import { Footer } from "./components/Footer";
import BgImage from "./components/img/BgImage.jpg";
//コンポーネントをインポートするときは{}で囲む

export const App = () => {

  return (
    <>
    <Header />
    <SMain>
      <Section />
      <Button />
    </SMain>
    <Footer />
    </>
  );
};

const SMain = styled.div`
  background-image: url(${BgImage});
  background-repeat:  repeat;
  background-position:center center;
  background-size:cover;
  width:100%;
  height:100vh; //heightのみ%指定すると表示されなくなる
  margin: 0 auto;
  text-align: center;
  padding: 45px 20px 0 20px;
`;
