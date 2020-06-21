import React from 'react';
import '../access/css/login.css'
import {connect} from "react-redux";
import {setActionMainScreen} from "../action";
import LoginHeader from "../components/LoginHeader";
import {Link} from "react-router-dom";
import textFile from "../access/resource/sharedText";

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

    submit() {
        this.props.history.push("/camera")
    }

    render() {
        return (
            <div className="loginScreen">
                <LoginHeader/>
                <div className="formBox">
                    <h1 className="titleLogin">{textFile.Login}</h1>
                    <label className="formLabel" htmlFor="email">
                        <span className="formInputLabel">{textFile.EnterYourEmail}</span>
                        <input className="formInput" type="email" name="email" placeholder="email"/>
                    </label>
                    <label className="formLabel" htmlFor="password">
                        <span className="formInputLabel">{textFile.EnterYourPassword}</span>
                        <input className="formInput" type="password" name="password" placeholder="password"/>
                    </label>
                    <span className="forgetText">{textFile.ForgotPassword}</span>
                    <button className="submitBtn" onClick={this.submit}>{textFile.LogInAccount}</button>
                    <div className="footerText">{textFile.Registration}<Link to={"/registration"}><em>{textFile.LogInAccount}</em></Link></div>

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
