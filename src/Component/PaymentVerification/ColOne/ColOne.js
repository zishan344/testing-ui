import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

const ColOne = () => {
  const arr = [
    {
      title: "Integration Help",
      m1: "Test Credential",
      m2: "Live Credential",
      m3: "Integration Credential",
    },
    {
      title: "Collect Payments",
      m1: "Share Payment Handle",
      m2: "Request Payment",
      m3: null,
    },
  ];
  return (
    <div>
      {arr.map((a) => (
        <div className="card max-w-4xl bg-base-100 my-10 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-green-400 mb-8">{a?.title}</h2>
            <ul className="flex flex-col gap-y-8">
              <li className="flex justify-between gap-2 mx-2">
                {a?.m1} <AiOutlineArrowRight className="text-green-400" />{" "}
              </li>
              <li className="flex justify-between gap-2 mx-2">
                {a?.m2} <AiOutlineArrowRight className="text-green-400" />{" "}
              </li>
              <li className="flex justify-between gap-2 mx-2">
                {a?.m3}{" "}
                {a.m3 && <AiOutlineArrowRight className="text-green-400" />}
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ColOne;
