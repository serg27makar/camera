import {BsFillCameraVideoFill} from "react-icons/bs";
import {IoIosSettings, IoIosStats} from "react-icons/io";
import {FaDoorOpen, FaUserAlt} from "react-icons/fa";
import React from "react";

const toolBarButtons = [
        {
            page: "camera",
            linkPath: "/camera",
            linkIcon: <BsFillCameraVideoFill/>,
            linkName: "Камера",
            linkActive: false,
        },
        {
            page: "settings",
            linkPath: "/settings",
            linkIcon: <IoIosSettings/>,
            linkName: "Настройка",
            linkActive: false,
        },
        {
            page: "statistic",
            linkPath: "/statistic",
            linkIcon: <IoIosStats/>,
            linkName: "Статистика",
            linkActive: false,
        },
        {
            page: "cabinet",
            linkPath: "/cabinet",
            linkIcon: <FaUserAlt/>,
            linkName: "Кабинет",
            linkActive: false,
        },
        {
            page: "logout",
            linkPath: "/logout",
            linkIcon: <FaDoorOpen/>,
            linkName: "Выйти",
            linkActive: false,
        },
    ];

export default toolBarButtons;