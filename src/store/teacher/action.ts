import { Dispatch } from "redux";
import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/reducer";
import { TEACHER_ACTION_TYPES, TeacherType } from "./types";
import { AxiosError, AxiosResponse } from "axios";
import TeacherApi from "../../data/teacher";
import { ServerResponse } from "../shared/type";

// Reducer Loading
export type ReducerLoading = Action<TEACHER_ACTION_TYPES.REDUCER_LOADING>;
export const reducerLoading = withMatcher(
    (): ReducerLoading => createAction(TEACHER_ACTION_TYPES.REDUCER_LOADING)
);

// Reducer Error
export type ReducerError = ActionWithPayload<TEACHER_ACTION_TYPES.REDUCER_ERROR, Error | string>;
export const reducerError = withMatcher(
    (error: Error | string): ReducerError => createAction(TEACHER_ACTION_TYPES.REDUCER_ERROR, error)
);

// Begin Fetch Teacher
export type FetchTeachers = ActionWithPayload<TEACHER_ACTION_TYPES.FETCH_TEACHER, TeacherType[]>;
export const fetchTeachers = withMatcher(
    (teachers: TeacherType[]): FetchTeachers => createAction(TEACHER_ACTION_TYPES.FETCH_TEACHER, teachers)
);

export async function FetchTeachersFunction(dispatch: Dispatch): Promise<string> {
    dispatch(reducerLoading());
    const response: AxiosResponse | AxiosError = await TeacherApi.Fetch();

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
        console.log(response);
        
        const result: ServerResponse = response.data;
        dispatch(fetchTeachers(result.data as TeacherType[]));
        return resolve(result.message);
    });
}
// End Fetch Teacher

// Begin Create Teacher
export type CreateTeacher = ActionWithPayload<TEACHER_ACTION_TYPES.CREATE_TEACHER, TeacherType>;
export const createTeacher = withMatcher(
    (teacher: TeacherType): CreateTeacher => createAction(TEACHER_ACTION_TYPES.CREATE_TEACHER, teacher)
);

export async function CreateTeacherFunction(dispatch: Dispatch, data: TeacherType): Promise<string> {
    dispatch(reducerLoading());
    const response: AxiosResponse | AxiosError = await TeacherApi.Create(data);

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
        dispatch(createTeacher(result.data as TeacherType));
        return resolve(result.message);
    });
}
// End Create Teacher