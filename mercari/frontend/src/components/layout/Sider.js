import React, { Component } from "react";
import { Menu, Button, InputNumber } from 'antd';

const { SubMenu } = Menu;

export class Sider extends Component {
  // submenu keys of first level
  defaultOpenKeys = ['sub1', 'sub2', 'sub3'];

  state = {
    collapsed:false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };


  render() {
    return (
      <Menu
        defaultOpenKeys={['sub1', 'sub2', 'sub3']}
        inlineIndent="10"
        mode="inline"
        style={{ width: 256 }}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <span>Category</span>
            </span>
          }
        >
          {/* <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <Menu.Item key="3">Option 3</Menu.Item>
          <Menu.Item key="4">Option 4</Menu.Item> */}
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <span>Price</span>
            </span>
          }
        >
          <Menu.ItemGroup key="5">
            <div style={{paddingLeft:"20px"}}>
                <InputNumber defaultValue="Min"></InputNumber>
                <InputNumber defaultValue="Max"></InputNumber>
                <Button block type="primary" style={{marginTop:"10px",width:"180px"}}>Apply</Button>
            </div>
            
              
          </Menu.ItemGroup>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <span>Condition</span>
            </span>
          }
        >
          {/* <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <Menu.Item key="11">Option 11</Menu.Item>
          <Menu.Item key="12">Option 12</Menu.Item> */}
        </SubMenu>
      </Menu>
    );
  }
}

export default Sider;