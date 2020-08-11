import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    outline:0;
    font-family: 'Roboto', sans-serif;
  }

  body {
    min-width: 100vw;
    min-height: 100vh;
    width: 100%;
  }

  .mostrar {
    display: flex;
  }
`