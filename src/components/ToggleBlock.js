import React from "react";
import '../acess/css/settings.css'

class ToggleBlock extends React.Component{
    render() {
        return(
            <div>
                <label className="checkBoxLabel">
                    <input type="checkbox" value="1" name="standing" style={{display: "none"}}/>
                    <span className="toggle"/>
                    <span className="checkboxText">standing</span>
                </label>
                <label className="checkBoxLabel">
                    <input type="checkbox" value="1" name="walking" style={{display: "none"}}/>
                    <span className="toggle"/>
                    <span className="checkboxText">walking</span>
                </label>
                <label className="checkBoxLabel">
                    <input type="checkbox" value="1" name="running" style={{display: "none"}}/>
                    <span className="toggle"/>
                    <span className="checkboxText">running</span>
                </label>
                <label className="checkBoxLabel">
                    <input type="checkbox" value="1" name="sitting" style={{display: "none"}}/>
                    <span className="toggle"/>
                    <span className="checkboxText">sitting</span>
                </label>
                <label className="checkBoxLabel">
                    <input type="checkbox" value="1" name="bentOver" style={{display: "none"}}/>
                    <span className="toggle"/>
                    <span className="checkboxText">bentOver</span>
                </label>
                <label className="checkBoxLabel">
                    <input type="checkbox" value="1" name="moving" style={{display: "none"}}/>
                    <span className="toggle"/>
                    <span className="checkboxText">moving</span>
                </label>
                <label className="checkBoxLabel">
                    <input type="checkbox" value="1" name="resting" style={{display: "none"}}/>
                    <span className="toggle"/>
                    <span className="checkboxText">resting</span>
                </label>
                <label className="checkBoxLabel">
                    <input type="checkbox" value="1" name="motionless" style={{display: "none"}}/>
                    <span className="toggle"/>
                    <span className="checkboxText">motionless</span>
                </label>
            </div>
        );
    }
}
export default ToggleBlock;
