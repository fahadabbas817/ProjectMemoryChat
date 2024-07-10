import React from "react";
import { PulseLoader } from "react-spinners";

const Loader = (props) => {
  return (
    <div className="mx-auto">
      <PulseLoader size={props.size||"6px"} color={props.color || 'white' } />
    </div>
  );
};

export default Loader;
