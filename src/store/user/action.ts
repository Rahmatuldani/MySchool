import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/reducer";
import { UserType } from "./types";
import { USERS_ACTION_TYPES } from "./types";
import Users from '../../data/users.json';
import { Dispatch } from "redux";

// Reducer Loading
export type ReducerLoading = Action<USERS_ACTION_TYPES.REDUCER_LOADING>;
export const reducerLoading = withMatcher(
    (): ReducerLoading => createAction(USERS_ACTION_TYPES.REDUCER_LOADING)
);

// Reducer Error
export type ReducerError = ActionWithPayload<USERS_ACTION_TYPES.REDUCER_ERROR, Error>;
export const reducerError = withMatcher(
    (error: Error): ReducerError => createAction(USERS_ACTION_TYPES.REDUCER_ERROR, error)
);

// Begin Fetch User
export type FetchUsers = ActionWithPayload<USERS_ACTION_TYPES.FETCH_USERS, UserType[]>;
export const fetchUsers = withMatcher(
    (users: UserType[]): FetchUsers => createAction(USERS_ACTION_TYPES.FETCH_USERS, users)
);

export function FetchUsersFunction(dispatch: Dispatch): Promise<string> {
    dispatch(reducerLoading());
    const users: UserType[] = Users;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = 10+60;
            if (result === 70) {
                dispatch(fetchUsers(users));
                return resolve('Fetch users success');
            }
            const error: Error = new Error('Fetch users failed');
            dispatch(reducerError(error));
            return reject(error);
        }, 1000);
    });
}
