import React, { useEffect, useState } from "react";

const Admin = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://backoffice.elite-professionals.in/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  const admin = users.filter((user) => user?.user_login == "admin");
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
          {admin.map((user, index) => (
            <tr key={user._id}>
              <th>{index + 1}</th>
              <td>{user?.user_nicename}</td>
              <td>{user?.user_email}</td>
              <td>{user?.user_login}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
