import React, {Component} from "react";
import "../App.css";
import AppNavbar from "../AppNavbar";
import {Link} from "react-router-dom";
import {Button} from "reactstrap";
import "../index.css";

class LoginError extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <h1>Inncorect password</h1>
                <Button size="sm" color="danger" tag={Link} to="/">Back to home</Button>
            </div>
        );
    }
}

export default LoginError;