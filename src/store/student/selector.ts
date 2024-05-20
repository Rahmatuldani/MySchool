import { createSelector } from 'reselect';
import { RootState } from '../store';
import { StudentState } from './reducer';

const selectStudentsReducer = (state: RootState): StudentState => state.students;

export const selectStudents = createSelector(
    [selectStudentsReducer],
    (studentslice) => studentslice.students
);

export const selectStudentsIsLoading = createSelector(
    [selectStudentsReducer],
    (studentslice) => studentslice.isLoading
);
export const selectStudentsError = createSelector(
    [selectStudentsReducer],
    (studentslice) => studentslice.error
);