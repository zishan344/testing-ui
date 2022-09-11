import React, { useState } from "react";
import ColOne from "./ColOne/ColOne";
import RowOne from "./ColTwo/RowOne";
import RowTwo from "./ColTwo/RowTwo";

const PaymentVerifyMainPage = () => {
  const [searchItem, setSearchItem] = useState("");
  return (
    <div className="grid grid-cols-3 gap-x-4">
      <div>
        <ColOne />
      </div>
      <div className="col-span-2 grid grid-rows-4">
        <RowOne searchItem={searchItem} setSearchItem={setSearchItem} />
        <RowTwo searchItem={searchItem} />
      </div>
    </div>
  );
};

export default PaymentVerifyMainPage;
