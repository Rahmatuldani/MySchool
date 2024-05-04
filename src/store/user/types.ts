export enum USERS_ACTION_TYPES {
    REDUCER_LOADING = 'users/REDUCER_LOADING',
    REDUCER_ERROR = 'users/REDUCER_ERROR',

    FETCH_USERS = 'users/FETCH_USERS',
    FIND_USERS = 'users/FIND_USERS',
    CREATE_USERS = 'users/CREATE_USERS',
    UPDATE_USERS = 'users/UPDATE_USERS',
    DELETE_USERS = 'users/DELETE_USERS',
    EMPTY_USERS = 'users/EMPTY_USERS',
}

export type UserType = {
    _id: string;
    name: string;
    username: string;
    role: string;
    gender: string;
    address: string;
    phone: string;
}