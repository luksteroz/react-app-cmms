import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Accident from "./components/Accident";
import AccidentEdit from "./components/AccidentEdit";
import User from "./components/User";
import UserEdit from "./components/UserEdit";

function App() {
  return (
    <div className="App">
        <Router>
            <Switch>
                <Route path='/' exact={true} component={Home}/>
                <Route path='/accidents' exact={true} component={Accident}/>
                <Route path='/users' exact={true} component={User}/>
                <Route path='/accidents/:id' component={AccidentEdit}/>
                <Route path='/users/:id' component={UserEdit}/>
            </Switch>
        </Router>
    </div>
  );
}

export default App;