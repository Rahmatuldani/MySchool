import { Route } from "react-router-dom";
import TeacherLayout from "../pages/teacher";
import React from "react";

const Dashboard = React.lazy(() => import('../pages/teacher/dashboard'));

function TeacherRoutes() {
    return (
        <Route path='/' element={<TeacherLayout/>}>
            <Route index element={<Dashboard/>}/>
        </Route>
    );
}

export default TeacherRoutes;