import {BREAK_CHANGE, SESSION_CHANGE, CLEAR} from '../constants/action-types';

export function breakChange(payload) {
    return {
        type: BREAK_CHANGE, payload
    }
};

export function sessionChange(payload) {
    return {
        type: SESSION_CHANGE, payload
    }
};

export function clearSession(payload) {
    return {
        type: CLEAR, payload
    }
}