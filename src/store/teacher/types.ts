export enum TEACHER_ACTION_TYPES {
    REDUCER_LOADING = 'teacher/REDUCER_LOADING',
    REDUCER_ERROR = 'teacher/REDUCER_ERROR',

    FETCH_TEACHER = 'teacher/FETCH_TEACHER',
    FIND_TEACHER = 'teacher/FIND_TEACHER',
    CREATE_TEACHER = 'teacher/CREATE_TEACHER',
    UPDATE_TEACHER = 'teacher/UPDATE_TEACHER',
    DELETE_TEACHER = 'teacher/DELETE_TEACHER',
    EMPTY_TEACHER = 'teacher/EMPTY_TEACHER',
}

export type TeacherType = {
    _id: string;
    nip: string;
    name: string;
    field: string;
    gender: string;
    address: string;
    phone: string;
    photo: string | null;
    createdAt?: Date;
    updatedAt?: Date;
}