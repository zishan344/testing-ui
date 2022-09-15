import React from "react";
import { useQuery } from "react-query";

const Moderator = () => {
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
    refetch,
  } = useQuery(["repoData"], () =>
    fetch("https://backoffice.elite-professionals.in/users").then((res) =>
      res.json()
    )
  );
  if (isLoading) return "Loading...";
  // console.log(users);
  const moderator = users.filter((user) => user?.user_login == "moderator");
  console.log(moderator);
  const removeRole = (email) => {
    const confirm = window.confirm("Are you sure you want to remove moderator");
    if (!confirm) {
      return;
    }
    fetch(`https://backoffice.elite-professionals.in/users/${email}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
      });
  };
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
            <th>Remove Role</th>
          </tr>
        </thead>
        <tbody>
          {moderator.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>{user?.user_nicename}</td>
              <td>{user?.user_email}</td>
              <td>{user?.user_login}</td>
              <td>
                <button
                  className="btn btn-xs"
                  onClick={() => removeRole(user?.email)}
                  disabled={user.role == "Moderator"}
                >
                  Remove Moderator
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Moderator;
