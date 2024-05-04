import React from 'react';
import { RouteObject } from 'react-router-dom';
import StudentLayout from '../pages/student';

const Dashboard = React.lazy(() => import('../pages/student/dashboard'));

const StudentRoutes: RouteObject = {
    path: "/Student",
    element: <StudentLayout/>,
    children: [
        {
            index: true,
            element: <Dashboard/>
        }
    ]
};

export default StudentRoutes;