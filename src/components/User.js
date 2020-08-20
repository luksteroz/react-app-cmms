import React, { Component } from 'react';
import { Button, ButtonGroup, Container, Table } from 'reactstrap';
import AppNavbar from '../AppNavbar';
import { Link } from 'react-router-dom';


class User extends Component {

    constructor(props) {
        super(props);
        this.state = {users: [], isLoading: true};
        // this.end = this.end.bind(this);
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('/users')
            .then(response => response.json())
            .then(data => this.setState({users: data.users, isLoading: false}));
    }

    async del(id) {
        await fetch(`/delete-user/${id}`).then(() => {
            let updatedUsers = [...this.state.users].filter(i => i.id !== id);
            this.setState({users: updatedUsers});
        });
    }

    render() {
        const {users, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }


        const userList = users.map(user => {
            // const address = `${accidents.address || ''} ${accidents.city || ''} ${accidents.stateOrProvince || ''}`;
            return <tr key={user.id}>
                <td style={{whiteSpace: 'nowrap'}}>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.username}</td>
                <td>{user.created}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/users/" + user.id}>Edit user</Button>
                        <Button size="sm" color="danger" onClick={() => this.del(users.id)}>Delete</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/users">Add new user</Button>
                    </div>
                    <h3>All Accidents</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="20%">firstName</th>
                            <th width="20%">lastName</th>
                            <th>username</th>
                            <th>created</th>
                            <th width="10%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {userList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default User;