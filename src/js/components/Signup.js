import React from 'react';

class Signup extends React.Component {
    constructor (props) {
        super(props);
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
                                <button type="submit" className="btn btn-primary btn-block">Зарегистрироваться</button>
                            </form>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Signup;