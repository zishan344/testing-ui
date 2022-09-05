import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);
  console.log(user);
  return (
    <div className="flex justify-center items-center h-[90vh]">
      <h2 className="text-5xl font-bold text-center text-secondary">
        Welcome to Dashboard Panel Dear {user?.displayName}
      </h2>
    </div>
  );
};

export default Home;
