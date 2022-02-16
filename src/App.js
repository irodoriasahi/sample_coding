import styled from "styled-components";
import BgImage from "./components/img/BgImage.jpg";

import { Header } from "./components/Header";
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

const SBody = styled.body`
  background-image: 'url(${BgImage})'
`;
