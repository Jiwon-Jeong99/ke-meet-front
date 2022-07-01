import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    /* font-family: "Helvetica", "Arial", sans-serif; */
    line-height: 1.5;
    position:absolute;
    top:50%;
    left:50%;
    max-width: 100%;
    display:inline-block;
    transform:translate(-50%,-50%);
    width:100%;
    max-width:480px;
    height:100vh;
    max-height:100vh;
  }
`;

export default GlobalStyle;
