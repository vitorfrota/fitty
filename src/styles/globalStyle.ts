import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }
  body{
    -webkit-font-smoothing: antialiased;
    font-family: 'Montserrat', sans-serif;
  }
  button {
    cursor: pointer;
  }

  #root{
    margin: 0 auto;
    width: 100vw;
    min-height: 100vh;
    background: #2B2D42;
  }
`;
