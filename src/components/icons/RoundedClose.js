import React from "react";

const RoundedClose = () => {
  return (
    <div class="cursor-pointer rounded-full p-1 font-semibold text-Alert/red outline outline-[1px] transition hover:text-secondary-100">
      <svg
        stroke="#FF0000"
        fill="#FF0000"
        stroke-width="0"
        version="1.1"
        viewBox="0 0 17 17"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg">
        <g></g>
        <path d="M9.207 8.5l6.646 6.646-0.707 0.707-6.646-6.646-6.646 6.646-0.707-0.707 6.646-6.646-6.647-6.646 0.707-0.707 6.647 6.646 6.646-6.646 0.707 0.707-6.646 6.646z"></path>
      </svg>
    </div>
  );
};

export default RoundedClose;
