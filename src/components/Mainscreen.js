import React from 'react';
import {Router, Route} from 'react-router-dom'
import {createBrowserHistory} from 'history'
import '../acess/css/mainScreen.css'
import Settings from "../pages/Settings";
import Cameras from "../pages/Cameras";
import Statistic from "../pages/Statistic";
import Cabinet from "../pages/Cabinet";
import Logout from "../pages/Logout";
import Toolbar from "./Toolbar";

const history = createBrowserHistory();

class MainScreen extends React.Component{

    render() {
        return (
            <div className="mainScreen">
                <Navigate/>
            </div>
        );
    }
}

class Navigate extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div className="routers">
                    <Route exact path='/' component={Cameras}/>
                    <Route path='/camera' component={Cameras}/>
                    <Route path='/settings' component={Settings}/>
                    <Route path='/statistic' component={Statistic}/>
                    <Route path='/cabinet' component={Cabinet}/>
                    <Route path='/logout' component={Logout}/>
                </div>
                <Toolbar/>
            </Router>
        );
    }
}

export default MainScreen;
