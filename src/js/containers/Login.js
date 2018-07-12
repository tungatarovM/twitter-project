import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { login } from '../actions/userActions';

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
        };
        this.onChange = this.onChange.bind(this);
        this.onLogin = this.onLogin.bind(this);
        this.onSignUp = this.onSignUp.bind(this);
    }
    onChange (e) {
        this.setState({
            [e.target.type]: e.target.value,
        })
    }
    onLogin (e) {
        e.preventDefault();
        this.props.login(this.state.email, this.state.password);
        this.props.history.push("/");
    }
    onSignUp (e) {
        e.preventDefault();
        const { history } = this.props;
        history.push("/signup");
    }
    render () {
        return (
            <div className="container text-center">
                    <div className="flex-container">
                        <div className="flex-item">
                            <form onSubmit={this.onLogin}>
                                <div className="form-group">
                                    <label htmlFor="email">Логин</label>
                                    <input type="email" className="form-control" id="email" maxLength="30" placeholder="Логин" onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Пароль</label>
                                    <input type="password" className="form-control" id="password"  maxLength="30" placeholder="Пароль" onChange={this.onChange}/>
                                </div>
                                <div className="flex-vr-container">
                                    <div className="flex-vr-item">
                                        <button type="submit" className="btn btn-primary btn-block">Войти</button>
                                    </div>
                                    <div className="flex-vr-item">
                                        <button onClick={this.onSignUp} className="btn btn-primary btn-block">Регистрация</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        )
    }
}

export default connect(null, { login })(Login);