import { createGlobalStyle, css } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${css`
    @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
  `}

  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    
  }

  *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    font-family: 'Muli', sans-serif;
    font-size: 10px;
  }

  body {

  }

  ul { 
    list-style: none; 
  }

  h1, h2, h3 { 
    color: #000; 
  }

  a {
    color: #000;
    text-decoration: none;
  }

  button {
    background: transparent;
    border: 0;
    outline: 0;
  }
`;
