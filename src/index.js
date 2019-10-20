import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Router } from 'react-router-dom';
import { firebaseApp } from './config/firebase';
import history from './history/history';
import { logUser } from './actions/index';
import reducer from './reducers/index';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

const store = createStore(reducer);

firebaseApp.auth().onAuthStateChanged(user => {
    if(user){
        console.log('user has signed in or up', user);
        const { email } = user;
        store.dispatch(logUser(email));
        history.push('/');
    } else {
        console.log('user has signed out');
    }
})


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Router history={history}>
                    <Route exact path="/" component={App} />
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                </Router>
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
)