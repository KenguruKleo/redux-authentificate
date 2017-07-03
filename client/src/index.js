import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
//import { createBrowserHistory } from 'history';
//import { Router, Route, IndexRoute } from 'react-router';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/app';
import Signin from './components/auth/signin';
import reducers from './reducers';

const Home = ()=><h1>Home</h1>;

//const history = createBrowserHistory({});

const createStoreWithMiddleware  = applyMiddleware()(createStore);

ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
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