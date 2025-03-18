import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  /* Box sizing reset */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
  }


  /* Remove default margin */
  body,
  h1, h2, h3, h4, h5, h6,
  p, blockquote, pre,
  figure, hr,
  dl, dd,
  ul, ol,
  a, address, button, 
  input, textarea, select {
    margin: 0;
    padding: 0;
  }

  /* Remove list styles */
  ul, ol {
    list-style: none;
  }

  /* Anchor tags without underline */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* Set default font styles */
  body {
    line-height: 1.5;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    background-color: #f0f0f0;
    color: #333;
    min-height: 100vh;
  }

  /* Media elements */
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  /* Button and input styles reset */
  button, input, textarea, select {
    font: inherit;
    border: none;
    background: none;
    outline: none;
  }

  /* Make everything focusable */
  :focus-visible {
    outline: 2px solid #007bff;
  }
`;

export default GlobalStyle;
