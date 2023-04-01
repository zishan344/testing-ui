import React, { useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../firebase.init";
import useToken from "./Hook/userToken";
import Loading from "./Loading";

const Login = () => {
  const [signInWithEmailAndPassword, Luser, Lloading, Lerror] =
    useSignInWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const [token] = useToken(Luser);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  if (Luser) {
    navigate(from, { replace: true });
  }

  let mrError;
  if (Lerror) {
    mrError = <p className="mt-3 text-red-500">{Lerror?.message}</p>;
  }

  const onSubmit = (data) => {
    const { email, password } = data;
    signInWithEmailAndPassword(email, password);
  };
  if (Lloading) {
    return <Loading />;
  }
  return (
    <div className="flex justify-center py-4 bg-base-100 container mx-auto">
      <div className="card w-[700px] bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl text-center font-bold text-secondary">
            {" "}
            Login An Account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xl">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is required",
                  },
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "provide a valid email",
                  },
                })}
                type="email"
                onBlur={(e) => setEmail(e.target.value)}
                placeholder="Email"
                className="input input-bordered w-full max-w-xl"
              />
              <label className="label">
                {errors?.email?.type === "required" && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
                {errors?.email?.type === "pattern" && (
                  <span className="text-red-500">{errors.email.message}</span>
                )}
              </label>
            </div>
            <div className="form-control w-full max-w-xl">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                {...register("password", {
                  required: {
                    value: true,
                    message: "password is required",
                  },
                })}
                type="password"
                placeholder="Password"
                className="input input-bordered w-full max-w-xl"
              />
              <label className="label">
                {errors?.password?.type === "required" && (
                  <span className="text-red-500">
                    {errors.password.message}
                  </span>
                )}
                <span
                  onClick={async () => {
                    if (!email) {
                      return toast.error("input a valid email");
                    }
                    await sendPasswordResetEmail(email);
                    toast.success("send email successfully");
                  }}
                  className="label-text-alt text-blue-500 link link-hover"
                >
                  Forgot password?
                </span>
              </label>
              <span className="">
                New user{" "}
                <Link className="underline text-blue-500" to="/register">
                  Register
                </Link>
              </span>
            </div>
            {mrError}
            <div className="form-control w-[40%] mt-6  ">
              <button type="submit" className="btn btn-secondary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
