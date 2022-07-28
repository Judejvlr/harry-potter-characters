import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'HarryPotter';
  font-style: normal;
  font-weight: 400;
  src: local(''),
       url('../assets/fonts/HarryPotter.ttf') format('truetype'),
}

*{
     font-family: HarryPotter, sans-serif;
}

body{
 max-width: 100vw;
 background-color: ${props => props.theme.palette.common.background};
}
`;