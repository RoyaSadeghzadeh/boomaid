import React from "react";

const FormLable = ({ children, required = true }) => {
  return (
    <div className="font-[500] text-[16px] text-Neutral/01 pb-2">
      <span>{children}</span>
      {required && <span className="text-Alert/red">*</span>}
    </div>
  );
};

export default FormLable;
