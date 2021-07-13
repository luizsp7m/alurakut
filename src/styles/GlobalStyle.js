import { createGlobalStyle } from 'styled-components';

import { AlurakutStyles } from '../lib/AlurakutCommons';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background-color: ${props => props.theme.backgroundColor};
    transition: background .25s;
  }
  
  #__next {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }
  
  ${AlurakutStyles}
`

export default GlobalStyle;