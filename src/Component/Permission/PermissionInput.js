import React from "react";

const PermissionInput = ({ setInputText }) => {
  return (
    <div className="mb-10 ml-10 flex justify-center mt-10">
      <input
        onChange={(e) => setInputText(e.target.value)}
        type="text"
        placeholder="find user"
        className="input input-bordered w-full max-w-xs"
      />
    </div>
  );
};

export default PermissionInput;
