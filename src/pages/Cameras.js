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
            <div className="viewCameras">
                <div className="threeItemView">
                    <div className="firstCameraWithThree">
                        <CameraView item={this.state.cameras[0]} size={"bigSize"}/>
                    </div>
                    {this.state.cameras[1] ?
                        <div className="rightViewWithThree">
                            <CameraView item={this.state.cameras[1]} size={"middleSize"}/>
                            <CameraView isViewEmpty={true}/>
                        </div> :
                        <div className="rightViewWithThree">
                            <CameraView isViewEmpty={true}/>
                        </div>
                    }
                </div>
            </div>
        )
    }

    viewSix() {
        return(
            <div className="viewCameras">
                <div className="sixItemView">
                    {this.state.cameras.map((item, index) => {
                        return <CameraView item={item} key={index} size={"middleSize"}/>
                    })}
                    <CameraView isViewEmpty={true}/>
                </div>
            </div>
        )
    }

    viewEight() {
        return(
            <div className="viewCameras">
                <div className="eightItemView">
                    {this.state.cameras.map((item, index) => {
                        return <CameraView item={item} key={index} size={"smallSize"}/>
                    })}
                    <CameraView isViewEmpty={true}/>
                </div>
            </div>
        )
    }

    render() {
        return (
            <div className="cameraScreen">
                {this.renderViewConstructor()}
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
