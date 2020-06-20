import React from 'react';
import '../../access/css/modal.css'
import {connect} from "react-redux";
import {actionOpenCloseSaveChangeModal, actionSetCamera} from "../../action"

class SavePeopleStateModal extends React.Component {

    constructor(props) {
        super(props);
        this.cancelBtn = this.cancelBtn.bind(this);
        this.saveChange = this.saveChange.bind(this);
    }

    saveChange() {
        this.cancelBtn();
    }

    cancelBtn() {
        this.props.closeSaveChangeModalFunction();
    }

    render() {
        if (!this.props.saveChangeModal) {
            return null;
        }
        return (
            <div className="modalBox">
                <span className="titleModal">Save change?</span>
                <div className="btnBlock">
                    <button className="okCancelBtn" onClick={this.saveChange}>Save</button>
                    <button className="okCancelBtn" onClick={this.cancelBtn}>Cancel</button>
                </div>
            </div>
        );
    }
}

function MapStateToProps(state) {
    return {
        saveChangeModal: state.modalReducer.saveChangeModal,
    }
}

const mapDispatchToProps = dispatch => {
    return{
        closeSaveChangeModalFunction: () => {
            dispatch(actionOpenCloseSaveChangeModal())
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(SavePeopleStateModal);
