import React, {Component} from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {Link} from "react-router-dom";

export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (

      <Navbar className="navBar" color="dark" dark expand="md">
          {/*<NavbarToggler onClick={this.toggle}>*/}
          <NavbarBrand tag={Link} to="/">Home</NavbarBrand>
          <NavbarBrand tag={Link} to="/login">Login</NavbarBrand>
          <NavbarBrand tag={Link} to="/my-user">Login</NavbarBrand>
          <NavbarBrand tag={Link} to="/faq">FAQ</NavbarBrand>
          {/*asd</NavbarToggler>*/}
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink href="https://github.com/djeleniewicz/cmms">Code</NavLink>
            </NavItem>
          </Nav>
        </Collapse>

      </Navbar>

    );
  }
}
