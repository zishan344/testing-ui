import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { IoMdNotifications } from "react-icons/io";
import { NavLink } from "react-router-dom";
import auth from "../../firebase.init";
const Navbar = () => {
  const [user, loading, error] = useAuthState(auth);
  const fullName = user?.displayName
    ?.split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase();
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost normal-case text-xl">Dashboard</a>
      </div>
      <div className="flex-none">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <div className="indicator">
              <IoMdNotifications className="text-xl w-5" />
              <span className="badge badge-sm indicator-item w-6 font-bold text-white bg-red-400">
                8
              </span>
            </div>
          </label>
          <div
            tabIndex={0}
            className="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
          >
            <div className="card-body">
              <span className="font-bold text-lg">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              {user?.photoURL ? (
                <img src={user.photoURL} />
              ) : (
                <div className="flex justify-center items-center">
                  <span className="rounded-xl text-xl font-bold text-secondary">
                    {fullName}
                  </span>
                </div>
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a className="justify-between">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            {user ? (
              <>
                <li>
                  <NavLink onClick={() => signOut(auth)} to="/login">
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li>
                  <NavLink to="/login">Login</NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
