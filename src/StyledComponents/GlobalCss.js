import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
    *{
      padding: 0px;
      margin: 0px;
      box-sizing: border-box;
      text-decoration: none;
      list-style: none;
      font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    }
    body{
        background-color: #F9FAFD;
    }
`;
export default GlobalStyle;
