import React, { useEffect, useState } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { BsArrowRightShort } from "react-icons/bs";
import Background from "../../../image/profile-img.png";

const HomeOnecolumn = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("https://backoffice.elite-professionals.in/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="card max-w-4xl bg-base-100 shadow-xl">
        <div className="card-body">
          <div className="grid grid-cols-2 justify-between items-center">
            <div className="text-blue-500">
              <h2 className="text-blue-500 mt-6 text-xl">Welcome Back !</h2>
              <h2 className="mb-6">Skote Dashboard</h2>
            </div>
            <div>
              <img className="w-full" src={Background} alt="" />
            </div>
          </div>
          <div className="grid grid-cols-3 gpa-2 justify-between">
            <div>
              <div className="avatar relative bottom-6">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
              <h2 className="text-white font-bold">Henry Price</h2>
              <h2>UI/UX Design</h2>
            </div>
            <div className="col-span-2 grid grid-cols-2 justify-between">
              <div>
                <h2 className="text-white font-bold">125</h2>
                <h2>Projects</h2>
              </div>
              <div>
                <h2 className="text-white font-bold">$1245</h2>
                <h2>Revenue</h2>
              </div>
              <div className="col-span-2 flex items-end">
                <button className="btn btn-info btn-sm flex justify-center gap-2 text-white">
                  <span> View Profile</span> <BsArrowRightShort />{" "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card max-w-4xl bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-white">Monthly Earning</h2>
          <div className="grid grid-cols-2  gap-4 items-center">
            <div>
              <h4>This month</h4>
              <h2 className="text-3xl text-white font-semibold">$34,252</h2>
              <div>
                <p className="flex flex-row items-center">
                  <span className="text-green-500">12%</span>
                  <AiOutlineArrowUp className="text-green-500 text-[20px]" />
                  <span>From</span>
                </p>
                <p className="my-4">previous period</p>
              </div>
              <div className="">
                <button className="btn btn-info btn-sm flex justify-center gap-2 text-white">
                  <span> View Profile</span> <BsArrowRightShort />{" "}
                </button>
              </div>
            </div>
            <div>
              <div className="avatar">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src="https://placeimg.com/192/192/people" />
                </div>
              </div>
            </div>
          </div>
          <p>We craft digital, graphic and dimensional thinking.</p>
        </div>
      </div>
    </div>
  );
};

export default HomeOnecolumn;
