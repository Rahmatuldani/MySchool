import { AnyAction } from "redux";
import { fetchStudents, reducerError, reducerLoading } from "./action";
import { StudentType } from "./types";

export type StudentState = {
    readonly students: StudentType[];
    readonly isLoading: boolean;
    readonly error: Error | string | null;
}

const STUDENT_INITIAL_STATE: StudentState = {
    students: [],
    isLoading: false,
    error: null
};

export default function studentReducer(
    state = STUDENT_INITIAL_STATE,
    action: AnyAction
): StudentState {
    if (reducerLoading.match(action)) {
        return {...state, isLoading: true};
    }

    if (fetchStudents.match(action)) {
        return {...state, isLoading: false, error: null, students: action.payload};
    }
    
    if (reducerError.match(action)) {
        return {...state, isLoading: false, error: action.payload};
    }
    return state;
}