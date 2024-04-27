/* eslint-disable react-refresh/only-export-components */
import React from "react";
import { createBrowserRouter, createRoutesFromElements, isRouteErrorResponse, Route, useRouteError } from "react-router-dom";
import App from "../App";
import Login from "../pages/login";
import ScanPage from "../pages/scanning";
import NotFoundPage from "../pages/errors/notFound";

const Dashboard = React.lazy(() => import('../pages/dashboard'));
const Users = React.lazy(() => import('../pages/users'));

function ErrorBoundary() {
    const error = useRouteError();

    return isRouteErrorResponse(error) ? (
        <h1>{error.status} {error.statusText} - {error.data}</h1>
    ) : (
        <h1>{String(error)}</h1>
    );
}

const routers = createBrowserRouter(
    createRoutesFromElements(
        <Route errorElement={<ErrorBoundary/>}>
            <Route path='/' element={<App/>}>
                <Route index element={<Dashboard/>}/>
                <Route path="/users" element={<Users/>}/>
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/scan' element={<ScanPage/>}/>
            <Route path='*' element={<NotFoundPage/>}/>
        </Route>
    )
);

export default routers;