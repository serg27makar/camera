import React from 'react';
import '../access/css/settings.css'
import {connect} from "react-redux";
import {setActionMainScreen} from "../action"
import textFile from "../access/resource/sharedText";

class CaseEmergency extends React.Component {
    componentDidMount() {
        this.props.setActionMainScreenFunction("settings")
    }
    render() {
        return (
            <div className="settingsBlock caseEmergency">
                        <span className="titleSettingsBlock">{textFile.CaseEmergency}<button className="buttonInfo"/></span>
                        <div className="radioInputBlock">
                            <div className="radioInputContainer">
                                <label htmlFor="a">
                                    <input type="radio" name="hopping" value="a" defaultChecked/>
                                    <span/></label>
                                <span className="textReact">{textFile.SendSMS}</span>
                            </div>
                            <input className="phoneEmergency"/>
                            <div className="radioInputContainer">
                                <label htmlFor="b">
                                    <input type="radio" name="hopping" value="b"/>
                                    <span/></label>
                                <span className="textReact">{textFile.SendEmail}</span>
                            </div>
                            <div className="radioInputContainer">
                                <label htmlFor="c">
                                    <input type="radio" name="hopping" value="c"/>
                                    <span/></label>
                                <span className="textReact">{textFile.MakePhoneCall}</span>
                            </div>
                        </div>
                        <div className="violationMessage">
                            <label className="violationMessageCheckbox">
                                <input type="checkbox" value="1" name="moving" style={{display: "none"}}/>
                                <span className="violationMessageCheckboxToggle"/>
                                <span className="violationMessageText">{textFile.GiveMessageViolation}</span>
                            </label>
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

export default connect(MapStateToProps, mapDispatchToProps)(CaseEmergency);
