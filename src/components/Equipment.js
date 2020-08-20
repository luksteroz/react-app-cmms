import React, {Component} from 'react';
import {Button, ButtonGroup, Container, Table} from 'reactstrap';
import AppNavbar from '../AppNavbar';
import {Link} from 'react-router-dom';


class Equipment extends Component {

    constructor(props) {
        super(props);
        this.state = {equipments: [], isLoading: true};
    }

    componentDidMount() {
        this.setState({isLoading: true});
        fetch('/api/v1/equips')
            .then(response => response.json())
            .then(data => this.setState({equipments: data, isLoading: false}));
    }

    render() {
        const {equipments, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const equipmentList = equipments.map(equipment => {
            return <tr key={equipment.id}>
                <td style={{whiteSpace: 'nowrap'}}>{equipment.name}</td>
                <td style={{whiteSpace: 'nowrap'}}>{equipment.model}</td>
                <td>{equipment.producer}</td>
                <td>{equipment.dateOfProduction}</td>
                <td>{equipment.location.location}</td>
                <td>{equipment.status}</td>
                <td>{equipment.codeInternal}</td>
                <td>{equipment.intervalInspectionDays}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"/update-equip/" + equipment.id}>Edit</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/equip">Add new equipment</Button>
                    </div>
                    <h3>All Equipments</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th>Name</th>
                            <th>Model</th>
                            <th>Producer</th>
                            <th>Production date</th>
                            <th>Location</th>
                            <th>Status</th>
                            <th>Internal code</th>
                            <th>Interval of Inspections [days]</th>
                            <th width="10%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {equipmentList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default Equipment;