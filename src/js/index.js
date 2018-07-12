import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  thunk  from 'redux-thunk';

import Application from './containers/Application';
import Login from './containers/Login';
import Signup from './containers/Signup';
import rootReducer from './reducers/rootReducer';


const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Switch>
                <Route path="/login" component={Login} />
                <Route path="/signup" component={Signup} />
                <Route path="/" component={Application} />    
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root')
);