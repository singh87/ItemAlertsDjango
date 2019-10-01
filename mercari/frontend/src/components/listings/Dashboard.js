import React, { Component, Fragment } from "react";
import Sider from '../layout/Sider';
import Listings from './Listings';
import Header from '../layout/Header';
import {Row, Col} from 'antd'

export default function Dashboard() {
    return(
        <Fragment>
            <Header/>
            <Row>
                <Col span={4} style={{padding:"1%"}} >
                    <Sider/>
                </Col>
                <Col span={16}>
                    <Listings/>
                </Col>
            </Row>
            <Listings/>
        </Fragment>
    )
}