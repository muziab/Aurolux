import React from "react";
import { FaCartPlus } from "react-icons/fa";
import "../../Components/Card.css"
import Message from "./Message";
import UniversalBtn from "./UniversalBtn";

const CartBtn = ({handleCartedItems}) => {
  return (
    <span
    onClick={handleCartedItems}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.5rem",
        justifyContent: "space-between",
      }}
    >
      <UniversalBtn actionDesc={`Add To Cart `}/>
      <FaCartPlus
        style={{
          // backgroundColor: "var(--color-gold-deep)",
          padding: "5px",
          fontSize: "30px",
          borderRadius: "2px",
        }}
        className=" cursor-pointer text-neutral-200"
      />
    </span>
  );
};

export default CartBtn;
