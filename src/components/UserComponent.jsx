import React from 'react';
import UserService from "../services/UserService";
import AppNavbar from '../AppNavbar';
import {Button, ButtonGroup, Container} from "reactstrap";
import {Link} from "react-router-dom";

class UserComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({users: response.data})
        });
    }

    render() {
        return (
            <div>
                <AppNavbar/>
                <h1 className="text-center">Users List</h1>
                <div className="float-right">
                    <Button color="success" tag={Link} to="/add-user">Add new user</Button>
                </div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <td>User Id</td>
                        <td>User firstName</td>
                        <td>User login</td>
                        <td>User lastName</td>
                        <td>User password</td>
                        <td>User created</td>
                        <td>User role</td>
                        <td>
                            <ButtonGroup>
                                <Button size="sm" color="primary" tag={Link} to={"/users/" + users.id}>Edit</Button>
                                <Button size="sm" color="danger" onClick={() => this.end(users.id)}>End</Button>
                            </ButtonGroup>
                        </td>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.users.map(
                            user =>
                                <tr key={user.id}>
                                    <td>{user.id}</td>
                                    <td>{user.firstName}</td>
                                    <td>{user.username}</td>
                                    <td>{user.lastName}</td>
                                    <td>{user.password}</td>
                                    <td>{user.created}</td>
                                    <td>{user.roles.name}</td>
                                </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserComponent;