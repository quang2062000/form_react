import React from "react";
import { activeColor, inactiveColor } from "./config";

interface Props {
  isActive?: boolean;
}
function IconSidebarReport({ isActive }: Props) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 48 48"
      fill={isActive ? activeColor : inactiveColor}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" fill="white" fillOpacity="0.01" />
      <path
        d="M5 7C5 5.34315 6.34315 4 8 4H32C33.6569 4 35 5.34315 35 7V44H8C6.34315 44 5 42.6569 5 41V7Z"
        fill={isActive ? activeColor : inactiveColor}
        stroke="#333"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M35 24C35 22.8954 35.8954 22 37 22H41C42.1046 22 43 22.8954 43 24V41C43 42.6569 41.6569 44 40 44H35V24Z"
        stroke="#333"
        strokeWidth="1"
        strokeLinejoin="round"
      />
      <path
        d="M11 12H19"
        stroke="#333"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 19H23"
        stroke="#333"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconSidebarReport;
