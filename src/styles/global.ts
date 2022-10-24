import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html, body, #root, #root>div {
    min-height: 100%;
    height: 100%;
  }

  #root {
    background: ${({ theme }) => theme.white};  
  }

  @media print {
    * {
      color: ${({ theme }) => theme.black} !important;
      font-size: 12px !important;
    }
    .no_print {
      display: none;
    }
  }
`;
