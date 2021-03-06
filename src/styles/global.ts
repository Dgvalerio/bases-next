import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
 // Estilização global

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.colors.background};
    color: ${(props) => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }
`;
