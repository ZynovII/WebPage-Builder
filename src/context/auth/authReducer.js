import { LOGIN, LOGOUT } from "../types";


export const authReducer = ( state, action ) => {
    switch (action.type) {
        case LOGIN:
            return {...state, user: action.payload};
        case LOGOUT:
            return {...state, user: {}};
        default:
            return state;
    }
}