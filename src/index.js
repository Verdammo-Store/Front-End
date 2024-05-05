import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Rotas from "./routes/routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = createTheme({
  palette: {
    primary: {
      main: "#73953E",
    },
    secondary: {
      main: "#462B03",
    },
    tertiary: {
      main: "#DDCCB7"
    }
  },
});

root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Rotas />
    </React.StrictMode>
  </ThemeProvider>
);
