import React from "react";
import { ThreeDots } from "react-loader-spinner";

const Loader = (props) => {
  return (
    <div className="mx-auto">
      <ThreeDots
        visible={props.limit}
        height="40"
        width="40"
        color="#001C3C"
        radius="10"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
