import { useEffect, useState } from "react";
const useToken = (user, pass) => {
  const [token, setToken] = useState(false);
  console.log(user);
  // console.log(user?.user?.displayName);
  useEffect(() => {
    const currentUser = user?.user?.email;
    console.log(currentUser);
    if (user && pass) {
      fetch(`http://localhost:3306/users/${currentUser}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Berar ${currentUser}`,
        },
        body: JSON.stringify({
          user_login: user?.user?.displayName,
          user_pass: pass,
          user_email: currentUser,
        }),
      })
        .then((res) => res.json())
        .then((data) => console.log(data));
    }
  }, [user, token]);
  return [token];
};
export default useToken;
