import React from 'react';
import '../acess/css/cabinet.css'
import {connect} from "react-redux";
import {setActionMainScreen} from "../action"

class Cabinet extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        this.props.setActionMainScreenFunction("cabinet")
    }

    render() {

        // console.log(this.props)
        return (
            <div>
                CAMERAS
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

export default connect(MapStateToProps, mapDispatchToProps)(Cabinet);
