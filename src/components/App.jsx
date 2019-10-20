import React, { Component } from 'react';
import { firebaseApp } from '../config/firebase';
import history from '../history/history';

class App extends Component {
    signOut(){
        firebaseApp.auth().signOut();
        history.push('/signin');
    }

    render() {
        return(
            <div>
                App
                <button
                    className="btn btn-danger"
                    onClick={() => this.signOut()}>
                        Sign Out
                    </button>
            </div>
        )
    }
}

export default App;