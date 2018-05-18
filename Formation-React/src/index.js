import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import Renting from "./components/Renting";
import store from "./store";
import {Provider} from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Renting />
  </Provider>,
  document.getElementById("root"),
);
