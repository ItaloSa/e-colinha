import React from "react";

import { createGlobalStyle, ThemeProvider } from "styled-components";
import { Form } from "./containers/Form";
import { DataProvider } from "./services/data/context";
import { TopContainer } from "./styled";
import { theme } from "./theme";

const GlobalStyle = createGlobalStyle``;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <DataProvider>
        <GlobalStyle />
        <div className="container">
          <div className="row">
            <div className="col">
              <TopContainer>
                <h1>E-Colinha</h1>
              </TopContainer>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Form />
            </div>
          </div>
        </div>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
