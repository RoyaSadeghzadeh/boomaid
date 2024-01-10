import React from "react";

const Box = ({ children, className }) => {
  return <div className={`py-2 ${className}`}>{children}</div>;
};

export default Box;
