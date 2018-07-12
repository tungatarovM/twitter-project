import React from 'react';
import '../../style/styles.css';
import 'bootstrap/dist/css/bootstrap.css';

import Navigation from './Navigation';
import AddElement from './AddElement';
import List from './List';
import { getUser } from '../actions/userActions';

class Application extends React.Component {
    render () {
        return (
            <div className="container text-wrap">
                <Navigation />
                <AddElement />
                <hr />
                <List />
            </div>
        )     
    }
}
export default Application;