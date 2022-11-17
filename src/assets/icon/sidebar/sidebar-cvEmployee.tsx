import React from "react";
import { activeColor, inactiveColor } from "./config";

interface Props {
  isActive?: boolean;
}
function IconSidebarCVEmployee({ isActive }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 16 16"
    >
      {" "}
      <path
        fill={isActive ? activeColor : inactiveColor}
        d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
      />{" "}
      <path
        fill={isActive ? activeColor : inactiveColor}
        d="M5.216 14A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216z"
      />{" "}
      <path
        fill={isActive ? activeColor : inactiveColor}
        d="M4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z"
      />{" "}
    </svg>
  );
}

export default IconSidebarCVEmployee;
