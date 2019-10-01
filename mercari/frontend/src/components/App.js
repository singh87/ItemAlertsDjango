import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Switch, Redirect} from "react-router-dom";

import Header from "./layout/Header";
import Dashboard from "./listings/Dashboard";
import Login from "./accounts/Login"
import Register from "./accounts/Register"

import { Provider } from "react-redux";
import store from "../store";

import {Row, Col} from "antd";


class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Router>
          <Fragment>

              <div>
                <Switch>
                    <Route exact path="/" component={Dashboard}></Route>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/login" component={Login}/>
                </Switch>
              </div>
          </Fragment>
          </Router>
          
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
