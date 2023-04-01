import React, { useState } from "react";
import PermissionInput from "./PermissionInput";
import PermissionTable from "./PermissionTable";

const Permission = () => {
  const [inputText, setInputText] = useState("");
  return (
    <>
      {" "}
      <PermissionInput setInputText={setInputText} />
      <PermissionTable inputText={inputText} />
    </>
  );
};

export default Permission;
