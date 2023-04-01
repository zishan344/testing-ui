import { useQuery } from "react-query";
import Loading from "../Loading";

const useUser = () => {
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
  if (isLoading) return <Loading />;
  // console.log(error);
  // console.log(users);
  return { refetch, users };
};

export default useUser;
