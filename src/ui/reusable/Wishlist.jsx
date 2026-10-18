import React, { useState } from "react";
import { BsFillCalendarHeartFill } from "react-icons/bs";
import { FaHandHoldingHeart, FaHeart } from "react-icons/fa";
import { FiHeart } from "react-icons/fi";

const Wishlist = ({ handleAddWish, allowClick, wish, handleRemoveWish }) => {
  const [clicked, SetClicked] = useState(false);
  // SetIcon(<FiHeart/>)
  function handleWishlisted() {
    allowClick == true ? SetClicked(!clicked) : null;
  }
  return (
    <div
      className="font-bold cursor-pointer text-2xl"
      onClick={handleWishlisted}
    >
      {!clicked ? (
        !wish ? (
          <FiHeart
            onClick={handleAddWish}
            className={`${!allowClick && "max-sm:text-sm"}`}
          />
        ) : (
          <FaHeart onClick={handleRemoveWish} className={` text-red-800`} />
        )
      ) : (
        <FaHeart onClick={handleRemoveWish} className=" text-red-800" />
      )}
    </div>
  );
};

export default Wishlist;
