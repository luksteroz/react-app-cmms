import React, {Component} from "react";
import "../App.css";
import AppNavbar from "../AppNavbar";
import {Link} from "react-router-dom";
import {Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import "../index.css";

class Login extends Component {
    render() {
        return (
            <div>
                <Container>
                    <AppNavbar/>
                    <h2>Login menu</h2>
                    <Form>
                        <FormGroup>
                            <Label for="username">Login</Label>
                            <Input width="20%" type="text" name="username" id="username"/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="password">Password</Label>
                            <Input width="20%" type="password" name="password" id="password"/>
                        </FormGroup>
                        <Button size="sm" color="danger" tag={Link} to="/login-error">Submit</Button>
                        <Button size="sm" color="danger" tag={Link} to="/">Cancel</Button>
                    </Form>

                </Container>
            </div>
        );
    }
}

export default Login;