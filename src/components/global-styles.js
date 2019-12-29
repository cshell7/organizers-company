import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  body, #root {
    height: 100vh;
  }

  body {
    margin: 0;
    padding: 0 24px;
    background: #fff;
    background: linear-gradient(to right, #d8dadb 0%, #fff 50%, #d8dadb 100%);
    background-image:url(%PUBLIC_URL%/favicon.ico)
  }

  * {
    box-sizing: border-box
  }

  p {
    margin-block-start: 0;
    margin-block-end: 0;
  }
`
