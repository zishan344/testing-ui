import React from "react";
import { BiCopyAlt, BiPurchaseTagAlt } from "react-icons/bi";
import { GoDesktopDownload } from "react-icons/go";
const FirstRow = () => {
  const data = [1, 2, 3];
  return (
    <div className="grid grid-cols-3 gap-3">
      <div className="card max-w-4xl bg-base-100 shadow-xl">
        <div className="card-body ">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-y-6">
              <h2 className=" font-semibold">Orders</h2>
              <h2 className="text-xl font-bold text-white">1,235</h2>
            </div>
            <div>
              <h2 className="bg-blue-500 rounded-full p-4">
                <BiCopyAlt className="text-2xl text-white" />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="card max-w-4xl bg-base-100 shadow-xl">
        <div className="card-body ">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-y-6">
              <h2 className=" font-semibold">Revenue</h2>
              <h2 className="text-xl font-bold text-white">$35723</h2>
            </div>
            <div>
              <h2 className="bg-blue-500 rounded-full p-4">
                <GoDesktopDownload className="text-2xl text-white" />
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="card max-w-4xl bg-base-100 shadow-xl">
        <div className="card-body ">
          <div className="flex justify-between items-center">
            <div className="flex flex-col gap-y-6">
              <h2 className=" font-semibold">Average Price</h2>
              <h2 className="text-xl font-bold text-white">$16.2</h2>
            </div>
            <div>
              <h2 className="bg-blue-500 rounded-full p-4">
                <BiPurchaseTagAlt className="text-2xl text-white" />
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstRow;
