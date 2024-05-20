export enum AUTH_ACTION_TYPES {
    REDUCER_LOADING = 'auth/REDUCER_LOADING',
    REDUCER_ERROR = 'auth/REDUCER_ERROR',

    LOGIN = 'auth/LOGIN',
    LOGOUT = 'auth/LOGOUT',
}

export type LoginType = {
    username: string;
    password: string;
}
