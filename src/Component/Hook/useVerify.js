import { useEffect, useState } from "react";

const useVerify = (user) => {
  const [verify, setVerify] = useState("");
  const [adminLoading, setAdminLoading] = useState(true);
  useEffect(() => {
    if (user) {
      const email = user?.email;
      fetch(`https://backoffice.elite-professionals.in/users/${email}`)
        .then((res) => res.json())
        .then((data) => {
          // console.log(data[0].user_login);
          setVerify(data[0].user_login);
          console.log(verify);
          setAdminLoading(false);
        });
    }
  }, [user, verify]);
  // console.log(verify);
  return [verify, adminLoading];
};

export default useVerify;
