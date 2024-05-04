import { Dispatch } from "redux";
import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/reducer";
import { UserType } from "../user/types";
import { AUTH_ACTION_TYPES, LoginType } from "./types";
import { AxiosError, AxiosResponse } from "axios";
import AuthApi from "../../data/authApi";
import { ServerResponse } from "../shared/type";

// Reducer Loading
export type ReducerLoading = Action<AUTH_ACTION_TYPES.REDUCER_LOADING>;
export const reducerLoading = withMatcher(
    (): ReducerLoading => createAction(AUTH_ACTION_TYPES.REDUCER_LOADING)
);

// Reducer Error
export type ReducerError = ActionWithPayload<AUTH_ACTION_TYPES.REDUCER_ERROR, Error | string>;
export const reducerError = withMatcher(
    (error: Error | string): ReducerError => createAction(AUTH_ACTION_TYPES.REDUCER_ERROR, error)
);

// Begin Login
export type Login = ActionWithPayload<AUTH_ACTION_TYPES.LOGIN, UserType>;
export const login = withMatcher(
    (user: UserType): Login => createAction(AUTH_ACTION_TYPES.LOGIN, user)
);

export async function LoginFunction(dispatch: Dispatch, data: LoginType): Promise<string> {
    dispatch(reducerLoading());
    const response: AxiosResponse | AxiosError = await AuthApi.Login(data);
    
    return new Promise((resolve, reject) => {
        if (response instanceof AxiosError) {
            if (response.code === 'ERR_NETWORK') {
                dispatch(reducerError(response.message));
                return reject('Unable connect to server');
            }
            if (response.response) {
                console.log(response);
                
                const responseData: ServerResponse = response.response.data as ServerResponse;
                dispatch(reducerError(responseData.message));
                return reject(responseData.message);
            }
            
            dispatch(reducerError(new Error(response.message)));
            return reject(response.message);
        }
        const result: ServerResponse = response.data;
        dispatch(login(result.data as UserType));
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