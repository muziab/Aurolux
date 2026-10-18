import React from "react";

export default function PrimaryBtn({ FunctionDesc,additionalStyle, handleFunction,icon }) {
  return (
    <>
      <button
        className={`${additionalStyle || "text-yellow-500 border-yellow-500"} text-center px-4 py-2 border  text-[12px] rounded-sm flex justify-center items-center gap-2`}
        onClick={handleFunction}
      >
        {icon}
        {FunctionDesc}
      </button>
    </>
  );
}
