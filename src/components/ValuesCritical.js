import React from 'react';
import '../acess/css/settings.css'
import {connect} from "react-redux";
import {setActionMainScreen} from "../action"

class ValuesCritical extends React.Component {
    componentDidMount() {
        this.props.setActionMainScreenFunction("settings")
    }
    render() {
        return (
            <div className="settingsBlock valuesCritical">
                <span className="titleSettingsBlock">Значения критических ситуаций</span>
                <select className="inputBlock">
                    <option className="inputItem">standing</option>
                    <option className="inputItem">walking</option>
                    <option className="inputItem">running</option>
                    <option className="inputItem">sitting</option>
                    <option className="inputItem">bentOver</option>
                    <option className="inputItem">moving</option>
                    <option className="inputItem">resting</option>
                    <option className="inputItem">motionless</option>
                </select>
                <span className="titleSettingsBlock">Задайте параметры этой ситуации</span>
                <div className="valueBlock">
                    <div className="maxTimeLimit">
                        <span className="labelText">Более</span>
                        <input className="secondInput"/>
                        <span className="labelSecText">СЕК</span>
                    </div>
                    <div className="maxTimeLimit">
                        <span className="labelText">Время</span>
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
