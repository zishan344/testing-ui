import React from "react";

const Approveidentity = () => {
  return (
    <div>
      <div className="flex justify-between my-4 items-center mx-4">
        <div>
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-sm w-full max-w-xs"
          />
        </div>
        <div>
          <button class="btn btn-secondary">Add Verification</button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Last Update</th>
              <th>Status</th>
              <th>Name</th>
              <th>country</th>
              <th>Document Type</th>
              <th>ID</th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            <tr>
              <th>21 MAR 19:12</th>
              <td>
                <span className="badge badge-ghost  bg-blue-100 rounded-full text-blue-500">
                  Approved
                </span>
              </td>
              <td>Rohan</td>
              <td>India</td>
              <td>Passport</td>
              <td>wxleilkf</td>
            </tr>
            {/* <!-- row 2 --> */}
            <tr>
              <th>20 MAR 19:12</th>
              <td>
                <span className="badge badge-ghost bg-blue-100 rounded-full text-blue-500">
                  Approved
                </span>
              </td>
              <td>Rinko</td>
              <td>Pakistan</td>
              <td>Passport</td>
              <td>wxleilkf</td>
            </tr>
            {/* <!-- row 3 -->. */}
            <tr>
              <th>29 MAR 19:12</th>
              <td>
                <span className="badge badge-ghost  bg-red-100 rounded-full text-red-500">
                  declined
                </span>
              </td>
              <td>Siddik</td>
              <td>Bangladesh</td>
              <td>Passport</td>
              <td>wi3u4yiu</td>
            </tr>
            <tr>
              <th>29 MAR 19:12</th>
              <td>
                <span className="badge badge-ghost  bg-red-100 rounded-full text-red-500">
                  declined
                </span>
              </td>
              <td>RofiQ</td>
              <td>USA</td>
              <td>Passport</td>
              <td>22oi1qja</td>
            </tr>
            <tr>
              <th>29 JUN 12:30</th>
              <td>
                <span className="badge badge-ghost  bg-red-100 rounded-full text-red-500">
                  declined
                </span>
              </td>
              <td>roky</td>
              <td>Bangladesh</td>
              <td>Passport</td>
              <td>sd345yfds</td>
            </tr>
            <tr>
              <th>05 MAR 04:50</th>
              <td>
                <span className="badge badge-ghost  bg-red-100 rounded-full text-red-500">
                  declined
                </span>
              </td>
              <td>rony</td>
              <td>srilonka</td>
              <td>Passport</td>
              <td>swwerfse53s</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Approveidentity;
