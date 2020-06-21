import React from 'react';
import '../access/css/settings.css'
import {connect} from "react-redux";
import {actionOpenCloseSaveChangeModal, setActionMainScreen} from "../action"
import ToggleBlock from "./ToggleBlock";
import textFile from "../access/resource/sharedText";

class ChooseCamera extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleStateChange: false,
            toggleState: {}
        };
        this.onChangeCamera = this.onChangeCamera.bind(this);
        this.changeCamera = this.changeCamera.bind(this);
        this.toggleStateChange = this.toggleStateChange.bind(this);
    }

    componentDidMount() {
        this.props.setActionMainScreenFunction("settings")
    }

    toggleStateChange(isChange) {
        this.setState({
            ...this.state,
            isToggleStateChange: isChange
        })
    }

    onChangeCamera(e) {
        if (this.state.isToggleStateChange) {
            this.props.openSaveChangeModalFunction();
        } else {
            this.changeCamera(e.target.value);
        }
    }

    changeCamera(val) {
        this.props.cameras.map((camera) => {
            if (camera.cameraName === val) {
                this.setState({
                    toggleState: camera.peopleState
                })
            }
        });
    }

    render() {
        return (
            <div className="settingsBlock chooseCamera">
                <span className="titleSettingsBlock">{textFile.ChooseCamera}</span>
                <select className="inputBlock" onChange={this.onChangeCamera} defaultValue={"non"}>
                    <option value="non" disabled hidden>{textFile.NoCameras}</option>
                    {this.props.cameras && this.props.cameras.map((camera) => {
                        return <option key={camera.cameraName} className="inputItem" value={camera.cameraName}>{camera.cameraName}</option>
                    })}
                </select>
                <span className="titleSettingsBlock">{textFile.DisplayFeaturesOnScreen}</span>
                <ToggleBlock toggleState={this.state.toggleState} toggleStateChange={this.toggleStateChange}/>
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
        openSaveChangeModalFunction: () => {
            dispatch(actionOpenCloseSaveChangeModal())
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(ChooseCamera);
