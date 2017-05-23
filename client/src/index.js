import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';


import App from './components/app';
import redusers from './reducers';

const createStoreWithMiddleware  = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(redusers)}>
        <App/>
    </Provider>
    , document.querySelector('#root')
);