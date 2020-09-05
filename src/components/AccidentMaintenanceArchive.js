import React, {Component} from 'react';
import {Button, ButtonGroup, Container, Table} from 'reactstrap';
import AppNavbar from '../AppNavbar';
import {Link} from 'react-router-dom';


class AccidentMaintenanceArchive extends Component {

    constructor(props) {
        super(props);
        this.state = {accidents: [], isLoading: true};
    }

    componentDidMount() {
        this.setState({isLoading: true});

        fetch('/api/v1/maintenance/accidents-archive')
            .then(response => response.json())
            .then(data => this.setState({accidents: data, isLoading: false}));
    }

    render() {
        const {accidents, isLoading} = this.state;

        if (isLoading) {
            return <p>ładowanie...</p>;
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
                        <Button size="sm" color="primary" tag={Link} to={"accidents/" + accident.id}>Szczegóły</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/maintenance/active-accidents">Wróc</Button>
                    </div>
                    <h3>Wszystkie zakończone awarie</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th width="20%">Tytuł</th>
                            <th width="20%">Opis awariii</th>
                            <th>Stworzony</th>
                            <th>Piorytet</th>
                            <th>Przypisany do</th>
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

export default AccidentMaintenanceArchive;