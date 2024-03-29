import React, {Component} from 'react';
import { connect } from "react-redux";
import { goalRef } from "../config/firebase";
import { setGoals } from "../actions/index";
import GoalItem from './GoalItem';

class GoalList extends Component {
    componentDidMount() {
        goalRef.on('value', snap => {
            let goals = [];
            snap.forEach(goal => {
                const {email, title} = goal.val();
                goals.push({email, title});
            })
            this.props.setGoals(goals);
        })
    }

    render() {
        return(
            <div>
                {this.props.goals.map((goal, index) => {
                    return(
                        // <div key={index}>{goal.title}</div>
                        <GoalItem key={index} goal={goal} />
                    )
                })}
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { goals } = state;
    return {
        goals
    }
}

export default connect(mapStateToProps, { setGoals })(GoalList);