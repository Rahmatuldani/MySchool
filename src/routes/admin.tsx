import React from 'react';
import { RouteObject } from 'react-router-dom';
import AdminLayout from '../pages/admin';

const Dashboard = React.lazy(() => import('../pages/admin/dashboard'));

const AdminRoutes: RouteObject = {
    path: "/Administrator",
    element: <AdminLayout/>,
    children: [
        {
            index: true,
            element: <Dashboard/>
        }
    ]
};

export default AdminRoutes;