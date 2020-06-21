import React from 'react';
import '../access/css/settings.css'
import {connect} from "react-redux";
import {actionOpenCloseSaveChangeModal, actionSelectCamera, actionSettingsChange, setActionMainScreen} from "../action"
import ToggleBlock from "./ToggleBlock";
import textFile from "../access/resource/sharedText";
import {isEmptyObject} from "../access/resource/functionLib";

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
        if (!isEmptyObject(this.props.selectCamera)) {
            this.changeCamera(this.props.selectCamera);
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.selectCamera !== this.props.selectCamera && this.props.selectCamera) {
            this.changeCamera(this.props.selectCamera);
        }
    }

    toggleStateChange(isChange) {
        this.setState({
            ...this.state,
            isToggleStateChange: isChange
        })
    }

    onChangeCamera(e) {
        this.checkCamera(e.target.value);
        if (this.state.isToggleStateChange) {
            this.props.settingsChangeFunction(this.props.selectCamera);
            this.props.openSaveChangeModalFunction();
            this.setState({
                isToggleStateChange: false
            })
        } else {
            this.changeCamera(this.props.selectCamera);
        }
    }

    checkCamera(val) {
        this.props.cameras.map((camera) => {
            if (camera.cameraName === val) {
                this.props.selectCameraFunction(camera);
            }
        });
    }

    changeCamera(camera) {
        console.log(this.props, camera)

        this.setState({
            toggleState: camera.peopleState
        })
    }

    render() {
        return (
            <div className="settingsBlock chooseCamera">
                <span className="titleSettingsBlock">{textFile.ChooseCamera}</span>
                <select className="inputBlock" onChange={this.onChangeCamera} defaultValue={"non"}>
                    {isEmptyObject(this.props.selectCamera) ?
                        <option value="non" disabled hidden>{textFile.NoCameras}</option> :
                        <option value="non" hidden>{this.props.selectCamera.cameraName}</option>
                    }
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
        selectCamera: state.cameraReducer.selectCamera,
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
        settingsChangeFunction: (item) => {
            dispatch(actionSettingsChange(item))
        },
        selectCameraFunction: (item) => {
            dispatch(actionSelectCamera(item))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(ChooseCamera);
