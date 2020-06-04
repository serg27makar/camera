import React from 'react';
import '../acess/css/toolBar.css'
import {BsFillCameraVideoFill} from "react-icons/bs/index";
import {IoIosSettings, IoIosStats} from "react-icons/io/index";
import {FaDoorOpen, FaUserAlt} from "react-icons/fa/index";

function Toolbar() {
    return (
        <div className="toolBar">
            <div className="toolBarButton">
                <BsFillCameraVideoFill/>
                <text>камера</text>
            </div>
            <div className="toolBarButton">
                <IoIosSettings/>
                <text>настройка</text>
            </div>
            <div className="toolBarButton">
                <IoIosStats/>
                <text>статистика</text>
            </div>
            <div className="toolBarButton">
                <FaUserAlt/>
                <text>кабинет</text>
            </div>
            <div className="toolBarButton">
                <FaDoorOpen/>
                <text>выйти</text>
            </div>
        </div>
    );
}

export default Toolbar;
