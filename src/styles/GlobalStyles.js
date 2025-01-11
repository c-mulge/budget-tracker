import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, sans-serif;
    background: #f4f4f4;
    color: #333;
    padding-bottom: 3rem; /* To avoid content being hidden behind the footer */
  }

  a {
    color: #fff;
    text-decoration: none;
  }

  main {
    padding: 1rem;
  }
`;

export default GlobalStyles;
