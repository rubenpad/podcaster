import { createGlobalStyle, css, keyframes } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  ${css`
    @import url('https://fonts.googleapis.com/css?family=Muli&display=swap');
  `}

  * {    
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
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
    background: linear-gradient(120deg, #0e242d, #121212);
    letter-spacing: 1px;
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
