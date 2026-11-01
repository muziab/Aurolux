import React from "react";
// import { div } from "framer-motion/client";
// let style = { width: "100%", height: "100%" };
const ProductImage = ({ imageSource,additionalStyle }) => {
  return (<>
      <div className={`hover:scale-105 ${additionalStyle || " h-52"} overflow-hidden`}>
    { imageSource &&
      <img className={`h-full aspect-6/7`} src={imageSource} alt="" />
    }
    {/* {!imageSource && <b className="text-white text-2xl"></b>} */}
    </div>
    </>
  );
};

export default ProductImage;
