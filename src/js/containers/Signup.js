import React from 'react';
import { connect } from 'react-redux';

import { signup } from '../actions/userActions';
import {CustomButton } from '../components/CustomButton';

class Signup extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.onChange = this.onChange.bind(this);
        this.onSignup = this.onSignup.bind(this);
    }
    onChange (e) {
        this.setState({
            [e.target.type]: e.target.value
        });
    }
    onSignup (e) {
        e.preventDefault();
        this.props.signup(this.state.email, this.state.password);
        console.log(this.state.email);
        console.log(this.state.password);
        console.log('signed up')
        const { history } = this.props;
        history.push("/login");
    }
    render () {
        return (
            <div className="container text-center">
                    <div className="flex-container">
                        <div className="flex-item">
                            <form onSubmit={this.onSignup}>
                                <div className="form-group">
                                    <label htmlFor="email">Логин</label>
                                    <input type="email" className="form-control" id="email" maxLength="30" placeholder="Логин" onChange={this.onChange}/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Пароль</label>
                                    <input type="password" className="form-control" id="password"  maxLength="30" placeholder="Пароль" onChange={this.onChange}/>
                                </div>
                                <button type="submit" className="btn btn-primary btn-block">Зарегистрироваться</button>
                            </form>
                        </div>
                    </div>
            </div>
        )
    }
}

export default connect(null, { signup })(Signup);