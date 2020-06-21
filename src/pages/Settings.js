import React from 'react';
import '../access/css/settings.css'
import {connect} from "react-redux";
import {setActionMainScreen} from "../action"
import CaseEmergency from "../components/CaseEmergency"
import ValuesCritical from "../components/ValuesCritical";
import ChooseCamera from "../components/ChooseCamera";
import textFile from "../access/resource/sharedText";

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
                    <button className="settingsButton saveSettings">{textFile.SaveSettings}</button>
                    <button className="settingsButton cancelSettings">{textFile.Cancel}</button>
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
