import React from 'react';
import { RouteObject } from 'react-router-dom';
import AdminLayout from '../pages/admin';

const Dashboard = React.lazy(() => import('../pages/admin/dashboard'));
const Users = React.lazy(() => import('../pages/admin/users'));
const ListUsers = React.lazy(() => import('../pages/admin/users/list'));
const AddUser = React.lazy(() => import('../pages/admin/users/add'));

const AdminRoutes: RouteObject = {
    path: "Administrator",
    element: <AdminLayout/>,
    children: [
        {
            index: true,
            element: <Dashboard/>
        },{
            path: 'users',
            element: <Users/>,
            children: [
                {
                    index: true,
                    element: <ListUsers/>
                },
                {
                    path: 'add',
                    element: <AddUser/>
                }
            ]
        }
    ]
};

export default AdminRoutes;