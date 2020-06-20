import React from 'react';
import '../access/css/settings.css'
import {connect} from "react-redux";
import {setActionMainScreen} from "../action"
import ToggleBlock from "./ToggleBlock";

class ChooseCamera extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            toggleState: {}
        };
        this.onChangeCamera = this.onChangeCamera.bind(this);
    }

    componentDidMount() {
        this.props.setActionMainScreenFunction("settings")
    }

    onChangeCamera(e) {
        this.props.cameras.map((camera) => {
            if (camera.cameraName === e.target.value) {
                this.setState({
                    toggleState: camera.peopleState
                })
            }
        });
    }

    render() {
        return (
            <div className="settingsBlock chooseCamera">
                <span className="titleSettingsBlock">Выберите камеру</span>
                <select className="inputBlock" onChange={this.onChangeCamera} defaultValue={"non"}>
                    <option value="non" disabled hidden>Нет камер</option>
                    {this.props.cameras && this.props.cameras.map((camera) => {
                        return <option key={camera.cameraName} className="inputItem" value={camera.cameraName}>{camera.cameraName}</option>
                    })}
                </select>
                <span className="titleSettingsBlock">Отображение характеристик на экране</span>
                <ToggleBlock toggleState={this.state.toggleState}/>
            </div>
        );
    }
}
function MapStateToProps(state) {
    return {
        page: state.mainScreenInfo.page,
        cameras: state.cameraReducer.cameras,
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
