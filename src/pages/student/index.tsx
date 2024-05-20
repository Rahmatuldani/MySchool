import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth, selectAuthRole } from "../../store/auth/selector";
import { StudentType } from "../../store/student/types";

function StudentLayout() {
    const auth: StudentType | null = useSelector(selectAuth) as StudentType;
    const role: string = useSelector(selectAuthRole) as string;
    if (role !== 'Student') {
        return <Navigate to={'/'} replace/>;
    }
    if (!auth) { return <Navigate to={'/login'} replace/>; }

    return (
        <>
            Student Layout
            <React.Suspense fallback={<>Loading ...</>}>
                <Outlet/>
            </React.Suspense>
        </>
    );
}

export default StudentLayout;