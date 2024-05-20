import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectAuth, selectAuthRole } from "../../store/auth/selector";
import LoadingComponent from "../../components/loading";
import NavbarComponent from "../../components/navbar";
import SidebarComponent from "../../components/sidebar";
import SidebarItems from "./sidebar";
import config from "../../config/config";
import { StaffType } from "../../store/staff/types";

function AdminLayout() {
    const auth: StaffType = useSelector(selectAuth) as StaffType;
    const role: string = useSelector(selectAuthRole) as string;
    if (role !== 'Administrator') {
        return <Navigate to={'/'} replace/>;
    }
    if (!auth) { return <Navigate to={'/login'} replace/>; }

    return (
        <>
            <NavbarComponent/>
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <SidebarComponent items={<SidebarItems />} role={role} />
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