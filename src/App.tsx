import React from "react";
import { BrowserRouter } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Router } from "./routes";

import { DataProvider } from "./services/data/context";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle`
  html, body, #root, #root>div {
    min-height: 100%;
    height: 100%;
  }

  #root {
    background-color: ${(props) => props.theme.white};  
  }

  @media print {
    * {
      color: #000 !important;
      font-size: 12px !important;
    }
    .no_print {
      display: none;
    }
  }
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
