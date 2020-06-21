import React from 'react';
import '../../access/css/modal.css'
import {connect} from "react-redux";
import {actionOpenCloseRemoveModal, actionSetCamera} from "../../action"

class RemoveCameraModal extends React.Component {

    constructor(props) {
        super(props);
        this.cancelBtn = this.cancelBtn.bind(this);
        this.removeCamera = this.removeCamera.bind(this);

    }

    removeCamera() {
        const currentArr = [];
        if (this.props.cameras.length > 0) {
            this.props.cameras.map((camera) => {
                if (this.props.remCamera.cameraName !== camera.cameraName) {
                    currentArr.push(camera);
                }
            });
        }
        this.props.setCameraFunction(currentArr);
        this.cancelBtn();
    }

    cancelBtn() {
        this.props.closeRemoveCameraModalFunction();
    }

    render() {
        if (!this.props.removeModal) {
            return null;
        }
        return (
            <div className="modalBox">
                <span className="titleModal">Remove this camera?</span>
                <div className="btnBlock">
                    <button className="okCancelBtn okBtn" onClick={this.removeCamera}>Remove</button>
                    <button className="okCancelBtn cancelBtn" onClick={this.cancelBtn}>Cancel</button>
                </div>
            </div>
        );
    }
}

function MapStateToProps(state) {
    return {
        cameras: state.cameraReducer.cameras,
        remCamera: state.cameraReducer.remCamera,
        removeModal: state.modalReducer.removeModal,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        setCameraFunction: (camera) => {
            dispatch(actionSetCamera(camera))
        },
        closeRemoveCameraModalFunction: () => {
            dispatch(actionOpenCloseRemoveModal())
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(RemoveCameraModal);
