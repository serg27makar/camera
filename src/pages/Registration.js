import React from 'react';
import '../acess/css/login.css'
import {connect} from "react-redux";
import {setActionMainScreen} from "../action";
import LoginHeader from "../components/LoginHeader";

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    componentDidMount() {
        this.props.setActionMainScreenFunction("registration")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {}

    render() {
        return (
            <div className="registrationScreen">
                <LoginHeader/>
                <div className="formBox">
                    <h1 className="titleLogin">Регистрация</h1>
                    <label className="formLabel" htmlFor="userName">
                        <span className="formInputLabel">Введите ваше имя *</span>
                        <input className="formInput" type="text" name="userName" placeholder="Name"/>
                    </label>
                    <label className="formLabel" htmlFor="email">
                        <span className="formInputLabel">Введите ваш e-mail *</span>
                        <input className="formInput" type="email" name="email" placeholder="email"/>
                    </label>
                    <label className="formLabel" htmlFor="phone">
                        <span className="formInputLabel">Введите ваш номер телефона *</span>
                        <input className="formInput" type="phone" name="phone" placeholder="phone"/>
                    </label>
                    <label className="formLabel" htmlFor="password">
                        <span className="formInputLabel">Введите ваш пароль *</span>
                        <input className="formInput" type="password" name="password" placeholder="password"/>
                    </label>
                    <label className="formLabel" htmlFor="confirmPassword">
                        <span className="formInputLabel">Повторите ваш пароль *</span>
                        <input className="formInput" type="password" name="confirmPassword" placeholder="Confirm password"/>
                    </label>
                    <span className="forgetText">Забыли пароль?</span>
                    <button className="submitBtn">Зарегистрироваться</button>
                    <div className="footerText">Уже есть аккаунт?<em> Авторизация</em></div>
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

export default connect(MapStateToProps, mapDispatchToProps)(Registration);
