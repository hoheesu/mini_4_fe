import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    font-family: "Noto Sans KR", sans-serif;
    box-sizing: border-box;
}
html {
    height: 100%;
}
body {
    background-color: #ddd !important;
    min-height: 100%;
}
a{
        text-decoration: none;
        color: inherit;
    }
    *{
        box-sizing: border-box;
    }
    html, body, div, span, h1, h2, h3, h4, h5, h6, p, 
    a, dl, dt, dd, ol, ul, li, form, label, table{
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 16px;
        vertical-align: baseline;
    }
    body{
        line-height: 1;
        font-family: 'Noto Sans KR', sans-serif;
        background-color: #F6F9F0;
        margin-bottom: 100px;
    }
    ol, ul, li{
        list-style: none;
    }
    button {
        border: 0;
        background: transparent;
        cursor: pointer;
    }

`;

export default GlobalStyle;
