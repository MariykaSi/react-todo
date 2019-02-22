import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import "./styles/scss/global.scss";
import store from "./store";

import Home from "./pages/Home";

import SignIn from "./pages/SignIn";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SignIn} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("app")
);
