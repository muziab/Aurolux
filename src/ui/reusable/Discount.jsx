import React from "react";
// import items from "../Items.json";
const Discount = ({ discount }) => {
  // console.log(items);
  // let test = items.map(product => product?.discount).filter(dis => dis !== undefined)
  // console.log(test);
  // {discount == undefined || }
  return <div className={`${discount == undefined ? "noDiscount" : "discount" }`}>{discount}</div>; 
};

export default Discount;
