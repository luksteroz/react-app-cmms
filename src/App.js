import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './Home';
import Accident from "./components/Accident";
import AccidentEdit from "./components/AccidentEdit";
import User from "./components/User";
import UserEdit from "./components/UserEdit";
import Equipment from "./components/Equipment";
import Login from "./components/Login";
import LoginError from "./components/LoginError";
import EquipmentEdit from "./components/EquipmentEdit";
import AccidentUser from "./components/AccidentUser";
import AccidentMaintenance from "./components/AccidentMaintenance";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path='/' exact={true} component={Home}/>
                {/*admin menu*/}
                <Route path='/accidents' exact={true} component={Accident}/>
                <Route path='/accidents/:id' component={AccidentEdit}/>
                <Route path='/users' exact={true} component={User}/>
                <Route path='/users/:id' component={UserEdit}/>
                <Route path='/equipments' exact={true} component={Equipment}/>
                <Route path='/equipments/:id' component={EquipmentEdit}/>
                {/*user menu*/}
                <Route path='/user/accidents' exact={true} component={AccidentUser}/>

                {/*maintenance menu*/}
                <Route path='/maintenance/accidents' component={AccidentMaintenance}/>

                <Route path='/login' component={Login}/>
                <Route path='/login-error' component={LoginError}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;