import React from "react";
import { PulseLoader } from "react-spinners";

const Loader = (props) => {
  return (
    <div className="mx-auto">
      <PulseLoader size={props.size} color={props.color} />
    </div>
  );
};

export default Loader;
