import styled from "styled-components";

import { Header } from "./components/Header";
import BgImage from "./components/img/BgImage.jpg";
//コンポーネントをインポートするときは{}で囲む

export const App = () => {

  return (
    <>
    <Header />
    <SBody>

    </SBody>


    </>

  );
};

const SBody = styled.div`
  background-image: url(${BgImage});
  background-repeat:  repeat;
  background-position:center center;
  background-size:cover;
  width:100vw;
  height:100vh; //heightのみ%指定すると表示されなくなる
`;
