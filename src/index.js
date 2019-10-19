import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import { firebaseApp } from './config/firebase';

import App from './components/App';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


firebaseApp.auth().onAuthStateChanged(user => {
    if(user){
        console.log('user has signed in or up', user);
    } else {
        console.log('user has signed out');
    }
})


ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/signin" component={SignIn} />
            <Route path="/signup" component={SignUp} />
        </Switch>
    </BrowserRouter>, document.getElementById('root')
)