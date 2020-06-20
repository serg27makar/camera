import React from 'react';
import '../acess/css/login.css'
import {connect} from "react-redux";
import {setActionMainScreen} from "../action";
import LoginHeader from "../components/LoginHeader";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.setActionMainScreenFunction("login")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {}

    render() {
        return (
            <div className="loginScreen">
                <LoginHeader/>
                <div className="formBox">
                    <h1 className="titleLogin">Авторизация</h1>
                    <label className="formLabel" htmlFor="email">
                        <span className="formInputLabel">Введите ваш e-mail *</span>
                        <input className="formInput" type="email" name="email" placeholder="email"/>
                    </label>
                    <label className="formLabel" htmlFor="password">
                        <span className="formInputLabel">Введите ваш пароль *</span>
                        <input className="formInput" type="password" name="password" placeholder="password"/>
                    </label>
                    <span className="forgetText">Забыли пароль?</span>
                    <button className="submitBtn">Войти в личный кабинет</button>
                    <div className="footerText">Еще не зарегистрированы?<em> Регистрация</em></div>
                </div>
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
        setActionMainScreenFunction: (page) => {
            dispatch(setActionMainScreen(page))
        },
    }
};

export default connect(MapStateToProps, mapDispatchToProps)(Login);
