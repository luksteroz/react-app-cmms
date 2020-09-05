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
            return <p>ładowanie...</p>;
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
                        <Button size="sm" color="primary" tag={Link} to={"/equipments/" + equipment.id}>Edytuj</Button>
                    </ButtonGroup>
                </td>
            </tr>
        });

        return (
            <div>
                <AppNavbar/>
                <Container fluid>
                    <div className="float-right">
                        <Button color="success" tag={Link} to="/equipments/">Dodaj nowy zasób</Button>
                    </div>
                    <h3>Wszystkie zasoby</h3>
                    <Table className="mt-4">
                        <thead>
                        <tr>
                            <th>Nazwa</th>
                            <th>Model</th>
                            <th>Producent</th>
                            <th>Data produkcji</th>
                            <th>Lokalizacja</th>
                            <th>Status</th>
                            <th>Kod wew.</th>
                            <th>Interwał przeglądów [dni]</th>
                            <th width="10%">Akcje</th>
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