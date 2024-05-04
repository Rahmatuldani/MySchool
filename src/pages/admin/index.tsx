import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { UserType } from "../../store/user/types";
import { useSelector } from "react-redux";
import { selectAuth } from "../../store/auth/selector";
import LoadingComponent from "../../components/loading";
import NavbarComponent from "../../components/navbar";
import SidebarComponent from "../../components/sidebar";
import SidebarItems from "./sidebar";
import config from "../../config/config";

function AdminLayout() {
    const auth: UserType | null = useSelector(selectAuth);
    if (!auth) { return <Navigate to={'/login'} replace/>; }
    if (auth.role != 'Administrator') { return <Navigate to={`/${auth.role}`} replace/>;}

    return (
        <>
            <NavbarComponent/>
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
        </>
    );
}

export default AdminLayout;