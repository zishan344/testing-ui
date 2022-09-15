import React from "react";
import { useQuery } from "react-query";

const AllUser = () => {
  // const [users, setUsers] = useState([]);
  // useEffect(() => {
  //   fetch("https://immense-oasis-81446.herokuapp.com/user")
  //     .then((res) => res.json())
  //     .then((data) => setUsers(data));
  // }, []);
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
  const normal = users.filter(
    (user) => user?.user_login != "admin" && user?.user_login != "moderator"
  );
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
          {normal.map((user, index) => (
            <tr key={user._id}>
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
