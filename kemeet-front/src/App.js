import { MediaDiv } from "./styledComponent";

import { useState, useEffect } from "react";

import GlobalStyle from "./GlobalStyle";
import Nav from "./Nav";
import Footer from "./Footer";
import loadingIcon from "./loading.svg";
function App() {
  // 모바일 사이즈에 꽉 맞는 height 설정
  // function setScreenSize() {
  //   let vh = window.innerHeight * 0.01;
  //   document.documentElement.style.setProperty("--vh", `${vh}px`);
  // }
  // useEffect(() => {
  //   setScreenSize();
  // });
  return (
    <>
      <GlobalStyle />
      {/* <MediaDiv /> */}
        <Nav />
        <Footer />
    </>
  );
};

export default App;
