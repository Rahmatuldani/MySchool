import { Dispatch } from "redux";
import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/reducer";
import { UserType } from "../user/types";
import { AUTH_ACTION_TYPES, LoginType } from "./types";

// Reducer Loading
export type ReducerLoading = Action<AUTH_ACTION_TYPES.REDUCER_LOADING>;
export const reducerLoading = withMatcher(
    (): ReducerLoading => createAction(AUTH_ACTION_TYPES.REDUCER_LOADING)
);

// Reducer Error
export type ReducerError = ActionWithPayload<AUTH_ACTION_TYPES.REDUCER_ERROR, Error>;
export const reducerError = withMatcher(
    (error: Error): ReducerError => createAction(AUTH_ACTION_TYPES.REDUCER_ERROR, error)
);

// Begin Login
export type Login = ActionWithPayload<AUTH_ACTION_TYPES.LOGIN, UserType>;
export const login = withMatcher(
    (user: UserType): Login => createAction(AUTH_ACTION_TYPES.LOGIN, user)
);

export async function LoginFunction(dispatch: Dispatch, users: UserType[], data: LoginType): Promise<string> {
    dispatch(reducerLoading());
    const user: UserType | undefined = users.find(user => user._id === data._id);
    return new Promise((resolve, reject) => {
        if (!user) {
            dispatch(reducerError(new Error('User not found')));
            return reject('User not found');
        }
        if (user.password !== data.password) {
            dispatch(reducerError(new Error('Wrong password')));
            return reject('Wrong password');
        }

        dispatch(login(user));
        return resolve('Login success');
    });
}

// Begin Logout
export type Logout = Action<AUTH_ACTION_TYPES.LOGOUT>;
export const logout = withMatcher(
    (): Logout => createAction(AUTH_ACTION_TYPES.LOGOUT)
);

export async function LogoutFunction(dispatch: Dispatch): Promise<string> {
    dispatch(reducerLoading());

    return new Promise((resolve) => {
        dispatch(logout());
        return resolve('Logout success');
    });
}