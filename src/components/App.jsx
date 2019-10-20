import React, { Component } from 'react';
import { connect } from 'react-redux';
import { firebaseApp } from '../config/firebase';
import history from '../history/history';
import AddGoal from './AddGoal';
import GoalList from './GoalList';

class App extends Component {
    signOut() {
        firebaseApp.auth().signOut();
        history.push('/signin');
    }

    render() {
        return (
            <div style={{margin: '15px'}}>
                <h3>Goals</h3>
                <AddGoal />
                <div>Add Goal</div>
                <GoalList />
                <button
                    className="btn btn-danger"
                    onClick={() => this.signOut()}>
                    Sign Out
                    </button>
            </div>
        )
    }
}

function mapStateToProps(state) {
    console.log('state', state);
    return {}
}

export default connect(mapStateToProps, null)(App);