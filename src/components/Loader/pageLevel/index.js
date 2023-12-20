import React from "react";

const SpinLoading = ({ size = 60, className }) => {
  return (
    <span
      className={
        `flex border-2 border-[#fd961a] border-l-transparent border-b-[#fd961a] rounded-full animate-spin ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    ></span>
  );
};

export default SpinLoading;