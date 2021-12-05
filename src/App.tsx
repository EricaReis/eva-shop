import React from "react";
import "./styles/app.css";
import { ThemeProvider } from "styled-components";
import { StylesProvider, MuiThemeProvider } from "@material-ui/core/styles";
import Theme from "./styles/theme";

import Routes from "./routes";

const App: React.FC = () => (
  <StylesProvider>
    <MuiThemeProvider theme={Theme}>
      <ThemeProvider theme={Theme}>
        <Routes />
      </ThemeProvider>
    </MuiThemeProvider>
  </StylesProvider>
);

export default App;