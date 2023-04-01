import React from "react";

const TotalSingleUse = ({ user, index, refetch }) => {
  const { user_email, user_login, user_nicname } = user;
  const makeAdmin = (email) => {
    const confirm = window.confirm("Are you sure you want to make admin");
    if (!confirm) {
      return;
    }
    fetch(
      `https://immense-oasis-81446.herokuapp.com/users/makeAdmin/${email}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
      });
  };
  const makeModerator = (email) => {
    const confirm = window.confirm("Are you sure you want to make admin");
    if (!confirm) {
      return;
    }
    fetch(
      `https://immense-oasis-81446.herokuapp.com/users/makeModerator/${email}`,
      {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        refetch();
        console.log(data);
      });
  };
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{user_nicname}</td>
      <td>{user_email}</td>
      <td>
        <span className="mr-2">{user_login ? user_login : "user"}</span>
        <button
          className="btn btn-xs mr-2"
          disabled={user_login == "admin"}
          onClick={() => makeAdmin(user_email)}
        >
          Make Admin
        </button>
        <button
          className="btn btn-xs"
          onClick={() => makeModerator(user_email)}
          disabled={user_login == "moderator"}
        >
          Make Moderator
        </button>
      </td>
    </tr>
  );
};

export default TotalSingleUse;
