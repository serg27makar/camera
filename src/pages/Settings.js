import React from 'react';
import '../acess/css/settings.css'
import {connect} from "react-redux";
import {setActionMainScreen} from "../action"
import CaseEmergency from "../components/CaseEmergency"
import ValuesCritical from "../components/ValuesCritical";
import ChooseCamera from "../components/ChooseCamera";

class Settings extends React.Component {
    componentDidMount() {
        this.props.setActionMainScreenFunction("settings")
    }
    render() {
        return (
            <div className="settingsScreen">
                <div className="settingsBlocks">
                    <ChooseCamera/>
                    <ValuesCritical/>
                    <CaseEmergency/>
                </div>
                <div className="formButtonBlock">
                    <button className="settingsButton saveSettings">Сохранить настройки</button>
                    <button className="settingsButton cancelSettings">Отменить</button>
                </div>
            </div>
        );
    }
}
function MapStateToProps(state) {
    return {
        page: state.mainScreenInfo.page,
    }
}
const mapDispatchToProps = dispatch => {
    return{
        setActionMainScreenFunction: (page) => {
            dispatch(setActionMainScreen(page))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Settings);
