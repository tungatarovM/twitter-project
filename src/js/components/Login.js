import React from 'react';
import { Link } from 'react-router-dom';


class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            name: '',
            email: '',
        };
    }
    render () {
        return (
            <div className="container text-center">
                    <div className="flex-container">
                        <div className="flex-item">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="email">Логин</label>
                                    <input type="email" className="form-control" id="email" maxLength="30" placeholder="Логин" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Пароль</label>
                                    <input type="password" className="form-control" id="password"  maxLength="30" placeholder="Пароль" />
                                </div>
                                <div className="flex-vr-container">
                                    <div className="flex-vr-item">
                                        <button type="submit" className="btn btn-primary btn-block">Войти</button>
                                    </div>
                                    <div className="flex-vr-item">
                                        <Link to="/signup" className="custom-btn"><button type="submit" className="btn btn-primary btn-block">Регистрация</button></Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Login;