import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import HomeOnecolumn from "./Home.component.js/HomeOneColumn/HomeOnecolumn";
import FullColTwo from "./Home.component.js/HomeTwoColumn/HomeTwoColumn.";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  return (
    <div className="grid grid-cols-3 gap-6">
      <div>
        <HomeOnecolumn />
      </div>

      <div className=" col-span-2 grid grid-rows-4 gap-y-8">
        <FullColTwo />
      </div>
    </div>
  );
};

export default Home;
