import React from "react";
import { PulseLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="mx-auto">
      <PulseLoader size="5px" />
    </div>
  );
};

export default Loader;
