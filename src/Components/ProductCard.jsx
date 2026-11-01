import React from "react";
import CartBtn from "../ui/reusable/CartBtn";
import ItemPrice from "../ui/reusable/ItemPrice";
import Discount from "../ui/reusable/Discount";
import ProductImage from "../ui/reusable/ProductImage";
import Rating from "../ui/reusable/Rating";
import Verification from "../ui/reusable/Verification";
import ProductDescription from "../ui/reusable/ProductDescription";
import "./Card.css";
import "./root.css";
import Wishlist from "../ui/reusable/Wishlist";
import WislistIconClicked from "../ui/reusable/WislistIconClicked";
import { FiHeart } from "react-icons/fi";
import { FaCartPlus, FaHeart } from "react-icons/fa";
// import items from "./items.json";
// import React from "react";

const ProductCard = ({
  wish,
  handleAddWish,
  handleCartedItems,
  handleRemoveWish,
  description,
  price,
  discount,
  imageSource,
  onproductCollapse,
}) => {
  // function getID(id) {
  //   console.log(id);
  // }
  // let wish = true
  return (
    <div className="relative overflow-hidden card">
      <span className="absolute left-2 top-2 z-10 rounded-full bg-[#B8860B] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-black shadow ">
        {discount}
      </span>
      <div
        className="absolute right-2 top-2 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-black/55 text-[#e9d9a8] backdrop-blur-sm transition hover:bg-black/75"
        onclick={handleAddWish}
      >
        <Wishlist
          allowClick={true}
          handleAddWish={handleAddWish}
          wish={wish}
          handleRemoveWish={handleRemoveWish}
        />
      </div>
      <div
        onClick={onproductCollapse}
        className="bg-[#101010]  border w-45 relative overflow-hidden border-[#3c2f12] "
      >
        <ProductImage imageSource={imageSource} />
        <div className="p-3 leading-tight">
          <div className="flex flex-col gap-0.5">
            <p className="text-neutral-400 text-[11px] tracking-[0.22em]">
              COMPLETWEARS
            </p>
            <h3 className="w-full line-clamp-1 text-base mt-1 text-white">
              {description}
            </h3>
            <p className="text-xs text-neutral-400 ellipses">
              a clean dress with 20 cart
            </p>
          </div>
          <div className="flex gap-2 mt-3 justify-between items-center">
            <div className="flex leading-1 flex-col gap-0 items-start">
              <strike className="text-[12px] text-neutral-500">₦{price}</strike>
              <br />
              <b className="text-xl text-[#f4d079]">₦{price}</b>
            </div>
          </div>
        </div>
      </div>
            <div
              onClick={handleCartedItems}
              className="inline-flex gap-2 px-4 py-2 rounded-l-3xl absolute bottom-5 -right-11 text-black h-fit bg-[#B8860B]  items-center justify-center text-sm font-semibold "
            >
              <FaCartPlus className="text-xl" /> Add
            </div>
    </div>
  );
};
{
  /*return (
  <div className="ProductCard w-45 max-sm:w-40 ">
      <div className="wish">
        <Wishlist
          allowClick={true}
          handleAddWish={handleAddWish}
          wish={wish}
          handleRemoveWish={handleRemoveWish}
        />
      </div>
    <div onClick={onproductCollapse}>
      <ProductImage imageSource={imageSource} />
      <Discount discount={discount} />
   
      <div
        style={{
          padding: "10px",
          display: "flex",
          // flexDirection: "column",
          justifyContent: "space-evenly",
          
        }}
        className="h-30 w-55 flex-col text-xs"
      >
        <ProductDescription desc={description} />
        <Rating />
        <Verification />
        <ItemPrice price={price} />
      </div>
    </div>
    <div className="p-2">
      {cartPresence && (
        <CartBtn handleGetID={getID} handleCartedItems={handleCartedItems} />
      )}
    </div>
   
  </div>*/
}

export default ProductCard;
