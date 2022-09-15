import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useQuery } from "react-query";
import Swal from "sweetalert2";
import Loading from "../../Loading";
const RowTwo = ({ searchItem }) => {
  // const [users, setUser] = useState([]);
  // const { users: u } = useUserHook();
  // console.log(u);
  // useEffect(() => {
  //   fetch("http://localhost:3306/paymentHistory")
  //     .then((res) => res.json())
  //     .then((data) => setUser(data));
  // }, []);
  let time;
  const {
    isLoading,
    error,
    data: users,
    refetch,
  } = useQuery(["repoData"], () =>
    fetch("http://localhost:3306/paymentHistory").then((res) => res.json())
  );

  if (isLoading) return <Loading />;
  // console.log(users);
  const remarkStatus = (value, token_id) => {
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
              required: "true",
            },
            showCancelButton: true,
            confirmButtonText: "save note",
            showLoaderOnConfirm: true,

            allowOutsideClick: () => !Swal.isLoading(),
          }).then((result) => {
            if (result?.value) {
              const dateGenarator = new Date();

              fetch(`http://localhost:3306/paymentHistory/${token_id}`, {
                method: "PATCH",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                  status: value,
                  notes: result.value,
                  date: dateGenarator,
                }),
              })
                .then((res) => res.json())
                .then((data) => {
                  refetch();
                  console.log(data);
                });
            }
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire(
                `${value}!`,
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
                  u?.token.toLowerCase().includes(searchItem.toLowerCase())
                ) {
                  return u;
                }
              })
              .map((user) => (
                <tr>
                  <th>
                    <div className="font-bold">{user.date.split(" ")[0]}</div>
                    <div className="text-sm opacity-50">
                      {user.date.split(" ")[1].split(".")[0]}
                    </div>
                  </th>
                  <td>{user.token}</td>
                  <td>{user.reference}</td>
                  <td>{user?.user_id}</td>
                  <td>${user.amount}</td>
                  <td>
                    <div className="flex justify-between gap-4 items-center ">
                      <p>{user.status}</p>
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
                          <button
                            onClick={() =>
                              remarkStatus("approved", user.token_id)
                            }
                          >
                            Approved
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() =>
                              remarkStatus("decline", user.token_id)
                            }
                          >
                            Decline
                          </button>
                        </li>
                        <li>
                          <button
                            onClick={() => remarkStatus("block", user.token_id)}
                          >
                            Block
                          </button>
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
