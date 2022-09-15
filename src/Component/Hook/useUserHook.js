import { useEffect, useState } from "react";

const useUserHook = (userEmail) => {
  const [users, setUser] = useState([]);
  useEffect(() => {
    fetch(`https://backoffice.elite-professionals.in/users/moditest@gmail.com`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [userEmail]);
  return { users };
};

export default useUserHook;
