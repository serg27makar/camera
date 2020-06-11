import React from 'react';
import '../acess/css/cameraView.css'
import camerasArr from "../acess/resource/camerasArr";
const isEmpty = false;
const peopleToggle = {
    standing: "",
    walking: "",
    running: "",
    sitting: "",
    bentOver: "",
    moving: "",
    resting: "",
    motionless: "",
};

class CameraView extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props);
        const styleElement = "togglePeopleState " + this.props.size;
        if (isEmpty) {
            return (
                <div className="cameraEmpty">
                    <div className="addCameraButton">
                        <div>
                            <div className="plusButton">+</div>
                            <div className="textButton">Добавить камеру</div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return (
                <div className="cameraView">
                    <div className="wrapTitleCamera">
                        <div className="titleCamera">
                            <span>{camerasArr[0].cameraName}</span>
                        </div>
                    </div>
                    <img className="imageCamera" src={camerasArr[0].cameraUrl}/>
                    <div className="peopleStateBar">
                        <div className={styleElement}>85
                            <div className="peopleStateImage">
                                <img className="peopleStateIcon" src="./image/images.jpg"/>
                            </div>
                        </div>
                        <div className={styleElement}>35
                            <div className="peopleStateImage">
                                <img className="peopleStateIcon" src="./image/images.jpg"/>
                            </div>
                        </div>
                        <div className={styleElement}>46
                            <div className="peopleStateImage">
                                <img className="peopleStateIcon" src="./image/images.jpg"/>
                            </div>
                        </div>
                        <div className={styleElement}>8
                            <div className="peopleStateImage">
                                <img className="peopleStateIcon" src="./image/images.jpg"/>
                            </div>
                        </div>
                        <div className={styleElement}>805
                            <div className="peopleStateImage">
                                <img className="peopleStateIcon" src="./image/images.jpg"/>
                            </div>
                        </div>
                        <div className={styleElement}>72
                            <div className="peopleStateImage">
                                <img className="peopleStateIcon" src="./image/images.jpg"/>
                            </div>
                        </div>
                        <div className={styleElement}>11
                            <div className="peopleStateImage">
                                <img className="peopleStateIcon" src="./image/images.jpg"/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default CameraView;
