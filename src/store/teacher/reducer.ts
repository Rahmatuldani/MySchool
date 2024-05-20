import { AnyAction } from "redux";
import { createTeacher, fetchTeachers, reducerError, reducerLoading } from "./action";
import { TeacherType } from "./types";

export type TeacherState = {
    readonly teachers: TeacherType[];
    readonly isLoading: boolean;
    readonly error: Error | string | null;
}

const TEACHER_INITIAL_STATE: TeacherState = {
    teachers: [],
    isLoading: false,
    error: null
};

export default function teacherReducer(
    state = TEACHER_INITIAL_STATE,
    action: AnyAction
): TeacherState {
    if (reducerLoading.match(action)) {
        return {...state, isLoading: true};
    }

    if (fetchTeachers.match(action)) {
        return {...state, isLoading: false, error: null, teachers: action.payload};
    }
    if (createTeacher.match(action)) {
        return {...state, isLoading: false, error: null, teachers: [...state.teachers, action.payload]};
    }
    
    if (reducerError.match(action)) {
        return {...state, isLoading: false, error: action.payload};
    }
    return state;
}