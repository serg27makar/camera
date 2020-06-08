import React from 'react';

import {connect} from "react-redux";
import {setActionMainScreen} from "../action"

class Logout extends React.Component {
    // constructor(props) {
    //     super(props);
    // }
    componentDidMount() {
        this.props.setActionMainScreenFunction("logout")
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

export default connect(MapStateToProps, mapDispatchToProps)(Logout);
