import React from "react";

const Paragraph = ({ children, className }) => {
  return <p className={`text-sm text-Neutral/02 py-4 ${className}`}>{children}</p>;
};

export default Paragraph;
