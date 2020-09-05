import React, {Component} from "react";
import AppNavbar from "../AppNavbar";
import {Button, Container, Form, FormGroup, Input, Label} from "reactstrap";
import {Link} from "react-router-dom";
import withRouter from "react-router-dom/es/withRouter";

class AccidentUserAdd extends Component {

    emptyItem = {
        title: '',
        note: '',
        equipment: '',
        priority: ''
    };

    constructor(props) {
        super(props);
        this.state = {
            item: this.emptyItem
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
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

        await fetch('/api/v1/user/add-accident', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/user/accidents');
    }

    render() {
        const title = <h2>Formularz awarii</h2>;

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="title">Tytuł</Label>
                        <Input type="text" name="title" id="title"
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="equipment">Zasób</Label>
                        <Input data-toggle="dropdown" type="dropdown" name="equipment" id="equipment"
                               onChange={this.handleChange} autoComplete="equipment"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="priority">Piorytet</Label>
                        <Input data-toggle="number" type="number" name="priority" id="priority"
                               onChange={this.handleChange} autoComplete="priority"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="note">Opis problemu</Label>
                        <Input type="textarea" name="note" id="note"
                               onChange={this.handleChange} autoComplete="address-level1"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" type="submit">Zapisz</Button>{' '}
                        <Button color="secondary" tag={Link} to="/user/accidents">Anuluj</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(AccidentUserAdd);