import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style-type: none;
        font-family: Arial, Helvetica, sans-serif;
    }
    body {
        background-color: rgba(0, 0, 0, 0.899);
        color: white;
    }
    input,
    textarea,
    button,
    select,
    a {
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
`;
