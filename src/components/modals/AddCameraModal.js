import React from 'react';
import '../../access/css/modal.css'
import {connect} from "react-redux";
import {actionOpenCloseAddModal, actionSetCamera} from "../../action"
import camerasArr from "../../access/resource/camerasArr";
import {isEmptyObject} from "../../access/resource/functionLib";
import textFile from "../../access/resource/sharedText";

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

    addBtn() {
        const currentArr = this.props.cameras;
        if (!isEmptyObject(this.state.selectedCamera)) {
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
            if (camera.cameraName === item.cameraName) {
                isHidden = true;
            }
            return item;
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
                <span className="titleModal">{textFile.ChooseCamera}</span>
                <div className="camerasList">
                    {camerasArr.map((camera) => {
                        return this.renderCameraName(camera)
                    })}
                </div>
                <span className="warningText">{this.state.warningText}</span>
                <div className="btnBlock">
                    <button className="okCancelBtn okBtn" onClick={this.addBtn}>{textFile.OK}</button>
                    <button className="okCancelBtn cancelBtn" onClick={this.cancelBtn}>{textFile.Cancel}</button>
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
