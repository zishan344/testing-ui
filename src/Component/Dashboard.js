import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../firebase.init";
import useTestRole from "./Hook/useTestRole";
import useVerify from "./Hook/useVerify";
import Loading from "./Loading";
const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  const [verify, adminLoading] = useVerify(user);
  const { accessRouter, routeUser } = useTestRole(user?.email);

  if (!accessRouter && !routeUser) {
    return <Loading />;
  }

  return (
    <div className="drawer">
      {/* drawer-mobile */}
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content scrollbar-hide container mx-auto">
        {/* <!-- Page content here --> */}
        <div className="navbar-start">
          <label
            tabIndex={0}
            htmlFor="my-drawer-2"
            className="btn btn-ghost btn-circle "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
        </div>
        <Outlet />
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-48 md:w-60 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}

          <li>
            <NavLink to="/">Default</NavLink>
          </li>

          {(accessRouter?.paymentVerify === "payment_verification" ||
            routeUser?.role === "admin") && (
            <li>
              <NavLink to="/paymentVerify">Payment Verification</NavLink>
            </li>
          )}

          <li>
            <NavLink to="/approveIdentity">Approve identity</NavLink>
          </li>
          <li>
            <NavLink to="/dispute">Dispute verify</NavLink>
          </li>
          <li>
            <NavLink to="/analysis">Marketing Analysis</NavLink>
          </li>
          <li>
            <NavLink to="/userpermission">User Permission</NavLink>
          </li>
          <li>
            <NavLink to="/general">General</NavLink>
          </li>

          {user && (
            <>
              {(verify == "agent" ||
                verify == "moderator" ||
                verify == "admin") && (
                <>
                  <li>
                    <NavLink to="/publicUser">Normal User</NavLink>
                  </li>
                </>
              )}
              {(verify == "moderator" || verify == "admin") && (
                <>
                  <li>
                    <NavLink to="/admin">Admin</NavLink>
                  </li>
                  <li>
                    <NavLink to="/Moderator">Moderator</NavLink>
                  </li>
                </>
              )}
              {verify == "admin" && (
                <>
                  <li>
                    <NavLink to="/sickertAdmin">Company Sickert</NavLink>
                  </li>

                  <li>
                    <NavLink to="/totaluser">Total User</NavLink>
                  </li>
                  <li>
                    <NavLink to="/test">test</NavLink>
                  </li>
                </>
              )}
            </>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;
