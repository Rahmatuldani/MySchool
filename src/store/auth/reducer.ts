import { AnyAction } from "redux";
import { UserType } from "../user/types";
import { login, logout, reducerError, reducerLoading } from "./action";

export type AuthState = {
    readonly auth: UserType | null;
    readonly isLoading: boolean;
    readonly error: Error | string | null;
}

const AUTH_INITIAL_STATE: AuthState = {
    auth: null,
    isLoading: false,
    error: null
};

export default function authReducer(
    state = AUTH_INITIAL_STATE,
    action: AnyAction
): AuthState {
    if (reducerLoading.match(action)) {
        return {...state, isLoading: true};
    }
    
    if (login.match(action)) {
        return {...state, isLoading: false, auth: action.payload, error: null};
    }
    
    if (logout.match(action)) {
        return {...state, isLoading: false, auth: null, error: null};
    }

    if (reducerError.match(action)) {
        return {...state, isLoading: false, error: action.payload};
    }
    return state;
}