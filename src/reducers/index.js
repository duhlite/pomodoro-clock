import { BREAK_CHANGE, SESSION_CHANGE, CLEAR, COUNTDOWN, STOP_TIMER, BREAK_TIME } from "../constants/action-types";

const initialState = {
    break: 5,
    session: 25,
    breaktime: 300000,
    sessiontime: 1500000,
    timelabel: 'Session',
    currenttime: 1500000
}

function rootReducer(state=initialState, action) {
    switch (action.type) {
        case BREAK_CHANGE:
            return {
                ...state,
                break: state.break + action.payload >= 1 && state.break + action.payload <= 60 ? state.break + action.payload : state.break,
                breaktime: state.break + action.payload >= 1 && state.break + action.payload <= 60 ? (state.break + action.payload) * 60000 : state.break * 60000
            }
        case SESSION_CHANGE:
            return {
                ...state,
                session: state.session + action.payload >= 1 && state.session + action.payload <= 60 ? state.session + action.payload : state.session,
                sessiontime: state.session + action.payload >= 1 && state.session + action.payload <= 60 ? (state.session + action.payload) * 60000 : state.session * 60000,
                currenttime: state.session + action.payload >= 1 && state.session + action.payload <= 60 ? (state.session + action.payload) * 60000 : state.session * 60000
            }
        case CLEAR:
            return {
                ...state,
                break: 5,
                session: 25,
                breaktime: 300000,
                sessiontime: 1500000,
                timelabel: 'Session',
                currenttime: 1500000
            }
        case COUNTDOWN:
            return {
                ...state,
                currenttime: state.currenttime > 0 ?state.currenttime-action.payload : state.currenttime
            }
        case STOP_TIMER:
            return {
                ...state,
                sessiontime: state.currenttime
            }
        case BREAK_TIME:
            return {
                ...state,
                currenttime: state.timelabel === 'Session' ? state.breaktime : state.sessiontime,
                timelabel: state.timelabel === 'Session' ? 'Break' : 'Session'
            }
    
        default:
            return state;
    }
}

export default rootReducer;