import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth, selectAuthRole } from "../../store/auth/selector";
import { TeacherType } from "../../store/teacher/types";

function TeacherLayout() {
    const auth: TeacherType = useSelector(selectAuth) as TeacherType;
    const role: string = useSelector(selectAuthRole) as string;
    if (role !== 'Teacher') {
        return <Navigate to={'/'} replace/>;
    }
    if (!auth) { return <Navigate to={'/login'} replace/>; }

    return (
        <>
            Teacher Layout
            <React.Suspense fallback={<>Loading ...</>}>
                <Outlet/>
            </React.Suspense>
        </>
    );
}

export default TeacherLayout;