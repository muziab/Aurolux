import React, { useState } from "react";
import { FaChevronUp } from "react-icons/fa";

export default function ChevronDown({collapsed,toggleCollapse}) {

  return (
    <>
      <FaChevronUp
        className={`font-extralight ${collapsed == !false ? "rotate-180" : ""}`}
        onClick={toggleCollapse}
      />
    </>
  );
}
