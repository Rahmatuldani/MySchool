import React from 'react';
import { RouteObject } from 'react-router-dom';
import AdminLayout from '../pages/admin';

const Dashboard = React.lazy(() => import('../pages/admin/dashboard'));

const Teachers = React.lazy(() => import('../pages/admin/teacher'));
const TeachersList = React.lazy(() => import('../pages/admin/teacher/list'));
const TeachersAdd = React.lazy(() => import('../pages/admin/teacher/add'));

const Students = React.lazy(() => import('../pages/admin/student'));
const StudentsList = React.lazy(() => import('../pages/admin/student/list'));

const Classroom = React.lazy(() => import('../pages/admin/classroom'));
const ListClass = React.lazy(() => import('../pages/admin/classroom/list'));

const AdminRoutes: RouteObject = {
    path: "Administrator",
    element: <AdminLayout/>,
    children: [
        {
            index: true,
            element: <Dashboard/>
        },
        {
            path: 'teachers',
            element: <Teachers/>,
            children: [
                {
                    index: true,
                    element: <TeachersList/>
                },
                {
                    path: 'add',
                    element: <TeachersAdd/>
                },
            ]
        },
        {
            path: 'students',
            element: <Students/>,
            children: [
                {
                    index: true,
                    element: <StudentsList/>
                },
            ]
        },
        {
            path: 'classrooms',
            element: <Classroom/>,
            children: [
                {
                    index: true,
                    element: <ListClass/>
                }
            ]
        }
    ]
};

export default AdminRoutes;