import { AnyAction } from "redux";
import { login, logout, reducerError, reducerLoading } from "./action";
import { TeacherType } from "../teacher/types";
import { StudentType } from "../student/types";
import { StaffType } from "../staff/types";

export type AuthState = {
    readonly auth: TeacherType | StudentType | StaffType | null;
    readonly role: string | null;
    readonly isLoading: boolean;
    readonly error: Error | null;
}

const AUTH_INITIAL_STATE: AuthState = {
    auth: null,
    role: null,
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
        return {...state, isLoading: false, auth: action.payload.user, role: action.payload.role, error: null};
    }
    
    if (logout.match(action)) {
        return {...state, isLoading: false, auth: null, role: null, error: null};
    }

    if (reducerError.match(action)) {
        return {...state, isLoading: false, error: action.payload};
    }
    return state;
}