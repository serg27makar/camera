import React from 'react';
import '../acess/css/login.css'
import {connect} from "react-redux";

class LoginHeader extends React.Component {
    render() {
        return (
            <div className="headerLogin">
                <div className="backgroundImgCompos">
                    <div className="bgImg1"/>
                    <div className="bgImg2"/>
                </div>
                <div className="logoBlock">
                    <img className="logoImg" src="../../image/logo.svg"/>
                    <div className="logoTextBlock">
                        <span className="logoTitle"><em>Eagle</em>view</span>
                        <span className="logoSlog">Умное видеонаблюдение</span>
                    </div>
                </div>
                <div className="aboutService">О сервисе</div>
                <div className="aboutService">Часто задаваемые вопросы</div>
                <button className="loginBtn">Войти</button>
                <button className="registerBtn">Зарегистрироваться</button>
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
    return {

    }
};

export default connect(MapStateToProps, mapDispatchToProps)(LoginHeader);
