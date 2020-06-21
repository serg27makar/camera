import React from 'react';
import '../access/css/statistic.css'
import {connect} from "react-redux";
import {setActionMainScreen} from "../action"

class Statistic extends React.Component {
    componentDidMount() {
        this.props.setActionMainScreenFunction("statistic")
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

export default connect(MapStateToProps, mapDispatchToProps)(Statistic);
