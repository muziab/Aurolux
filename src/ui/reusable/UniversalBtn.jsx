import React from "react";
import "../../Components/Card.css";
const UniversalBtn = ({ additionalStyle, actionDesc }) => {
  return (
    <>
      <button className={`${additionalStyle || `max-sm:p-1 font-bold actionBtn`} actionBtn`}>
        {actionDesc}
      </button>
    </>
  );
};

export default UniversalBtn;
