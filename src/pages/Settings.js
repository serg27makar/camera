import React from 'react';
import '../acess/css/settings.css'
import {connect} from "react-redux";
import {setActionMainScreen} from "../action"
import ToggleBlock from "../components/ToggleBlock";

class Settings extends React.Component {
    componentDidMount() {
        this.props.setActionMainScreenFunction("settings")
    }
    render() {
        return (
            <div className="settingsScreen">
                <div className="settingsBlocks">
                    <div className="settingsBlock chooseCamera">
                        <span className="titleSettingsBlock">Выберите камеру</span>

                        <select className="inputBlock">
                            <option className="inputItem">Камера 1</option>
                            <option className="inputItem">Камера 2</option>
                            <option className="inputItem">Камера 3</option>
                        </select>
                        <span className="titleSettingsBlock">Отображение характеристик на экране</span>
                        <ToggleBlock />
                    </div>
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
                    <div className="settingsBlock caseEmergency">
                        <span className="titleSettingsBlock">Что делать в случае критической ситуации?<button className="buttonInfo"></button></span>
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
