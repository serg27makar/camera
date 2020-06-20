import React from 'react';
import '../access/css/toolBar.css'
import {Link} from "react-router-dom";

class ToolbarLink extends React.Component {
    render() {
        return (
            <div className="toolBar">
                {this.props.links.map((el) => {
                    const styleActive = this.props.activePage === el.page ? "toolBarButton active" : "toolBarButton";
                    return (
                        <div className={styleActive} key={el.page}>
                            <Link to={el.linkPath}>
                                {el.linkIcon}
                                <span>{el.linkName}</span>
                            </Link>
                        </div>
                    )
                })}
            </div>
        );
    }
}

export default ToolbarLink;
