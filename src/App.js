import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import Home from './Home';
import Accident from "./components/Accident";
import AccidentEdit from "./components/AccidentEdit";
import User from "./components/User";
import UserEdit from "./components/UserEdit";
import Equipment from "./components/Equipment";
import Login from "./components/Login";
import EquipmentEdit from "./components/EquipmentEdit";
import AccidentUser from "./components/AccidentUser";
import AccidentMaintenance from "./components/AccidentMaintenance";
import UserProfile from "./components/UserProfile";
import AccidentUserAdd from "./components/AccidentUserAdd";
import AccidentMaintenanceArchive from "./components/AccidentMaintenanceArchive";
import AccidentMaintenanceEnd from "./components/AccidentMaintenanceEnd";
import AccidentMaintenanceAssign from "./components/AccidentMaintenanceAssign";
import AuthService from "./services/AuthService";

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
                <Route path='/user/add-accident' component={AccidentUserAdd}/>

                {/*maintenance menu*/}
                <Route path='/maintenance/active-accidents' component={AccidentMaintenance}/>
                <Route path='/maintenance/archive-accidents' component={AccidentMaintenanceArchive}/>
                <Route path='/maintenance/take-accident/:id' component={AccidentMaintenanceAssign}/>
                <Route path='/maintenance/end-accident/:id' component={AccidentMaintenanceEnd}/>

                {/*<Route path='/' component={LoginComponent}/>*/}
                {/*<Route path='/' component={LoginComponent}/>*/}
                <Route path='/my-user' component={UserProfile}/>
                <Route path='/login' component={Login}/>
                <Route path='/logout' component={AuthService.logout()}>
                    {/*<Redirect strict from="/logout" to="/"/>*/}
                </Route>
                {/*<AuthenticatedRoute Route path="/courses" exact component={Home} />*/}
            </Switch>
        </Router>
    </div>
  );
}

export default App;