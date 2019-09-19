import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import Listings from "./listings/Listings";

import { Provider } from "react-redux";
import store from "../store";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <>
          <Header />
          <div className="container">
            <Listings />
          </div>
        </>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
