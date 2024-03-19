import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
		box-sizing: border-box;
    list-style: none;
    text-decoration: none;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background-color: #F2FFE9;
    font-family: "Montserrat Alternates", sans-serif;
  }

  h1, h2 {
    font-weight: 500;
    font-size: 56px;
  }

  p {
    font-size: 22px;
    padding: 0 64px;
  }

  .container {
    max-width: 1280px;
    width: 100%;
    margin: 0 auto;
  }
`;

export default GlobalStyle;
