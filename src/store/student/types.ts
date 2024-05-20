export enum STUDENT_ACTION_TYPES {
    REDUCER_LOADING = 'student/REDUCER_LOADING',
    REDUCER_ERROR = 'student/REDUCER_ERROR',

    FETCH_STUDENT = 'student/FETCH_STUDENT',
    FIND_STUDENT = 'student/FIND_STUDENT',
    CREATE_STUDENT = 'student/CREATE_STUDENT',
    UPDATE_STUDENT = 'student/UPDATE_STUDENT',
    DELETE_STUDENT = 'student/DELETE_STUDENT',
    EMPTY_STUDENT = 'student/EMPTY_STUDENT',
}

export type StudentType = {
    _id: string;
    nisn: number;
    name: string;
    grade: string;
    gender: string;
    address: string;
    phone: string;
    photo: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}