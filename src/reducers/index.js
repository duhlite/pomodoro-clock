import { BREAK_CHANGE, SESSION_CHANGE, CLEAR } from "../constants/action-types";

const initialState = {
    break: 5,
    session: 25
}

function rootReducer(state=initialState, action) {
    switch (action.type) {
        case BREAK_CHANGE:
            return {
                ...state,
                break: state.break + action.payload >= 1 && state.break + action.payload <= 60 ? state.break + action.payload : state.break
            }
        case SESSION_CHANGE:
            return {
                ...state,
                session: state.session + action.payload >= 1 && state.session + action.payload <= 60 ? state.session + action.payload : state.session
            }
        case CLEAR:
            return {
                ...state,
                break: 5,
                session: 25
            }
    
        default:
            return state;
    }
}

export default rootReducer;