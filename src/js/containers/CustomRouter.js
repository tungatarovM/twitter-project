import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../../style/styles.css';
import 'bootstrap/dist/css/bootstrap.css';

import Application from '../components/Application';
import Login from '../components/Login';
import Signup from '../components/Signup';

class CustomRouter extends React.Component {
    render () {
        return (
            <Router>
                <div>
                    <Route exact path="/" component={Application} />
                    <Route path="/login" component={Login} />
                    <Route path="/signup" component={Signup} />
                </div>
            </Router>
        )     
    }
}


export default CustomRouter;