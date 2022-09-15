import React from "react";

const Permission = () => {
  const arr = [1, 2, 3, 4];
  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>payment verification</th>
              <th>approve identify</th>
              <th>Disput verify</th>
              <th>Cust, Email</th>
              <th>marketing analisis</th>
              <th>user permission</th>
              <th></th>

              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {arr.map((u) => (
              <tr>
                <th>robi@gmail.com </th>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <th>
                  <label>
                    <input type="checkbox" class="checkbox" />
                  </label>
                </th>
                <th>
                  <button className="btn btn-sm">save</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Permission;
