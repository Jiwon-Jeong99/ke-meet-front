import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  body {
    font-family:'Inter', sans-serif;
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: 100%;
    display: flex;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 480px;
    height: 5vh;
    max-height: 5vh;
    display: flex;
  }
`;

export default GlobalStyle;
