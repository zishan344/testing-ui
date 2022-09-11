import React from "react";
import { FaCcMastercard } from "react-icons/fa";
import { GiUsaFlag } from "react-icons/gi";
const Dispute = () => {
  return (
    <div>
      <div>
        <ul className="  font-semibold flex gap-10 my-10">
          <li className=" font-semibold cursor-pointer border-b-4 rounded border-white">
            Need Response
          </li>
          <li className=" font-semibold cursor-pointer">All Disputes</li>
          <li className=" font-semibold cursor-pointer">Won</li>
          <li className=" font-semibold cursor-pointer">Lost</li>
        </ul>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Amount</th>
              <th>Status</th>
              <th>Reason</th>
              <th>Customer</th>
              <th>square Type</th>
              <th>Disputed ON</th>
              <th>Respond By</th>
              <th>Win</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <th>$32 USD</th>
              <td>
                <span className="background-red bg-orange-100 text-orange-500 px-2 rounded">
                  Open
                </span>
              </td>
              <td>Product Not Relived</td>
              <td>Micheal@gmail.com</td>
              <td className="flex gap-2 items-center">
                <FaCcMastercard className="text-white text-xl font-bold" />
                <span>****4588</span>
                <GiUsaFlag className="text-red-400 font-bold text-xl" />
              </td>
              <td>AUG 26</td>
              <td>SEP 11 7:59 PM</td>
              <td>*****</td>
            </tr>
            <tr>
              <th>$32 USD</th>
              <td>
                <span className="background-red bg-orange-100 text-orange-500 px-2 rounded">
                  Open
                </span>
              </td>
              <td>Product Not Relived</td>
              <td>Micheal@gmail.com</td>
              <td className="flex gap-2 items-center">
                <FaCcMastercard className="text-white text-xl font-bold" />
                <span>****5465</span>
                <GiUsaFlag className="text-red-400 font-bold text-xl" />
              </td>
              <td>AUG 26</td>
              <td>SEP 11 7:59 PM</td>
              <td>*****</td>
            </tr>
            <tr>
              <th>$32 USD</th>
              <td>
                <span className="background-red bg-orange-100 text-orange-500 px-2 rounded">
                  Open
                </span>
              </td>
              <td>Product Not Relived</td>
              <td>Micheal@gmail.com</td>
              <td className="flex gap-2 items-center">
                <FaCcMastercard className="text-white text-xl font-bold" />
                <span>****8755</span>
                <GiUsaFlag className="text-red-400 font-bold text-xl" />
              </td>
              <td>AUG 26</td>
              <td>SEP 11 7:59 PM</td>
              <td>*****</td>
            </tr>
            <tr>
              <th>$32 USD</th>
              <td>
                <span className="background-red bg-orange-100 text-orange-500 px-2 rounded">
                  Open
                </span>
              </td>
              <td>Product Not Relived</td>
              <td>Micheal@gmail.com</td>
              <td className="flex gap-2 items-center">
                <FaCcMastercard className="text-white text-xl font-bold" />
                <span>****4545</span>
                <GiUsaFlag className="text-red-400 font-bold text-xl" />
              </td>
              <td>AUG 26</td>
              <td>SEP 11 7:59 PM</td>
              <td>*****</td>
            </tr>
            <tr>
              <th>$32 USD</th>
              <td>
                <span className="background-red bg-orange-100 text-orange-500 px-2 rounded">
                  Open
                </span>
              </td>
              <td>Product Not Relived</td>
              <td>Micheal@gmail.com</td>
              <td className="flex gap-2 items-center">
                <FaCcMastercard className="text-white text-xl font-bold" />
                <span>****7854</span>
                <GiUsaFlag className="text-red-400 font-bold text-xl" />
              </td>
              <td>AUG 26</td>
              <td>SEP 11 7:59 PM</td>
              <td>*****</td>
            </tr>
            <tr>
              <th>$32 USD</th>
              <td>
                <span className="background-red bg-orange-100 text-orange-500 px-2 rounded">
                  Open
                </span>
              </td>
              <td>Product Not Relived</td>
              <td>Micheal@gmail.com</td>
              <td className="flex gap-2 items-center">
                <FaCcMastercard className="text-white text-xl font-bold" />
                <span>****4574</span>
                <GiUsaFlag className="text-red-400 font-bold text-xl" />
              </td>
              <td>AUG 26</td>
              <td>SEP 11 7:59 PM</td>
              <td>*****</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dispute;
