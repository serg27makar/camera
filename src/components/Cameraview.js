import React from 'react';
import '../acess/css/cameraView.css'

class CameraView extends React.Component {
    state = {
        peopleStateArr: [],
        isViewEmpty: false,
    };

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
                    <div className="addCameraButtonWrap">
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

export default CameraView;
