import React, {Component} from 'react';
import { Link } from "react-router-dom"
import {Button, Card, Col, Input, Row} from "antd";

export class Register extends  Component {
    state = {
        username: '',
        email: '',
        password: '',
        password2: '',
    }

    render() {
        return (
            <Row type="flex" justify="space-around" align="middle" style={{height:'100vh'}}>
                <Col>
                    <div style={{padding: '30px' }}>
                        <Card title="Register"  style={{ width: 300, boxShadow: "0 3px 6px 0 rgba(0,0,0,0.2)" }}>
                            <Input size="large" placeholder="Username" style={{marginBottom:"10px"}}/>
                            <Input size="large" placeholder="Email Address" />
                            <Input size="large" placeholder="Password" style={{marginTop:"10px"}}/>
                            <Input size="large" placeholder="Confirm Password" style={{marginTop:"10px"}}/>
                            <Button type="primary" size="large" style={{marginTop:"20px", width:"100%"}}>REGISTER</Button>

                        </Card>
                    </div>
                </Col>

            </Row>


        )
    }
}

export default Register