import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap');
  * {
    margin: 0;
    padding: 0;
    font-family: Nunito, sans-serif;
    box-sizing: border-box;
  }
  body, html {
    height: 100%;
    background: #FFF;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }
`;