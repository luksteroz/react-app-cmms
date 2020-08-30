import React, {Component} from "react";
import "./App.css";
import AppNavbar from "./AppNavbar";
import {Link} from "react-router-dom";
import {Button, Container} from "reactstrap";
import "./index.css";

class Home extends Component {
  render() {
    return (
      <div>
        <AppNavbar />
        <Container fluid>
            <h2>Menu administracyjne</h2>
            <Button color="link"><Link to="/accidents"> Zarządzanie awariami</Link></Button>
            <Button color="link"><Link to="/users">Zarządzanie użytkownikami</Link></Button>
            <Button color="link"><Link to="/equipments">Zarządzanie zasobami</Link></Button>
            <Button color="link"><Link to="/orders">Zarządzanie zamówieniami</Link></Button>
        </Container>
          <Container fluid>
              <h2>Menu użytkownika</h2>
              <Button color="link"><Link to="/user/accidents">Lista zgłoszonych awarii</Link></Button>
              <Button color="link"><Link to="/user/accidents">Dodaj zgłoszenie</Link></Button>
          </Container>
          <Container fluid>
              <h2>Menu utrzymania</h2>
              <Button color="link"><Link to="/maintenance/accidents">Aktywne awarie</Link></Button>
              <Button color="link"><Link to="/maintenance/accidents">Moje podjęte awarie</Link></Button>
              <Button color="link"><Link to="/maintenance/accidents">Archiwum awarii</Link></Button>
              <Button color="link"><Link to="/maintenance/accidents">Dodaj zgłoszenie</Link></Button>
              <Button color="link"><Link to="/maintenance/accidents">Planowane przeglądy</Link></Button>
              <Button color="link"><Link to="/maintenance/accidents">Dodaj przegląd</Link></Button>
              <Button color="link"><Link to="/maintenance/accidents">Zasoby</Link></Button>
          </Container>
      </div>
    );
  }
}

export default Home;