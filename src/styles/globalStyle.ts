import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    background: #FFF;
    color: #000;
    -webkit-font-smoothing: antialiased;
  }
  button {
    cursor: pointer;
  }
  #root{
    margin: 0 auto;
  }
`;
