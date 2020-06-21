import React from 'react';
import '../access/css/cameras.css'
import {connect} from "react-redux";
import {setActionMainScreen} from "../action"
import CameraView from "../components/Cameraview";

class Cameras extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cameras: [],
        };
    }

    componentDidMount() {
        this.props.setActionMainScreenFunction("camera")
    }

    renderViewConstructor(cameras) {
        if (cameras.length === 0) {
            return this.viewOnce();
        } else if (cameras.length <= 2) {
            return this.viewThree(cameras);
        } else if (cameras.length <= 5) {
            return this.viewSix(cameras);
        } else {
            return this.viewEight(cameras);
        }

    }

    viewOnce() {
        return <CameraView isViewEmpty={true}/>
    }

    viewThree() {
        return (
            <div className="viewCameras">
                <div className="threeItemView">
                    <div className="firstCameraWithThree">
                        <CameraView item={this.props.cameras[0]} size={"bigSize"}/>
                    </div>
                    {this.props.cameras[1] ?
                        <div className="rightViewWithThree">
                            <CameraView item={this.props.cameras[1]} size={"middleSize"}/>
                            <CameraView isViewEmpty={true}/>
                        </div> :
                        <div className="rightViewWithThree">
                            <CameraView isViewEmpty={true}/>
                        </div>}
                </div>
            </div>
        )
    }

    viewSix() {
        return (
            <div className="viewCameras">
                <div className="sixItemView">
                    {this.props.cameras.map((item, index) => {
                        return <CameraView item={item} key={index} size={"middleSize"}/>
                    })}
                    <CameraView isViewEmpty={true}/>
                </div>
            </div>
        )
    }

    viewEight() {
        return (
            <div className="viewCameras">
                <div className="eightItemView">
                    {this.props.cameras.map((item, index) => {
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
                {this.renderViewConstructor(this.props.cameras)}
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
    return {
        setActionMainScreenFunction: (page) => {
            dispatch(setActionMainScreen(page))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Cameras);
