import { AnyAction } from "redux";
import { UserType } from "../user/types";
import { fetchUsers, reducerError, reducerLoading } from "./action";

export type UsersState = {
    readonly users: UserType[];
    readonly isLoading: boolean;
    readonly error: Error | string | null;
}

const USERS_INITIAL_STATE: UsersState = {
    users: [],
    isLoading: false,
    error: null
};

export default function usersReducer(
    state = USERS_INITIAL_STATE,
    action: AnyAction
): UsersState {
    if (reducerLoading.match(action)) {
        return {...state, isLoading: true};
    }

    if (fetchUsers.match(action)) {
        return {...state, isLoading: false, error: null, users: action.payload};
    }

    if (reducerError.match(action)) {
        return {...state, isLoading: false, error: action.payload};
    }
    return state;
}