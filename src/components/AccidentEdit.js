import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Button, Container, Form, FormGroup, Input, Label } from 'reactstrap';
import AppNavbar from '../AppNavbar';

class AccidentEdit extends Component {

    emptyItem = {
        title: '',
        note: '',
        equipment: '',
        createdBy: '',
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

    async componentDidMount() {
        if (this.props.match.params.id !== 'new') {
            const accident = await (await fetch(`end-accident/${this.props.match.params.id}`)).json();
            this.setState({item: accident});
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

        await fetch('http://localhost:8080/api/v1/end-accident/', {
            method: (item.id) ? 'PUT' : 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item),
        });
        this.props.history.push('/accidents');
    }

    render() {
        const {item} = this.state;
        const title = <h2>{item.id ? 'End Accident' : 'Create accident'}</h2>;

        return <div>
            <AppNavbar/>
            <Container>
                {title}
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="title">Title</Label>
                        <Input type="text" name="title" id="title" value={item.title || ''}
                               onChange={this.handleChange} autoComplete="name"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="note">Description</Label>
                        <Input type="textarea" name="note" id="note" value={item.note || ''}
                               onChange={this.handleChange} autoComplete="address-level1"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">Equipment</Label>
                        <Input type="text" name="city" id="createdBy" value={item.createdBy || ''}
                               onChange={this.handleChange} autoComplete="address-level1"/>
                    </FormGroup>
                    {/*<div className="row">*/}
                    {/*    <FormGroup className="col-md-4 mb-3">*/}
                    {/*        <Label for="stateOrProvince">State/Province</Label>*/}
                    {/*        <Input type="text" name="stateOrProvince" id="stateOrProvince" value={item.stateOrProvince || ''}*/}
                    {/*               onChange={this.handleChange} autoComplete="address-level1"/>*/}
                    {/*    </FormGroup>*/}
                    {/*    <FormGroup className="col-md-5 mb-3">*/}
                    {/*        <Label for="country">Country</Label>*/}
                    {/*        <Input type="text" name="country" id="country" value={item.country || ''}*/}
                    {/*               onChange={this.handleChange} autoComplete="address-level1"/>*/}
                    {/*    </FormGroup>*/}
                    {/*    <FormGroup className="col-md-3 mb-3">*/}
                    {/*        <Label for="country">Postal Code</Label>*/}
                    {/*        <Input type="text" name="postalCode" id="postalCode" value={item.postalCode || ''}*/}
                    {/*               onChange={this.handleChange} autoComplete="address-level1"/>*/}
                    {/*    </FormGroup>*/}
                    {/*</div>*/}
                    <FormGroup>
                        <Button color="primary" type="submit">Save</Button>{' '}
                        <Button color="secondary" tag={Link} to="/accidents">Cancel</Button>
                    </FormGroup>
                </Form>
            </Container>
        </div>
    }
}

export default withRouter(AccidentEdit);