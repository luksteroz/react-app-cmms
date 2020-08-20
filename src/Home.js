import React, {Component} from 'react';
import './App.css';
import AppNavbar from './AppNavbar';
import {Link} from 'react-router-dom';
import {Button, Container} from 'reactstrap';

class Home extends Component {
    render() {
        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <h2>Administrator menu</h2>
                    <Button color="link"><Link to="/accidents">Manage Accidents</Link></Button>
                    <Button color="link"><Link to="/users">Manage Users</Link></Button>
                    <Button color="link"><Link to="/equipments">Manage Equipments</Link></Button>
                    <Button color="link"><Link to="/orders">Manage Orders</Link></Button>
                </Container>
            </div>
        );
    }
}

export default Home;