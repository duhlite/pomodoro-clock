import { BREAK_CHANGE, SESSION_CHANGE, CLEAR, COUNTDOWN } from "../constants/action-types";

const initialState = {
    break: 5,
    session: 25,
    breaktime: 5000,
    sessiontime: 25000,
    timelabel: 'Session'
}

function rootReducer(state=initialState, action) {
    switch (action.type) {
        case BREAK_CHANGE:
            return {
                ...state,
                break: state.break + action.payload >= 1 && state.break + action.payload <= 60 ? state.break + action.payload : state.break,
                breaktime: state.break * 1000
            }
        case SESSION_CHANGE:
            return {
                ...state,
                session: state.session + action.payload >= 1 && state.session + action.payload <= 60 ? state.session + action.payload : state.session,
                sessiontime: state.session * 1000
            }
        case CLEAR:
            return {
                ...state,
                break: 5,
                session: 25,
                breaktime: 5000,
                sessiontime: 25000,
                timelabel: 'Session'
            }
        case COUNTDOWN:
            return {
                ...state,
                sessiontime: state.sessiontime-action.payload
            }
    
        default:
            return state;
    }
}

export default rootReducer;