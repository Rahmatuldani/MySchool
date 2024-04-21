import { Route } from "react-router-dom";
import StudentLayout from "../pages/student";
import React from "react";

const Dashboard = React.lazy(() => import('../pages/student/dashboard'));

function StudentRoutes() {
    return (
        <Route path='/' element={<StudentLayout/>}>
            <Route index element={<Dashboard/>}/>
        </Route>
    );
}

export default StudentRoutes;