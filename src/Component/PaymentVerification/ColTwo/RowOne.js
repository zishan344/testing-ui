import React from "react";
import { FiFilter } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";

const RowOne = ({ searchItem, setSearchItem }) => {
  const arr = [
    { name: "Total Transition", count: "3" },
    { name: "Amount Credit", amount: "0.00" },
    { name: "Amount Devited", amount: "0.00" },
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
      <div className="grid grid-cols-4 justify-center mb-10">
        {arr.map((a, index) => (
          <div key={index}>
            <h2 className="text-2xl">{a?.count}</h2>
            <h2 className="text-2xl">{a?.amount && `$ ${a.amount}`}</h2>
            <h2>{a.name}</h2>
          </div>
        ))}
        <div>
          <button class="btn btn-outline btn-secondary rounded-full">
            Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default RowOne;
