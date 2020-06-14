import React from 'react';
import '../acess/css/settings.css'
import {connect} from "react-redux";
import {setActionMainScreen} from "../action"

class CaseEmergency extends React.Component {
    componentDidMount() {
        this.props.setActionMainScreenFunction("settings")
    }
    render() {
        return (
            <div className="settingsBlock caseEmergency">
                        <span className="titleSettingsBlock">Что делать в случае критической ситуации?<button className="buttonInfo"/></span>
                        <div className="radioInputBlock">
                            <div className="radioInputContainer">
                                <label htmlFor="a">
                                    <input type="radio" name="hopping" value="a" defaultChecked/>
                                    <span/></label>
                                <span className="textReact">Отправить смс на номер</span>
                            </div>
                            <input className="phoneEmergency"/>
                            <div className="radioInputContainer">
                                <label htmlFor="b">
                                    <input type="radio" name="hopping" value="b"/>
                                    <span/></label>
                                <span className="textReact">Отправить e-mail</span>
                            </div>
                            <div className="radioInputContainer">
                                <label htmlFor="c">
                                    <input type="radio" name="hopping" value="c"/>
                                    <span/></label>
                                <span className="textReact">Сделать телефонный звонок</span>
                            </div>
                        </div>
                        <div className="violationMessage">
                            <label className="violationMessageCheckbox">
                                <input type="checkbox" value="1" name="moving" style={{display: "none"}}/>
                                <span className="violationMessageCheckboxToggle"/>
                                <span className="violationMessageText">Дать сообщение на экране монитора и подсветить зону идентифицированного нами как «нарушение»</span>
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
