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
import AddCameraModal from "./modals/AddCameraModal";
import {connect} from "react-redux";
import RemoveCameraModal from "./modals/RemoveCameraModal";
import Login from "../pages/Login";
import Registration from "../pages/Registration";

const history = createBrowserHistory();

class MainScreen extends React.Component {

    render() {
        return (
            <div className="mainScreen">
                <div className={this.props.addModal || this.props.removeModal ? "wrapScreen blurScreen" : "wrapScreen"}>
                    <Navigate/>
                </div>
                <div className="modalBlock">
                    <RemoveCameraModal/>
                    <AddCameraModal/>
                </div>
            </div>
        );
    }
}

class Navigate extends React.Component {
    render() {
        return (
            <Router history={history}>
                <div className="routers">
                    <Route exact path='/' component={Login}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/registration' component={Registration}/>
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

function MapStateToProps(state) {
    return {
        addModal: state.modalReducer.addModal,
        removeModal: state.modalReducer.removeModal,
    }
}

export default connect(MapStateToProps)(MainScreen);
