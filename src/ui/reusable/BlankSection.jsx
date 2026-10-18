import React from "react";
import { Link } from "react-router-dom";

export default function BlankSection({placeholderText,icon}) {
  return (
    <div className="text-[#525252]  gap-3 font-light flex-col justify-center w-full h-full flex justify-self-center items-center ">

      <div className="text-5xl md:text-7xl" >
        {icon}
      </div>
      <p className="max-sm:text-sm">
        {placeholderText || " Add Product to wishlist to view them here"}{" "}
        
        <Link
          to={"/market"}
          className="text-[#a2a2a2] hover:underline-offset-5 decoration-1 underline-offset-3 underline"
        >
         Start Adding
        </Link>
      </p>
    </div>
  );
}
