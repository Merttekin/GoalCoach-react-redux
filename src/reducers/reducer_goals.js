import { SET_GOALS } from "../constants/constants";

export default (state = [], action) => {
    switch(action.type) {
        case SET_GOALS:
            const { goals } = action;
            return goals;
        default:
            return state;
    }
}