/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, isRouteErrorResponse, useRouteError } from "react-router-dom";
import App from "../App";
import Login from "../pages/login";
import ScanPage from "../pages/scanning";
import AdminRoutes from "./admin";
import TeacherRoutes from "./teacher";
import StudentRoutes from "./student";

function ErrorBoundary() {
    const error = useRouteError();

    return isRouteErrorResponse(error) ? (
        <h1>{error.status} {error.statusText} - {error.data}</h1>
    ) : (
        <h1>{String(error)}</h1>
    );
}

const routers = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <ErrorBoundary/>
    },
    AdminRoutes,
    TeacherRoutes,
    StudentRoutes,
    {
        path: "/login",
        element: <Login/>
    },
    {
        path: "/scan",
        element: <ScanPage/>
    },
]);

export default routers;