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
import { FaHeart } from "react-icons/fa";
// import items from "./items.json";
// import React from "react";

const ProductCard = ({
  cartPresence,
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
  function getID(id) {
    console.log(id);
  }
  // let wish = true
  return (
    <div className="ProductCard w-55 max-sm:w-40 ">
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

        {/* {items.map(product => product?.discount !== false ?  :"" )} */}
        <div
          style={{
            padding: "10px",
            display: "flex",
            // flexDirection: "column",
            justifyContent: "space-evenly",
            
          }}
          className="max-sm:h-37.5 justify-evenly h-54 w-55 flex-col"
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
      {/* {console.log(product)} */}
    </div>
  );
};

export default ProductCard;
