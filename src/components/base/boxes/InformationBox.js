import React from "react";

const InformationBox = ({ children }) => {
  return (
    <div className="border border-Neutral/07 h-10 p-4 rounded-md flex items-center min-w-40">
      {children}
    </div>
  );
};

export default InformationBox;
