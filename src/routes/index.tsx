/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, ErrorResponse, isRouteErrorResponse, useRouteError } from "react-router-dom";
import App from "../App";
import Login from "../pages/auth/login";
import ScanPage from "../pages/scanning";
import AdminRoutes from "./admin";
import TeacherRoutes from "./teacher";
import StudentRoutes from "./student";
import NotFoundPage from "../pages/errors/notFound";

function ErrorBoundary() {
    const error = useRouteError();
    if (isRouteErrorResponse(error)) {
        if (error.status === 404) {
            return <NotFoundPage/>;
        }
        return <h1>{error.status} {error.statusText} - {error.data}</h1>;
    }
    
    return <h1>{String(error)}</h1>;
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