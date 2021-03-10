import { DONE, LOGIN, LOGOUT, SET_LOADING } from "../types";


export const authReducer = ( state, action ) => {
    switch (action.type) {
        case LOGIN:
            return {...state, user: action.payload, authorized: true, loading: false};
        case LOGOUT:
            return {...state, user: null, authorized: false, loading: false};
        case SET_LOADING:
            return {...state, loading: true};
        case DONE: 
            return {...state, loading: false};
        default:
            return state;
    }
}