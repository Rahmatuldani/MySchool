import React from "react";
import { Outlet } from "react-router-dom";

function StudentLayout() {
    return (
        <>
            Student Layout
            <React.Suspense fallback={<>Loading...</>}>
                <Outlet/>
            </React.Suspense>
        </>
    );
}

export default StudentLayout;