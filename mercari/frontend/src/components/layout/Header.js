import React, { Component } from "react";

import { Typography, Input, Col, Row } from 'antd';
import Title from "antd/lib/typography/Title";

const { Search } = Input;


export class Header extends Component {
  render() {
    return (
      <div>
        <header id="header" style={{padding:"10px 15px"}} >
          <Row>
            <Col span={4}>
              <Typography>
                <Title level={2}>Mercari Alerts</Title>
              </Typography>
              
            </Col>
            <Col span={16}>
              <Search
                placeholder="Search"
                enterButton="Search"
                size="large"
                allowClear="true"
                onSearch={value => console.log(value)}
              />
            </Col>  
          </Row>
        </header>
      </div>
    );
  }
}

export default Header;
