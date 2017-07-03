import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createBrowserHistory } from 'history';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/app';
import reducers from './reducers';

const history = createBrowserHistory({});

const createStoreWithMiddleware  = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
        <Router history={ history }>
            <Route path="/" component={App}>
            </Route>
        </Router>
    </Provider>
    , document.querySelector('#root')
);