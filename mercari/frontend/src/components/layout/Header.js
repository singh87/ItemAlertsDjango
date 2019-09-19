import React, { Component } from "react";

import { PageHeader } from 'antd';

export class Header extends Component {
  render() {
    return (
      <div>
        <PageHeader title="Mercari Alerts" />
      </div>
    );
  }
}

export default Header;
