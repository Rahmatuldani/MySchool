import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import LoadingComponent from "../../components/loading";
import config from "../../config/config";
import { UserType } from "../../store/user/types";
import { useSelector } from "react-redux";
import { selectAuth } from "../../store/auth/selector";

const NavbarComponent = React.lazy(() => import("../../components/navbar"));
const SidebarComponent = React.lazy(() => import("../../components/sidebar"));
const SidebarItems = React.lazy(() => import("./sidebar"));

function TeacherLayout() {
    document.body.className = 'nav-fixed';
    const auth: UserType | null = useSelector(selectAuth);
    if (!auth) {
        return <Navigate to={'/login'} replace/>;
    }
    return (
        <React.Suspense fallback={<LoadingComponent />}>
            <NavbarComponent />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <SidebarComponent items={<SidebarItems />} role={auth.role} />
                </div>
                <div id="layoutSidenav_content">
                    <React.Suspense fallback={<LoadingComponent />}>
                        <Outlet />
                    </React.Suspense>
                    <footer className="footer mt-auto footer-light">
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-md-6 small">
                                    Copyright &#xA9; 2024 &#8226; {config.developer}
                                </div>
                                <div className="col-md-6 text-md-right small">
                                    <a href="#!">Privacy Policy </a>
                                    &#8226;
                                    <a href="#!"> Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
        </React.Suspense>
    );
}

export default TeacherLayout;
