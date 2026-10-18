import React from "react";
// import { div } from "framer-motion/client";
// let style = { width: "100%", height: "100%" };
const ProductImage = ({ imageSource }) => {
  return (
    <div
      style={{overflow: "hidden" }}
      className="h-50 "
    >
      <img src={imageSource} className={`h-65 aspect-6/7`} />
    </div>
  );
};

export default ProductImage;
