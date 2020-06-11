import React from 'react';
import '../acess/css/cameras.css'
import {connect} from "react-redux";
import {setActionMainScreen} from "../action"
import CameraView from "../components/Cameraview";
import camerasArr from "../acess/resource/camerasArr";

class Cameras extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cameras: camerasArr,
        }
    }
    componentDidMount() {
        this.props.setActionMainScreenFunction("camera")
    }

    renderViewConstructor() {
        if (this.state.cameras.length === 0) {
            return this.viewOnce();
        } else if (this.state.cameras.length <= 2) {
            return this.viewThree(this.state.cameras);
        } else if (this.state.cameras.length <= 5) {
            return this.viewSix(this.state.cameras);
        } else {
            return this.viewEight(this.state.cameras);
        }

    }

    viewOnce() {
        return <CameraView isViewEmpty={true}/>
    }

    viewThree() {
        return(
            <div>
                {this.state.cameras.map((item, index) => {
                    return <CameraView item={item} key={index}/>
                })}
                <CameraView isViewEmpty={true}/>
            </div>
        )
    }

    viewSix() {

    }

    viewEight() {

    }

    render() {

        return (
            <div className="cameraScreen">
                {this.renderViewConstructor()}
                {/*<div style={{minWidth: "66%"}}>*/}
                {/*    <CameraView size={"bigSize"}/>*/}

                {/*</div>*/}
                {/*<div style={{display: "block", maxHeight: "50%", width: "100%"}}>*/}
                {/*    <CameraView size={"middleSize"}/>*/}
                {/*    <CameraView size={"middleSize"}/>*/}
                {/*</div>*/}

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
