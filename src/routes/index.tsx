import { createBrowserRouter, createRoutesFromElements, isRouteErrorResponse, Route, useRouteError } from "react-router-dom";
import App from "../App";
import Login from "../pages/login";
import ScanPage from "../pages/scanning";

// eslint-disable-next-line react-refresh/only-export-components
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
            <Route path='/' element={<App/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/scan' element={<ScanPage/>}/>
            <Route path='*' element={<>Not Found Page</>}/>
        </Route>
    )
);

export default routers;