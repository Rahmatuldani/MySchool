import { AxiosError, AxiosResponse } from "axios";
import UserApi from "../../data/usersApi";
import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/reducer";
import { UserType } from "./types";
import { USERS_ACTION_TYPES } from "./types";
import { Dispatch } from "redux";
import { ServerResponse } from "../shared/type";

// Reducer Loading
export type ReducerLoading = Action<USERS_ACTION_TYPES.REDUCER_LOADING>;
export const reducerLoading = withMatcher(
    (): ReducerLoading => createAction(USERS_ACTION_TYPES.REDUCER_LOADING)
);

// Reducer Error
export type ReducerError = ActionWithPayload<USERS_ACTION_TYPES.REDUCER_ERROR, Error | string>;
export const reducerError = withMatcher(
    (error: Error | string): ReducerError => createAction(USERS_ACTION_TYPES.REDUCER_ERROR, error)
);

// Delete all users in reducer
export type EmptyUsers = Action<USERS_ACTION_TYPES.EMPTY_USERS>;
export const emptyUsers = withMatcher(
    (): EmptyUsers => createAction(USERS_ACTION_TYPES.EMPTY_USERS)
);
export function EmptyUsersReducer(dispatch: Dispatch) {
    dispatch(emptyUsers());
}

// Begin Fetch User
export type FetchUsers = ActionWithPayload<USERS_ACTION_TYPES.FETCH_USERS, UserType[]>;
export const fetchUsers = withMatcher(
    (users: UserType[]): FetchUsers => createAction(USERS_ACTION_TYPES.FETCH_USERS, users)
);

export async function FetchUsersFunction(dispatch: Dispatch): Promise<string> {
    dispatch(reducerLoading());
    const response: AxiosResponse | AxiosError = await UserApi.Find();

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
            
            dispatch(reducerError(response.message));
            return reject(response.message);
        }
        const result: ServerResponse = response.data;
        dispatch(fetchUsers(result.data as UserType[]));
        return resolve(result.message);
    });
}

// Begin Create User
export type CreateUsers = ActionWithPayload<USERS_ACTION_TYPES.CREATE_USERS, UserType>;
export const createUsers = withMatcher(
    (user: UserType): CreateUsers => createAction(USERS_ACTION_TYPES.CREATE_USERS, user)
);

export async function CreateUsersFunction(dispatch: Dispatch, data: UserType): Promise<string> {
    dispatch(reducerLoading());
    const response: AxiosResponse | AxiosError = await UserApi.Create(data);

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
            
            dispatch(reducerError(response.message));
            return reject(response.message);
        }
        const result: ServerResponse = response.data;
        dispatch(createUsers(result.data as UserType));
        return resolve(result.message);
    });
}

// Begin Delete User
export type DeleteUsers = ActionWithPayload<USERS_ACTION_TYPES.DELETE_USERS, string>;
export const deleteUsers = withMatcher(
    (id: string): DeleteUsers => createAction(USERS_ACTION_TYPES.DELETE_USERS, id)
);

export async function DeleteUsersFunction(dispatch: Dispatch, id: string): Promise<string> {
    dispatch(reducerLoading());
    const response: AxiosResponse | AxiosError = await UserApi.Delete(id);

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
            
            dispatch(reducerError(response.message));
            return reject(response.message);
        }
        const result: ServerResponse = response.data;
        dispatch(deleteUsers(id));
        return resolve(result.message);
    });
}
