import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { VscThreeBars } from "react-icons/vsc";
import { NavLink, Outlet } from "react-router-dom";
import auth from "../firebase.init";
import useVerify from "./Hook/useVerify";
const Dashboard = () => {
  const [user, loading, error] = useAuthState(auth);
  // const [admin, setAdmin] = useState(false);
  // const [moderator, setModerator] = useState(false);
  // const [User, setUser] = useState(false);
  const [verify, adminLoading] = useVerify(user);
  // console.log(verify);
  // console.log(user);

  // useEffect(() => {
  //   if (verify == "Admin") {
  //     setAdmin(true);
  //   }elseIf(verify == "Moderator"){
  //     setModerator(true);
  //   }elseIf(verify == "User"){
  //    setUser(true);
  //   }
  // }, [user]);

  return (
    <div className="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content ">
        {/* <!-- Page content here --> */}
        <Outlet />
        <label
          htmlFor="my-drawer-2"
          className="btn btn-secondary btn-outline drawer-button absolute top-0 right-3 lg:hidden"
        >
          <VscThreeBars />
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 overflow-y-auto w-50 md:w-60 bg-base-100 text-base-content">
          {/* <!-- Sidebar content here --> */}
          <li>
            <NavLink to="/">Default</NavLink>
          </li>
          <li>
            <NavLink to="/paymentVerify">Payment Verification</NavLink>
          </li>
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
          {/*
          {(verify == "User" || verify == "Admin" || verify == "Moderator") && (
            <>
              <li>
                <NavLink to="/publicUser">Normal User</NavLink>
              </li>
            </>
          )}
          {(verify == "Admin" || verify == "Moderator") && (
            <>
              <li>
                <NavLink to="/Moderator">Moderator</NavLink>
              </li>
              <li>
                <NavLink to="/admin">Admin</NavLink>
              </li>
            </>
          )}
          {verify == "Admin" && (
            <>
              <li>
                <NavLink to="/sickertAdmin">Company Sickert</NavLink>
              </li>

              <li>
                <NavLink to="/totaluser">Total User</NavLink>
              </li>
            </>
          )}

          <li>
            <NavLink onClick={() => signOut(auth)} to="/login">
              Logout
            </NavLink>
          </li> */}

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
