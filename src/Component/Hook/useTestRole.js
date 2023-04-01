import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Loading";

const useTestRole = (userEmail) => {
  const [accessRouter, setAcccessRouter] = useState({});
  const [routeUser, setRouteUser] = useState({});
  /*   if (routeUser) {
    console.log(routeUser);
  } */
  const {
    isLoading,
    error,
    data: users,
  } = useQuery(["repoData"], () =>
    fetch("https://backoffice.elite-professionals.in/users").then((res) =>
      res.json()
    )
  );
  useEffect(() => {
    if (userEmail) {
      const routing = users?.find((u) => u?.user_email === userEmail);
      if (routing) {
        setRouteUser(routing);
        try {
          setAcccessRouter(JSON.parse(routing?.routingAccess));
        } catch (e) {
          console.log(e);
        }
      }
    }
  }, [userEmail, users]);
  if (isLoading) return <Loading />;

  return { accessRouter, routeUser };
};

export default useTestRole;
