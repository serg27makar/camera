import React from 'react';
import '../access/css/login.css'
import {connect} from "react-redux";
import {setActionMainScreen} from "../action";
import LoginHeader from "../components/LoginHeader";
import {Link} from "react-router-dom";

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.props.setActionMainScreenFunction("login")
    }

    componentDidUpdate(prevProps, prevState, snapshot) {}

    submit() {
        console.log("this", this)
        this.props.history.push("/camera")
    }

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
                    <button className="submitBtn" onClick={this.submit}>Войти в личный кабинет</button>
                    <div className="footerText">Еще не зарегистрированы?<Link to={"/registration"}><em> Регистрация</em></Link></div>

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
