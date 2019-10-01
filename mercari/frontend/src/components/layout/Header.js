import React, { Component } from "react";

import { Typography, Input, Col, Row, Button } from 'antd';
import Title from "antd/lib/typography/Title";

const { Search } = Input;
const { Paragraph } = Typography;

export class Header extends Component {
  render() {
    return (
      <div>
        <header id="header" >
          <Row type="flex" align="middle" style={{padding:"5px 0"}}>
            <Col span={4} style={{padding:"0 20px"}}>
              <Typography  style={{marginTop:"20px"}}>
                <Title level={1}>Mercari Alerts</Title>
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
            <Col span={3} style={{padding:"0 15px"}}>
                <Row>
                    <Col span={12}>
                        <Button type="link">Sign In</Button>
                    </Col>
                    <Col span={12}>
                        <Button>Sign Up</Button>
                    </Col>

                </Row>


            </Col>

          </Row>
        </header>
      </div>
    );
  }
}

export default Header;
