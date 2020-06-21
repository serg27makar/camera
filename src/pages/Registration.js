import React from 'react';
import '../access/css/login.css'
import {connect} from "react-redux";
import {setActionMainScreen} from "../action";
import LoginHeader from "../components/LoginHeader";
import {Link} from "react-router-dom";
import textFile from "../access/resource/sharedText";

class Registration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.props.setActionMainScreenFunction("registration")
    }

    submit() {
        this.props.history.push("/login");
    }

    render() {
        return (
            <div className="registrationScreen">
                <LoginHeader/>
                <div className="formBox">
                    <h1 className="titleLogin">{textFile.Registration}</h1>
                    <label className="formLabel" htmlFor="userName">
                        <span className="formInputLabel">{textFile.EnterYourName}</span>
                        <input className="formInput" type="text" name="userName" placeholder="Name"/>
                    </label>
                    <label className="formLabel" htmlFor="email">
                        <span className="formInputLabel">{textFile.EnterYourEmail}</span>
                        <input className="formInput" type="email" name="email" placeholder="email"/>
                    </label>
                    <label className="formLabel" htmlFor="phone">
                        <span className="formInputLabel">{textFile.EnterYourPhone}</span>
                        <input className="formInput" type="phone" name="phone" placeholder="phone"/>
                    </label>
                    <label className="formLabel" htmlFor="password">
                        <span className="formInputLabel">{textFile.EnterYourPassword}</span>
                        <input className="formInput" type="password" name="password" placeholder="password"/>
                    </label>
                    <label className="formLabel" htmlFor="confirmPassword">
                        <span className="formInputLabel">{textFile.RepeatYourPassword}</span>
                        <input className="formInput" type="password" name="confirmPassword" placeholder="Confirm password"/>
                    </label>
                    <span className="forgetText">{textFile.ForgotPassword}</span>
                    <button className="submitBtn" onClick={this.submit}>{textFile.SignUp}</button>
                    <div className="footerText">{textFile.AlreadyHaveAaccount}<Link to={"/login"}><em>{textFile.Login}</em></Link></div>
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
