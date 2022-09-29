import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";

import { Form } from "./containers/Form";
import { DataProvider } from "./services/data/context";
import { TopContainer } from "./styled";
import { theme } from "./theme";
import { Colinha } from "./containers/Colinha";

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
          <Router>
            <Routes>
              <Route path="/" element={<Form />} />
              <Route path="/:uf/:candidatosNum" element={<Colinha />} />
            </Routes>
          </Router>
        </div>
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
