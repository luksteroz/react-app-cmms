import React, {Component} from 'react';
import {Button, ButtonGroup, Container, Table} from 'reactstrap';
import AppNavbar from '../AppNavbar';
import {Link} from 'react-router-dom';


class AccidentMaintenance extends Component {

    constructor(props) {
        super(props);
        this.state = {accidents: [], isLoading: true};
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('/api/v1/maintenance/accidents')
            .then(response => response.json())
            .then(data => this.setState({accidents: data, isLoading: false}));
    }

    render() {
        const {accidents, isLoading} = this.state;

        if (isLoading) {
            return <p>Loading...</p>;
        }

        const accidentList = accidents.map(accident => {
            return <tr key={accident.id}>
                <td style={{whiteSpace: 'nowrap'}}>{accident.title}</td>
                <td>{accident.note}</td>
                <td>{accident.reportedBy.username}</td>
                <td>{accident.priority.name}</td>
                <td>{accident.assignedTo.username}</td>
                <td>{accident.status.status}</td>
                <td>
                    <ButtonGroup>
                        <Button size="sm" color="primary" tag={Link} to={"accidents/" + accident.id}>Szczegóły
                            awarii</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="accidents/">Add new accident</Button>
                    </div>
                    <h3>All Accidents</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="20%">Title</th>
                            <th width="20%">Description</th>
                            <th>Created By</th>
                            <th>Priority</th>
                            <th>Assigned to</th>
                            <th>Status</th>
                            <th width="10%">Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {accidentList}
                        </tbody>
                    </Table>
                </Container>
            </div>
        );
    }
}

export default AccidentMaintenance;