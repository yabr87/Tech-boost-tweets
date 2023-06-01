import { createGlobalStyle } from 'styled-components';

import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;

  @media ${props => props.theme.media.phone} {
    max-width: 480px;
  }

  @media ${props => props.theme.media.tab} {
    max-width: 768px;
  }

  @media ${props => props.theme.media.desk} {
    max-width: 1280px;
  }
`;

export const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
margin: 0;
 font-family: 'Montserrat', sans-serif;
}

h1,
h2,
h3,
h4,
p {
  margin: 0;
}

img,
svg {
  display: block;
  max-width: 100%;
  height: auto;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
  color: inherit;
}
section {
  padding-top: 20px;
  padding-top: 20px;
} 

`;
