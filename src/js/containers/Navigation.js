import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { getUser, logout } from '../actions/userActions';

class Navigation extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            isAutherized: this.props.user.user
        }
        this.onSignOut = this.onSignOut.bind(this);
    }
    componentDidMount() {
        this.props.getUser();
    }  
    componentWillReceiveProps (nextProps) {
        this.setState({
            isAutherized: nextProps.user.user
        })
    }
    onSignOut (e) {
        e.preventDefault();
        this.props.logout();
    }

    render () {
        const signIn = <Link className="nav-link" to="/login">Войти<span className="sr-only">(current)</span></Link>;
        const logout = <button className="btn btn-light btn-block" onClick={this.onSignOut}>Выйти</button>

        return (
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item active">
                                    {this.state.isAutherized === null ? signIn : logout }
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
        )
    }
}

const mapStateToProps = state => (
    {
        user: state.user
    }
)

export default connect(mapStateToProps, { getUser, logout })(Navigation);;