import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Header from "./layout/Header";
import Listings from "./listings/Listings";
import Sider from "./layout/Sider"

import { Provider } from "react-redux";
import store from "../store";

import {Row, Col} from "antd";
class App extends Component {
  render() {
    return (
      <Provider store={store}>
          
          <Header />
          
          <Row>
            <Col span={4}>
              <Sider/>
            </Col>
            <Col span={16}>
              <Listings />
            </Col>

          </Row>
          
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
