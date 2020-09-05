import React, {Component} from "react";
import AppNavbar from "../AppNavbar";

export default class Profile extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: JSON.parse(sessionStorage.getItem("user"))
        };
    }

    render() {
        const {currentUser} = this.state;
        console.log(currentUser);

        return (
            <div className="container">
                <AppNavbar/>
                <header className="jumbotron">
                    <h3>
                        Profil użytkownika
                    </h3>
                    <h3><strong>Witaj, {currentUser.firstName}</strong></h3>
                    <h3>
                    </h3>
                </header>
                <p>
                    <strong>Imie:</strong>
                    {currentUser.firstName}
                </p>
                <p>
                    <strong>Nazwisko:</strong>
                    {currentUser.lastName}
                </p>
                <p>
                    <strong>API Token:</strong>
                    {currentUser.accessToken.substring(0, 20)} ...{" "}
                    {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
                </p>
                <strong>Posiadane role:</strong>
                <ul>
                    {currentUser.roles &&
                    currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
                </ul>
            </div>
        );
    }
}
