import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Values } from "redux-form-website-template";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import store from "./store";
import showResults from "./showResults";
import MaterialUiForm from "./components/MaterialUiForm";
import Home from "./components/Home";
import lightBlue from "@material-ui/core/colors/lightBlue";
import orange from "@material-ui/core/colors/orange";
import red from "@material-ui/core/colors/red";
import blueGrey from "@material-ui/core/colors/blueGrey";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";
const rootEl = document.getElementById("root");

const theme = createMuiTheme({
  palette: {
    primary: {
      ...lightBlue,
      "500": "#073669"
    },
    secondary: {
      ...orange,
      "400": blueGrey["50"]
    },
    error: red
  }
});

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  rootEl
);
