import React from 'react';
import '../acess/css/toolBar.css'
import toolBarButtons from "../acess/resource/toolBarButtonArr";
import ToolbarLink from "./ToolbarLink"
import {connect} from "react-redux";

class Toolbar extends React.Component {
    render() {
        return <ToolbarLink links={toolBarButtons} activePage={this.props.page}/>;
    }
}
function MapStateToProps(state) {
    return {
        page: state.mainScreenInfo.page,
    }
}
export default connect(MapStateToProps)(Toolbar);
