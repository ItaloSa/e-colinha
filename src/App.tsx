import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { Router } from "./routes";
import { DataProvider } from "./services/data/context";
import { GlobalStyle } from "./styles/global";
import { theme } from "./styles/themes/default";

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
