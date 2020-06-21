import React from 'react';
import '../access/css/cameraView.css'
import {
    actionOpenCloseAddModal,
    actionOpenCloseRemoveModal,
    actionRemoveCamera,
    actionSetCamera,
} from "../action";
import {connect} from "react-redux";
import textFile from "../access/resource/sharedText";

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
        if (prevProps.item !== this.props.item) {
            this.peopleBar();
        }
    }

    removeCamera(remCamera) {
        this.props.removeCameraFunction(remCamera);
        this.props.openRemoveCameraModalFunction();
    }

    peopleBar() {
        if (this.props.item) {
            const peopleStateArr = [];
            for (const imgName in this.props.item.peopleState) {
                const count = this.props.item.peopleState[imgName];
                const imageUrl = "./image/" + imgName + ".svg";
                const item = {
                    imageUrl,
                    count,
                    imgName,
                };
                peopleStateArr.push(item);
            }
            this.setState({
                peopleStateArr
            })
        }
    }

    render() {
        const styleElement = "togglePeopleState " + this.props.size;
        if (this.props.isViewEmpty) {
            return (
                <div className="cameraView">
                    <div className="addCameraButtonWrap" onClick={() => this.props.openAddCameraModalFunction()}>
                        <div className="addCameraButton">
                            <div className="addBtnBlock">
                                <div className="plusButton">+</div>
                                <div className="textButton">{textFile.AddCamera}</div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        } else if (this.props.item) {
            return (
                <div className="cameraView">
                    <div className="wrapTitleCamera">
                        <div className={"titleCamera " + this.props.size}>
                            <span>{this.props.item.cameraName}</span>
                        </div>
                    </div>
                    <div className="btnOptionBlockWrap">
                        <div className={"btnOptionBlock " + this.props.size}>
                            <img className={"btnOptionImg " + this.props.size} src="./image/pen.svg"/>
                        </div>
                        <div className={"btnOptionBlock " + this.props.size} onClick={() => this.removeCamera(this.props.item)}>
                            <span className={"removeCameraBtn " + this.props.size}>+</span>
                        </div>
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
        setCameraFunction: (camera) => {
            dispatch(actionSetCamera(camera))
        },
        removeCameraFunction: (item) => {
            dispatch(actionRemoveCamera(item))
        },
        openAddCameraModalFunction: () => {
            dispatch(actionOpenCloseAddModal())
        },
        openRemoveCameraModalFunction: () => {
            dispatch(actionOpenCloseRemoveModal())
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(CameraView);
