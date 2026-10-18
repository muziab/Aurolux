import React from "react";
import { FaCheck } from "react-icons/fa";

const Verification = () => {
  return (
    <p
      style={{
        color: "var(--color-gold-deep)",
        fontSize: "10px",
        fontFamily: "var(--font-body)",
        fontWeight: "bolder",
        display: "flex",
        gap: "3px",
      }}
    >
      <FaCheck />
      Verified
    </p>
  );
};

export default Verification;
