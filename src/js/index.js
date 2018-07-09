import React from 'react';
import ReactDOM from 'react-dom';
import Application from './containers/Application';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import  thunk  from 'redux-thunk';
import ListReducer from './reducers/list';


const store = createStore(
    ListReducer,
    applyMiddleware(thunk)
);

ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('root')
);