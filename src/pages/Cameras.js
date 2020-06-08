import React from 'react';
import '../acess/css/cameras.css'
import {connect} from "react-redux";
import {setActionMainScreen} from "../action"
import CameraView from "../components/Cameraview";

class Cameras extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        this.props.setActionMainScreenFunction("camera")
    }

    render() {

        return (
            <div className="cameraScreen">
                <div style={{minWidth: "66%"}}>
                    <CameraView size={"bigSize"}/>

                </div>
                <div style={{display: "block", maxHeight: "50%", width: "100%"}}>
                    <CameraView size={"middleSize"}/>
                    <CameraView size={"middleSize"}/>
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

export default connect(MapStateToProps, mapDispatchToProps)(Cameras);
