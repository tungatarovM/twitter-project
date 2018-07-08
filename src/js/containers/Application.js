import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';


import List from '../components/List';
import AddElement from '../components/AddElement';


class Application extends React.Component {
    render () {
        return (
            <div className="container">
                <AddElement />
                <hr />
                <List />
            </div>
        )     
    }
}


export default Application;