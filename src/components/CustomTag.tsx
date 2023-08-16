import React, { useEffect, useState } from "react";

const CustomTag = ({ color = "green", label }: any) => {
  const bgColorClass = `bg-green-100`;
  const textColorClass = `text-green-800`;

  return (
    <span
      className={`text-xs font-medium mr-2 px-2.5 py-0.5 rounded ${bgColorClass} ${textColorClass}`}
    >
      {label}
    </span>
  );
};

export default CustomTag;
