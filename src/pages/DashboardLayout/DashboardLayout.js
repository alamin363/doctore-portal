import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { authProvider } from "../../components/Contex/ContextProvider";
import useAdmin from "../../components/Hooks/useAdmin";
import Navber from "../Share/Navber/Navber";

const DashboardLayout = () => {
  const { user } = useContext(authProvider);
  const [isAdmin] = useAdmin(user?.email);
  return (
    <div>
      <Navber></Navber>
      <div className="drawer drawer-mobile">
        <input id="dashboard-dower" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>

        <div className="drawer-side">
          <label htmlFor="dashboard-dower" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 text-base-content">
            <li>
              <Link to="/dashboard">DashBoard</Link>
            </li>
            {/* {isAdmin && ( */}
              <li>
                <Link to="/dashboard/users">AllUser</Link>
                <Link to="/dashboard/addDoctor">Add Doctor</Link>
                <Link to="/dashboard/managedoctors">Manage Doctors</Link>
              </li>
            {/* )} */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
