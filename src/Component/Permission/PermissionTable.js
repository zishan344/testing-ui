import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import useTestRole from "../Hook/useTestRole";

const PermissionTable = ({ inputText }) => {
  const [user, loading] = useAuthState(auth);
  const [users, setUser] = useState([]);
  const { accessRouter, routeUser } = useTestRole(inputText);
  const [paymentVerify, setPaymentVerify] = useState("");
  const [identy, setIdenty] = useState("");
  const [disputVerify, setDisputVerify] = useState("");
  const [marketingAnalysis, setMarketingAnalysis] = useState("");
  const [userEamil, setUserEamil] = useState("");
  const [userPermission, setUserPermission] = useState("");
  const [checkDisabled, setCheckDisabled] = useState(true);
  if (accessRouter) {
    console.log(accessRouter);
  }

  useEffect(() => {
    if (inputText) {
      fetch(`https://backoffice.elite-professionals.in/users/${inputText}`)
        .then((res) => res.json())
        .then((data) => setUser(data));
    }
  }, [inputText]);

  const adminPermission = (email) => {
    const permissionroute = {
      paymentVerify,
      identy,
      disputVerify,
      marketingAnalysis,
      userPermission,
    };
    fetch(`https://backoffice.elite-professionals.in/users`, {
      method: "PATCH",
      headers: {
        email: email,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(permissionroute),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  if (!users) {
    console.log("hallo world");
  } else {
    console.log("user heare data found");
    console.log(users);
  }
  return (
    <div>
      {users.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            {/* <!-- head --> */}
            <thead>
              <tr>
                <th>users</th>
                <th>payment verification</th>
                <th>approve identify</th>
                <th>Disput verify</th>
                <th>marketing analisis</th>
                <th>user permission</th>
                <th></th>

                <th></th>
              </tr>
            </thead>
            <tbody>
              {/* <!-- row 1 --> */}
              {users.map((u, index) => (
                <tr key={index + 2 - 1 * 3}>
                  <th>{u?.user_email}</th>
                  <th>
                    <label>
                      <input
                        /* disabled={checkDisabled} */
                        onChange={(e) =>
                          e.target.checked
                            ? setPaymentVerify("payment_verification")
                            : setPaymentVerify("")
                        }
                        type="checkbox"
                        className="checkbox"
                      />
                    </label>
                  </th>
                  <th>
                    <label>
                      <input
                        /* disabled={checkDisabled} */

                        onChange={(e) =>
                          e.target.checked
                            ? setIdenty("approved_identy")
                            : setIdenty("")
                        }
                        type="checkbox"
                        className="checkbox"
                      />
                    </label>
                  </th>
                  <th>
                    <label>
                      <input
                        /* disabled={checkDisabled} */

                        onChange={(e) =>
                          e.target.checked
                            ? setDisputVerify("disput_verify")
                            : setDisputVerify("")
                        }
                        type="checkbox"
                        className="checkbox"
                      />
                    </label>
                  </th>
                  <th>
                    <label>
                      <input
                        /* disabled={checkDisabled} */
                        onChange={(e) =>
                          e.target.checked
                            ? setMarketingAnalysis("marketing_analysis")
                            : setMarketingAnalysis("")
                        }
                        type="checkbox"
                        className="checkbox"
                      />
                    </label>
                  </th>
                  <th>
                    <label>
                      <input
                        /* disabled={checkDisabled} */
                        onChange={(e) =>
                          e.target.checked
                            ? setUserPermission("user_permission")
                            : setUserPermission("")
                        }
                        type="checkbox"
                        className="checkbox"
                      />
                    </label>
                  </th>
                  <th>
                    <button
                      onClick={() => adminPermission(u.user_email)}
                      className="btn swap-off btn-xs"
                    >
                      save
                    </button>
                    {/*   <div className="">
                      <label className="swap">
                        <input type="checkbox" />
                        <div
                          onClick={() => setCheckDisabled(false)}
                          className=" flex gap-6 swap-on items-center"
                        >
                          <p className="link swap-off text-red-400">cancel</p>
                          <button
                            onClick={() => adminPermission("s")}
                            className="btn swap-off btn-xs"
                          >
                            save
                          </button>
                        </div>
                        <div
                          onClick={() => setCheckDisabled(true)}
                          className="swap-off link text-green-400"
                        >
                          Edit
                        </div>
                      </label>
                    </div> */}
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="flex justify-center">
          <div className="card text-center w-96 bg-base-100 shadow-xl">
            <div className="card-body  ">
              <p>No data found please type valid email</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PermissionTable;
