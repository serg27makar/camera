import React from 'react';
import '../acess/css/settings.css'
import {connect} from "react-redux";
import {setActionMainScreen} from "../action"
import ToggleBlock from "./ToggleBlock";

class ChooseCamera extends React.Component {
    componentDidMount() {
        this.props.setActionMainScreenFunction("settings")
    }
    render() {
        return (
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

export default connect(MapStateToProps, mapDispatchToProps)(ChooseCamera);
