import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

* {
    margin:0;
    padding:0;
    box-sizing: border-box;
    outline: none;
}

html {
    font-size: 62.5%;
}


body {
    background: #1e1e1e;
    color: #e1e1e1;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.container {
    width: 100%;
    max-width: 120rem;
    padding: 0 1rem;
    margin: 0 auto;
    margin-bottom: 5rem;
}

`;
