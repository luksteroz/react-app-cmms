import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Accident from "./components/Accident";
import AccidentEdit from "./components/AccidentEdit";
import User from "./components/User";
import UserEdit from "./components/UserEdit";
import Equipment from "./components/Equipment";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path='/' exact={true} component={Home}/>
                <Route path='/accidents' exact={true} component={Accident}/>
                <Route path='/accidents/:id' component={AccidentEdit}/>
                <Route path='/users' exact={true} component={User}/>
                <Route path='/users/:id' component={UserEdit}/>
                <Route path='/equipments/' component={Equipment}/>
                {/*<Route path='/eqipments/:id' component={EquipmentEdit}/>*/}
            </Switch>
        </Router>
    </div>
  );
}

export default App;