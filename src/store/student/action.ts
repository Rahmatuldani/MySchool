import { Dispatch } from "redux";
import { Action, ActionWithPayload, createAction, withMatcher } from "../../utils/reducer";
import { AxiosError, AxiosResponse } from "axios";
import { ServerResponse } from "../shared/type";
import { STUDENT_ACTION_TYPES, StudentType } from "./types";
import StudentApi from "../../data/student";

// Reducer Loading
export type ReducerLoading = Action<STUDENT_ACTION_TYPES.REDUCER_LOADING>;
export const reducerLoading = withMatcher(
    (): ReducerLoading => createAction(STUDENT_ACTION_TYPES.REDUCER_LOADING)
);

// Reducer Error
export type ReducerError = ActionWithPayload<STUDENT_ACTION_TYPES.REDUCER_ERROR, Error | string>;
export const reducerError = withMatcher(
    (error: Error | string): ReducerError => createAction(STUDENT_ACTION_TYPES.REDUCER_ERROR, error)
);

// Begin Fetch Student
export type FetchStudents = ActionWithPayload<STUDENT_ACTION_TYPES.FETCH_STUDENT, StudentType[]>;
export const fetchStudents = withMatcher(
    (students: StudentType[]): FetchStudents => createAction(STUDENT_ACTION_TYPES.FETCH_STUDENT, students)
);

export async function FetchStudentsFunction(dispatch: Dispatch): Promise<string> {
    dispatch(reducerLoading());
    const response: AxiosResponse | AxiosError = await StudentApi.Fetch();

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
        dispatch(fetchStudents(result.data as StudentType[]));
        return resolve(result.message);
    });
}
// End Fetch Teacher