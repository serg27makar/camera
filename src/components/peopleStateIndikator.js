import React from 'react';
import '../acess/css/cameraView.css'
import camerasArr from "../acess/resource/camerasArr";

class PeopleStateIndicator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            item: camerasArr[0];
        }
    }

    indicator(item) {
        return (
            <div className={styleElement}>{item.count}
                <div className="peopleStateImage">
                    <img className="peopleStateIcon" src="./image/".jpg"/>
                </div>
            </div>
        )
    }


    render() {

        const styleElement = "togglePeopleState " + this.props.size;

        return (
            {for (var i in this.state.item) {

        }
            }






        );

    }
}

export default PeopleStateIndicator;
