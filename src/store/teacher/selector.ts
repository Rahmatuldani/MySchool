import { createSelector } from 'reselect';
import { RootState } from '../store';
import { TeacherState } from './reducer';

const selectTeacherReducer = (state: RootState): TeacherState => state.teachers;

export const selectTeachers = createSelector(
    [selectTeacherReducer],
    (teacherSlice) => teacherSlice.teachers
);

export const selectTeachersIsLoading = createSelector(
    [selectTeacherReducer],
    (teacherSlice) => teacherSlice.isLoading
);
export const selectTeachersError = createSelector(
    [selectTeacherReducer],
    (teacherSlice) => teacherSlice.error
);