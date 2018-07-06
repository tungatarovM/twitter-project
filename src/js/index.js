import React from 'react';
import ReactDOM from 'react-dom';
import Application from './containers/Application';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import ListReducer from './reducers/list';

const store = createStore(
    ListReducer
);

ReactDOM.render(
    <Provider store={store}>
        <Application />
    </Provider>,
    document.getElementById('root')
);