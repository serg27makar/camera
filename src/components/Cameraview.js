import React from 'react';
import '../acess/css/cameraView.css'
import {setActionAddCamera, setActionRemoveCamera} from "../action";
import {connect} from "react-redux";
import camerasArr from "../acess/resource/camerasArr";

class CameraView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            peopleStateArr: [],
            isViewEmpty: false,
        };
    }


    componentDidMount() {
        this.props.item && this.peopleBar();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevState.isViewEmpty !== this.props.isViewEmpty) {
            this.setState({
                ...this.state,
                isViewEmpty: this.props.isViewEmpty,
            })
        }
    }

    addCamera() {
        const lengthCamerasArr = this.props.cameras.length;
        console.log(this)
        const currentArr = [];
        if (camerasArr.length > lengthCamerasArr) {
            for (let i in camerasArr) {
                if (i <= lengthCamerasArr) {
                    currentArr.push(camerasArr[i]);
                }
            }
            this.props.setActionAddCameraFunction(currentArr);
        }
    }

    // removeCamera(_this) {
    //     this.props.setActionRemoveCameraFunction();
    // }

    removeCamera() {
        const currentArr = this.props.cameras;
        if (currentArr.length > 0) {
            currentArr.pop();
        }
        this.props.setActionAddCameraFunction(currentArr);
    }
    peopleBar() {
        for (const imgName in this.props.item.peopleState) {
            const count = this.props.item.peopleState[imgName];
            const imageUrl = "./image/" + imgName + ".svg";
            const item = {
                imageUrl,
                count,
                imgName,
            };
            this.state.peopleStateArr.push(item);
        }
    }

    render() {
        const styleElement = "togglePeopleState " + this.props.size;
        if (this.props.isViewEmpty) {
            return (
                <div className="cameraView">
                    <div className="addCameraButtonWrap" onClick={() => this.addCamera()}>
                        <div className="addCameraButton">
                            <div className="plusButton">+</div>
                            <div className="textButton">Добавить камеру</div>
                        </div>
                    </div>
                </div>
            );
        } else if (this.props.item) {
            return (
                <div className="cameraView">
                    <div className="wrapTitleCamera">
                        <div className="titleCamera">
                            <span>{this.props.item.cameraName}</span>
                        </div>
                    </div>
                    <div className="btnOptionBlockWrap">
                        <div className="btnOptionBlock editBtn">o</div>
                        <div className="btnOptionBlock removeBtn" onClick={() => this.removeCamera()}>x</div>
                    </div>
                    <img className="imageCamera" src={this.props.item.cameraUrl}/>
                    <div className="peopleStateBar">
                        {this.state.peopleStateArr.map((i) => {
                            return (
                                <div className={styleElement} key={i.imageUrl}>{i.count}
                                    <div className={"peopleStateImage " + this.props.size}>
                                        <img className={"peopleStateIcon " + this.props.size} src={i.imageUrl}/>
                                        {this.props.size === "bigSize" ?  <span className="peopleStateText">{i.imgName}</span> : null}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            );
        } else {
            return (
                <div className="cameraView">
                   что-то пошло не так)))
                </div>
            );
        }
    }
}

function MapStateToProps(state) {
    return {
        cameras: state.cameraReducer.cameras,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setActionAddCameraFunction: (camera) => {
            dispatch(setActionAddCamera(camera))
        },
        setActionRemoveCameraFunction: (camera) => {
            dispatch(setActionRemoveCamera(camera))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(CameraView);
