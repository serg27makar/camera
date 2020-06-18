import React from 'react';
import '../../acess/css/modal.css'
import {connect} from "react-redux";
import {actionOpenCloseAddModal, actionSetCamera, setActionMainScreen} from "../../action"
import camerasArr from "../../acess/resource/camerasArr";

class AddCameraModal extends React.Component {

    constructor(props) {
        super(props);
        this.cancelBtn = this.cancelBtn.bind(this);
        this.addBtn = this.addBtn.bind(this);
        this.state = {
            selectedCamera: {},
            warningText: ""
        }
    }

    isEmptyObject(obj) {
        for (const i in obj) {
            if (obj.hasOwnProperty(i)) return false;
        }
        return true;
    }

    addBtn() {
        const currentArr = this.props.cameras;
        if (!this.isEmptyObject(this.state.selectedCamera)) {
            this.warningText("");
            currentArr.push(this.state.selectedCamera);
            this.props.setCameraFunction(currentArr);
            this.cancelBtn();
        } else {
            this.warningText("Select camera!");
        }

    }

    warningText(text) {
        this.setState({
            ...this.state,
            warningText: text
        });
    }

    cancelBtn() {
        this.selectCamera({});
        this.props.closeAddCameraModalFunction();
    }

    selectCamera(camera) {
        this.setState({
            selectedCamera: camera,
            warningText: ""
        })
    }

    checkGlove(cameraName) {
        if (this.state.selectedCamera && this.state.selectedCamera.cameraName === cameraName) {
            return "cameraListTextGlove"
        } else {
            return "cameraListText"
        }
    }

    renderCameraName(camera) {
        let isHidden = false;
        this.props.cameras.map((item) => {
            if (camera.cameraName === item.cameraName) isHidden = true;
        });
        if (!isHidden) {
            return <span
                className={this.checkGlove(camera.cameraName)}
                key={camera.cameraName}
                onClick={() => {this.selectCamera(camera)}}
            >{camera.cameraName}</span>
        }
    }

    render() {
        if (!this.props.addModal) {
            return null;
        }
        return (
            <div className="modalBox">
                <span className="titleModal">Choose the camera</span>
                <div className="camerasList">
                    {camerasArr.map((camera) => {
                        return this.renderCameraName(camera)
                    })}
                </div>
                <span className="warningText">{this.state.warningText}</span>
                <div className="btnBlock">
                    <button className="okCancelBtn" onClick={this.addBtn}>OK</button>
                    <button className="okCancelBtn" onClick={this.cancelBtn}>Cancel</button>
                </div>
            </div>
        );
    }
}

function MapStateToProps(state) {
    return {
        cameras: state.cameraReducer.cameras,
        addModal: state.modalReducer.addModal,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setCameraFunction: (camera) => {
            dispatch(actionSetCamera(camera))
        },
        closeAddCameraModalFunction: () => {
            dispatch(actionOpenCloseAddModal())
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(AddCameraModal);
