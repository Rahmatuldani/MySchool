import React from "react";
import { Outlet } from "react-router-dom";

function TeacherLayout() {
    return (
        <>
            Teacher Layout
            <React.Suspense fallback={<>Loading...</>}>
                <Outlet/>
            </React.Suspense>
        </>
    );
}

export default TeacherLayout;