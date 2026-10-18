import React from "react";
// import productImg from "../../../public/images/Shop_items/men wears/Comlete_brown.jpg";
// import { div } from "framer-motion/client";
// let style = { width: "100%", height: "100%" };
const ProductImage = ({ imageSource }) => {
  return (
    <div
      style={{overflow: "hidden", objectFit: "contain" }}
    >
      <img src={imageSource} style={{ height: "100%" }} className={`aspect-6/9`} />
    </div>
  );
};

export default ProductImage;
