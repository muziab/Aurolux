import React from "react";

const ProductDescription = ({ desc }) => {
  return (
    <b
      style={{
        // height: "50px",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
      className="w-[90%] text-sm"
    >
      {desc}
    </b>
  );
};

export default ProductDescription;
