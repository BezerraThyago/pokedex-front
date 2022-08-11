import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #F6F8FC;
    --dark-blue:#162440;
    --light-blue: #F6F8FC;
    --gray:#8E99A6;
    --light-gray: #EEEEF0;
    --white: #FFFFFF;
    --red: #FE5350
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  #root {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 30px;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background-color: var(--background);
    -webkit-font-smoothing: antialiansed;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  button {
    cursor: pointer;
    border: none;
    background-color: unset;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
