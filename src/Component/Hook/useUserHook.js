import { useEffect, useState } from "react";

const useUserHook = (userEmail) => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3306/users/moditest@gmail.com`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userEmail]);
  return { users };
};

export default useUserHook;
