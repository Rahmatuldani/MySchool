/* eslint-disable react-refresh/only-export-components */
import { createBrowserRouter, createRoutesFromElements, isRouteErrorResponse, Route, useRouteError } from "react-router-dom";
import Login from "../pages/login";
import AdminRoutes from "./admin";
import TeacherRoutes from "./teacher";
import StudentRoutes from "./student";
import App from "../App";

function ErrorBoundary() {
    const error = useRouteError();

    return isRouteErrorResponse(error) ? (
        <h1>{error.status} {error.statusText} - {error.data}</h1>
    ) : (
        <h1>{String(error)}</h1>
    );
}

function RouteRedirect() {
    const user: string | null = 'Administrator';
    if (!user) {
        return <>
            <Route index element={<App/>}/>
            <Route path="/login" element={<Login/>}/>
        </>;
    }
    if (user === 'Administrator') {
        return AdminRoutes();
    }
    if (user === 'Teacher') {
        return TeacherRoutes();
    }
    if (user === 'Student') {
        return StudentRoutes();
    }
}


const routes = createBrowserRouter(
    createRoutesFromElements(
        <Route errorElement={<ErrorBoundary/>}>
            {RouteRedirect()}
            <Route path="*" element={<>Not Found</>}/>
        </Route>
    )
);

export default routes;