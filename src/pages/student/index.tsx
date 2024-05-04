import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserType } from "../../store/user/types";
import { useSelector } from "react-redux";
import { selectAuth } from "../../store/auth/selector";

function StudentLayout() {
    const auth: UserType | null = useSelector(selectAuth);
    if (auth && auth.role != 'Student') { return <Navigate to={`/${auth.role}`} replace/>;}

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