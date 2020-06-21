import React from 'react';
import '../access/css/settings.css'
import {connect} from "react-redux";
import {setActionMainScreen} from "../action"
import textFile from "../access/resource/sharedText";

class ValuesCritical extends React.Component {

    componentDidMount() {
        this.props.setActionMainScreenFunction("settings")
    }

    render() {
        return (
            <div className="settingsBlock valuesCritical">
                <span className="titleSettingsBlock">{textFile.CriticalValues}</span>
                <select className="inputBlock">
                    <option className="inputItem">{textFile.standing}</option>
                    <option className="inputItem">{textFile.walking}</option>
                    <option className="inputItem">{textFile.running}</option>
                    <option className="inputItem">{textFile.sitting}</option>
                    <option className="inputItem">{textFile.bentOver}</option>
                    <option className="inputItem">{textFile.moving}</option>
                    <option className="inputItem">{textFile.resting}</option>
                    <option className="inputItem">{textFile.motionless}</option>
                </select>
                <span className="titleSettingsBlock">{textFile.SetParametersSituation}</span>
                <div className="valueBlock">
                    <div className="maxTimeLimit">
                        <span className="labelText">{textFile.More}</span>
                        <input className="secondInput"/>
                        <span className="labelSecText">{textFile.Sec}</span>
                    </div>
                    <div className="maxTimeLimit">
                        <span className="labelText">{textFile.Time}</span>
                        <div className="dateInputBlock">
                            <input className="dateInput"/>
                            <input className="dateInput"/>
                        </div>
                    </div>
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

export default connect(MapStateToProps, mapDispatchToProps)(ValuesCritical);
