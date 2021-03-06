import React from "react";
import '../access/css/settings.css'
import { toggleStateArr } from "../access/constants"

class ToggleBlock extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            toggleState: {},
            toggleStateArr: {
                standing: false,
                walking: false,
                running: false,
                sitting: false,
                bentOver: false,
                moving: false,
                resting: false,
                motionless: false,
            }
        }
    }

    componentDidMount() {}

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.toggleState !== this.props.toggleState) {
            this.setState( state => {
                toggleStateArr.map((name) => {
                    this.state.toggleStateArr[name] = this.checkEnableToggle(name);
                    return name;
                });
                return state
            });

            // toggleStateArr.map((name) => {
            //     this.setState({
            //         ...this.state,
            //         toggleStateArr: {
            //             ...this.state.toggleStateArr,
            //             [name]: this.checkEnableToggle(name),
            //         }
            //     });
            // })
        }
    }

    checkEnableToggle(toggle) {
        return !!this.props.toggleState[toggle];
    }

    changeToggleState(name) {
        this.props.toggleStateChange(true);
        this.setState({
            ...this.state,
            toggleStateArr: {
                ...this.state.toggleStateArr,
                [name]: !this.state.toggleStateArr[name],
            }
        })
    }

    renderToggle(toggle) {
        return (
            <label className="checkBoxLabel" key={toggle}>
                <input type="checkbox" name={toggle} style={{display: "none"}}
                       checked={this.state.toggleStateArr[toggle]}
                       onChange={() => {this.changeToggleState(toggle)}}
                />
                <span className="toggle"/>
                <span className="checkboxText">{toggle}</span>
            </label>
        )
    }

    render() {
        return(
            <div>
                {toggleStateArr.map((toggle) => {
                    return this.renderToggle(toggle);
                })}
            </div>
        );
    }
}

export default ToggleBlock;
