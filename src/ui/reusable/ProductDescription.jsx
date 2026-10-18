import React from "react";

const ProductDescription = ({ desc }) => {
  return (
    <b
      style={{
        fontSize: "18px",
        // height: "50px",
        maxWidth: "100%",
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
      }}
    >
      {desc}
    </b>
  );
};

export default ProductDescription;
