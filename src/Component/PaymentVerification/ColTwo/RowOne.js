import React from "react";
import { FiFilter } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const RowOne = ({ searchItem, setSearchItem }) => {
  const arr = [
    "Total Transition",
    "Amount Credit",
    "Amount Devited",
    "Download",
  ];
  return (
    <div>
      <div className="flex justify-between mx-2 items-center mb-8">
        <div className="flex gap-2 items-center rounded-full my-4">
          <h3 className="flex gap-2 items-end ml-3 bordered ">
            Transaction id <IoIosArrowDown />{" "}
          </h3>
          <div>
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered input-sm w-full max-w-xs"
              onChange={(event) => setSearchItem(event.target.value)}
            />
          </div>
        </div>
        <div className="flex gap-2 items-center rounded-full my-4">
          <h2 className="flex gap-2 items-end">
            18 Mar 18 - 15 jun 18 <IoIosArrowDown />{" "}
          </h2>
        </div>
        <div>
          <h2>
            <FiFilter />
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-4 justify-center">
        {arr.map((a) => (
          <h1>{a}</h1>
        ))}
      </div>
    </div>
  );
};

export default RowOne;
