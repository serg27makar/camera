import React from 'react';
import '../access/css/login.css'
import {connect} from "react-redux";
import {Link} from "react-router-dom";
import textFile from "../access/resource/sharedText";

class LoginHeader extends React.Component {
    render() {
        return (
            <div className="headerLogin">
                <div className="backgroundImgCompos">
                    <div className="bgImg1"/>
                    <div className="bgImg2"/>
                </div>
                <div className="logoBlock">
                    <img className="logoImg" src="../../image/logo.svg" alt="logo"/>
                    <div className="logoTextBlock">
                        <span className="logoTitle"><em>Eagle</em>view</span>
                        <span className="logoSlog">{textFile.SmartCCTV}</span>
                    </div>
                </div>
                <div className="aboutService">{textFile.AboutService}</div>
                <div className="aboutService">{textFile.FrequentlyQuestions}</div>
                <Link to={"/login"}><div className="loginBtn">{textFile.ToComeIn}</div></Link>
                <Link to={"/registration"}><div className="registerBtn">{textFile.SignUp}</div></Link>
            </div>
        );
    }
}

function MapStateToProps(state) {
    return {
        page: state.mainScreenInfo.page,
    }
}

export default connect(MapStateToProps)(LoginHeader);
