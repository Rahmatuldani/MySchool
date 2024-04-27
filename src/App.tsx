import { useSelector } from "react-redux";
import { selectAuth } from "./store/auth/selector";
import { UserType } from "./store/user/types";
import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import LoadingComponent from "./components/loading";
import NavbarComponent from "./components/navbar";
import config from "./config/config";
import SidebarComponent from "./components/sidebar";

function App() {
  document.body.className = 'nav-fixed';
  const auth: UserType | null = useSelector(selectAuth);

  if (!auth) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <NavbarComponent />
      <div id="layoutSidenav">
        <div id="layoutSidenav_nav">
          <SidebarComponent auth={auth}/>
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

export default App;
