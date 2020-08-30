import React, {Component} from 'react';
import {Link, withRouter} from 'react-router-dom';
import {Button, Container, Form, FormGroup, Input, Label} from 'reactstrap';
import AppNavbar from '../AppNavbar';

class EquipmentEdit extends Component {

    emptyItem = {
        name: '',
        dateOfProduction: '',
        location: '',
        status: '',
        codeInternal: '',
        severity: '',
        model: '',
        producer: '',
        intervalInspectionDays: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const equipment = await (await fetch(`/api/v1/update-equip/${this.props.match.params.id}`)).json();
            this.setState({item: equipment});
        }
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        let item = {...this.state.item};
        item[name] = value;
        this.setState({item});
    }

    async handleSubmit(event) {
        event.preventDefault();
        const {item} = this.state;

        await fetch('/api/v1/update-equip/' + item.id, {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/equipments');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'Edit equipment' : 'Create equipment'}</h2>;

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">name</Label>
                        <Input type="text" name="name" id="name" value={item.name || ''}
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="producer">producer</Label>
                        <Input type="text" name="producer" id="producer" value={item.producer || ''}
                               onChange={this.handleChange} autoComplete="producer"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="model">model</Label>
                        <Input type="text" name="model" id="model" value={item.model || ''}
                               onChange={this.handleChange} autoComplete="model"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="location.name">location</Label>
                        <Input type="text" name="location.name" id="location.name" value={item.location.name || ''}
                               onChange={this.handleChange} autoComplete="location.name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="dateOfProduction">dateOfProduction</Label>
                        <Input type="date" name="dateOfProduction" id="dateOfProduction"
                               value={item.dateOfProduction || ''}
                               onChange={this.handleChange} autoComplete="dateOfProduction"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="codeInternal">codeInternal</Label>
                        <Input type="text" name="codeInternal" id="codeInternal" value={item.codeInternal || ''}
                               onChange={this.handleChange} autoComplete="codeInternal"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="severity">status</Label>
                        <Input type="text" name="status" id="status" value={item.status || ''}
                               onChange={this.handleChange} autoComplete="status"/>
                    </FormGroup> <FormGroup>
                    <Label for="intervalInspectionDays">intervalInspectionDays</Label>
                    <Input type="number" name="intervalInspectionDays" id="intervalInspectionDays"
                           value={item.status || ''}
                           onChange={this.handleChange} autoComplete="intervalInspectionDays"/>
                </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/equipments">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(EquipmentEdit);