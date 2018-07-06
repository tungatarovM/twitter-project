import React from 'react';
import ReactDom from 'react-dom';
import { Route, Link, Redirect, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.css';


class Application extends React.Component {
    render () {
        return (
            <div>Twitter project</div>
        )     
    }
}

ReactDom.render(
    <Application />,
    document.getElementById('root')
);