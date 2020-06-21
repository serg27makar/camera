import React from 'react';
import '../access/css/cabinet.css'
import {connect} from "react-redux";
import {setActionMainScreen} from "../action"

class Cabinet extends React.Component {

    componentDidMount() {
        this.props.setActionMainScreenFunction("cabinet")
    }

    render() {
        return (
            <div/>
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
