import React, {Component} from "react";
import {Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink} from "reactstrap";
import {Link} from "react-router-dom";

export default class AppNavbar extends Component {
  constructor(props) {
    super(props);
      this.state = {isOpen: false};
    this.toggle = this.toggle.bind(this);
      this.state = {
          currentUser: JSON.parse(sessionStorage.getItem("user"))
      };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
      const {currentUser} = this.state;
      let userName;
      if (currentUser === null) {
          userName = "nieznajomy";
      } else {
          userName = currentUser.firstName;
      }
    return (
      <Navbar className="navBar" color="dark" dark expand="md">
          <h2>Witaj {userName}!</h2>
          {/*<NavbarToggler onClick={this.toggle}>*/}
          <NavbarBrand tag={Link} to="/">Strona domowa</NavbarBrand>
          {/* TODO zrobić panel dla użytkownika loguj/wyloguj/profil  */}
          <NavbarBrand tag={Link} to="/login">Zaloguj</NavbarBrand>
          <NavbarBrand tag={Link} to="/logout">Wyloguj</NavbarBrand>
          <NavbarBrand tag={Link} to="/my-user">Mój użytkownik</NavbarBrand>
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
