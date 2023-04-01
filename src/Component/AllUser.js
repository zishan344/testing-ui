import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../firebase.init";

const AllUser = () => {
  const [user, loading] = useAuthState(auth);
  const {
    isLoading,
    error,
    data: users,
  } = useQuery(["repoData"], () =>
    fetch("https://backoffice.elite-professionals.in/users").then((res) =>
      res.json()
    )
  );
  if (isLoading) return "Loading...";

  // const normal = users.filter(
  //   (user) => user?.user_login !== "admin" && user?.user_login !== "moderator"
  // );
  console.log(users);
  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        {/* <!-- head --> */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index + 1 * 3}>
              <th>{index + 1}</th>
              <td>{user?.user_nicename}</td>
              <td>{user?.user_email}</td>
              <td>{user?.user_login ? user?.user_login : "User"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUser;
