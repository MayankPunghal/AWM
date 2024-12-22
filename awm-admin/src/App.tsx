import React from "react";
import { BrowserRouter as Router, useLocation } from "react-router-dom";
import Navbar from "./utils/Navbar";
import HealthCheck from './utils/ApiHealthCheck';
import AppRoutes from "./utils/AppRoutes";
import SessionUtil from "./utils/SessionUtil";

const AppWithNavbar: React.FC = () => {
  const location = useLocation();
  const routesWithoutNavbar = ["/login", "/register", "/"];
  const showNavbar = !routesWithoutNavbar.includes(location.pathname);

  return (
    <div className="flex">
      <SessionUtil timeoutInMinutes={Number(process.env.REACT_APP_SESSION_TIMEOUT)} />
      {/* {showNavbar && <Navbar />} */}
      <div className="flex-1">
        <AppRoutes/>
      </div>
    </div>
  );
};

const App: React.FC = () => {
  return (
      <Router>
        <HealthCheck>
          <AppWithNavbar />
        </HealthCheck>
      </Router>
  );
};

export default App;
