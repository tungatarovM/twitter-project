import React from 'react';
import ReactDOM from 'react-dom';
import CustomRouter from './containers/CustomRouter';
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
        <CustomRouter />
    </Provider>,
    document.getElementById('root')
);