import React from 'react';
import { RouteObject } from 'react-router-dom';
import TeacherLayout from '../pages/teacher';

const Dashboard = React.lazy(() => import('../pages/teacher/dashboard'));

const TeacherRoutes: RouteObject = {
    path: "/Teacher",
    element: <TeacherLayout/>,
    children: [
        {
            index: true,
            element: <Dashboard/>
        }
    ]
};

export default TeacherRoutes;