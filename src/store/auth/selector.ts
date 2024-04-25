import { createSelector } from 'reselect';
import { RootState } from '../store';
import { AuthState } from './reducer';

const selectAuthReducer = (state: RootState): AuthState => state.auth;

export const selectAuth = createSelector(
    [selectAuthReducer],
    (authSlice) => authSlice.auth
);

export const selectAuthIsLoading = createSelector(
    [selectAuthReducer],
    (authSlice) => authSlice.isLoading
);
export const selectAuthError = createSelector(
    [selectAuthReducer],
    (authSlice) => authSlice.error
);