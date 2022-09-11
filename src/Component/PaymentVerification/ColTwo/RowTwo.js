import React, { useEffect, useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import Swal from "sweetalert2";
const RowTwo = ({ searchItem }) => {
  console.log(searchItem);
  const [users, setUser] = useState([]);
  // const { users: u } = useUserHook();
  // console.log(u);
  useEffect(() => {
    fetch("http://localhost:3306/users")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);
  // console.log(users);
  const note = (value) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: `You won't be able to ${value} this!`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: `Yes, ${value} it!`,
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `Submit your ${value} region`,
            input: "text",
            inputAttributes: {
              autocapitalize: "off",
            },
            showCancelButton: true,
            confirmButtonText: "save note",
            showLoaderOnConfirm: true,
            /* preConfirm: (login) => {
              return fetch(`//api.github.com/users/${login}`)
                .then((response) => {
                  if (!response.ok) {
                    throw new Error(response.statusText);
                  }
                  return response.json();
                })
                .catch((error) => {
                  Swal.showValidationMessage(`Request failed: ${error}`);
                });
            }, */
            allowOutsideClick: () => !Swal.isLoading(),
          }).then((result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                console.log(result)`${value}!`,
                `Your file has been saved.`,
                "success"
              );
            }
          });
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            "Cancelled",
            "Your imaginary file is safe :)",
            "error"
          );
        }
      });
  };
  return (
    <div className="row-span-3">
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Date</th>
              <th>Txn Id</th>
              <th>Reference</th>
              <th>Cust, Email</th>
              <th>Amount</th>
              <th>status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <!-- row 1 --> */}
            {users
              ?.filter((u) => {
                if (searchItem == "") {
                  return u;
                } else if (
                  u.user_email.toLowerCase().includes(searchItem.toLowerCase())
                ) {
                  return u;
                }
              })
              .map((user) => (
                <tr>
                  <th>
                    <div className="font-bold">15 jun 22</div>
                    <div className="text-sm opacity-50">2:28 PM</div>
                  </th>
                  <td>45485715254</td>
                  <td>test</td>
                  <td>{user?.user_email}</td>
                  <td>$454</td>
                  <td>
                    <div className="flex justify-between gap-4 items-center ">
                      <p>User Canceled</p>
                    </div>
                  </td>
                  <td>
                    <div className="dropdown dropdown-left">
                      <label tabIndex={0} className="btn btn-ghost m-1">
                        <BsThreeDotsVertical className="text-2xl" />{" "}
                      </label>
                      <ul
                        tabIndex={0}
                        className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                      >
                        <li>
                          <button onClick={() => note("approved")}>
                            Approved
                          </button>
                        </li>
                        <li>
                          <button onClick={() => note("decline")}>
                            Decline
                          </button>
                        </li>
                        <li>
                          <button onClick={() => note("block")}>Block</button>
                        </li>
                      </ul>
                    </div>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RowTwo;
