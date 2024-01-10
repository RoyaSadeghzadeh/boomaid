import React from "react";

const Button = ({
  children,
  className = "",
  type = "button",
  variant = "primary",
  size = "normal",
  pill = true,
  disabled = false,
  onClick,
}) => {
  const classes = {
    base: "border transition ease-in-out duration-300",
    disabled: "opacity-50 cursor-not-allowed",
    pill: "rounded-[4px]",
    size: {
      small: "px-2 py-1 text-sm",
      normal: "px-6 py-2 text-sm min-h-6",
      large: "px-8 py-3 text-lg",
    },
    variant: {
      primary:
        "bg-Primary/03 hover:opacity-90 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 text-white",
      "primary-bordered":
        "border border-Primary/03 text-Primary/03 hover:bg-Primary/03 focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 hover:text-white",
    },
  };
  return (
    <button
      onClick={onClick}
      className={`
      ${className}
  ${classes.base}
  ${classes.size[size]}
  ${classes.variant[variant]}
  ${pill && classes.pill}
  ${disabled && classes.disabled}
  ${className}
`}>
      {children}
    </button>
  );
};

export default Button;
