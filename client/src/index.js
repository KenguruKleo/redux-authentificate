import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/app';
import Signin from './components/auth/signin';
import reducers from './reducers';

const Home = ()=><h1>Home</h1>;

const middleware = [thunk];
const store = createStore(reducers, {}, compose(
    applyMiddleware(...middleware),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined' ? window.devToolsExtension() : f => f
));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Switch>
                    <Route exact path="/" component={ Home }/>
                    <Route path="/signin" component={Signin}/>
                </Switch>
            </App>
        </Router>
    </Provider>
    , document.querySelector('#root')
);