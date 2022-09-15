import React, { useState } from "react";
import {
  useCreateUserWithEmailAndPassword,
  useSendPasswordResetEmail,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import auth from "../firebase.init";
import Loading from "./Loading";
const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [signInWithGoogle, guser, gloading, gerror] = useSignInWithGoogle(auth);
  const [updateProfile, updating, Uerror] = useUpdateProfile(auth);
  const [createUserWithEmailAndPassword, Ruser, Rloading, Rerror] =
    useCreateUserWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const navigate = useNavigate();
  if (guser || Ruser) {
    navigate("/");
  }
  let mrError;
  if (gerror || Rerror || Uerror) {
    mrError = (
      <p className="mt-3 text-red-500">
        {gerror?.message || Rerror?.message || Uerror.message}
      </p>
    );
  }
  if (gloading || Rloading || Uerror) {
    return <Loading />;
  }
  const onSubmit = async (data) => {
    const { email, password } = data;
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
    // const currentUser = Ruser?.user?.email;
    console.log(displayName);

    fetch(`https://backoffice.elite-professionals.in/users/${email}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Berar ${email}`,
      },
      body: JSON.stringify({
        user_login: displayName,
        user_pass: password,
        user_email: email,
      }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="flex justify-center py-4 bg-base-100">
      <div className="card w-[700px] shadow-md bg-base-100">
        <div className="card-body">
          <h2 className="text-2xl text-center font-bold text-secondary">
            Register An Account
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full max-w-xl">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                {...register("name", {
                  required: {
                    value: true,
                    message: "name is required",
                  },
                })}
                type="text"
                onChange={(e) => setDisplayName(e.target.value)}
                placeholder="Name"
                className="input input-bordered w-full max-w-xl"
              />
              <label className="label">
                {errors?.name?.type === "required" && (
                  <span className="text-red-500">{errors.name.message}</span>
                )}
              </label>
            </div>
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
              </label>

              <span className="">
                Already have an account{" "}
                <Link className="underline text-blue-500" to="/login">
                  Login
                </Link>
              </span>
              {mrError}
            </div>

            <div className="form-control mt-6 text-center ">
              <button type="submit" className="btn btn-secondary w-[40%]">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
