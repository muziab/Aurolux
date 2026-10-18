// import { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { FaTimes } from "react-icons/fa";
import Verification from "../ui/reusable/Verification";
// import productData from "../ui/items.json"
import Rating from "../ui/reusable/Rating";
import ProductCard from "./ProductCard";
import PrimaryBtn from "../ui/reusable/PrimaryBtn";
import BlankSection from "../ui/reusable/BlankSection";
import { FiShoppingCart } from "react-icons/fi";
function CartSection({ onRemoveCartItem, products, toggleCollapse, collapse }) {
  console.log(products);
  return (
    <>
      <div
        className={` ${collapse == false ? "w-0" : "w-60"}  overflow-auto flex flex-col gap-5 items-center text-neutral-50  min-w-fit h-screen bg-neutral-950 fixed top-0 right-0 z-25 CustomScrollBar`}
      >
        {collapse && (
          <>
            <span
              onClick={toggleCollapse}
              className=" text-2xl flex justify-between p-2 w-full sticky top-0 backdrop-blur-2xl"
            >
              <h1>Cart</h1>
              <FaTimes />
            </span>
            <main
              className={`flex flex-col gap-4 min-h-[70vh] w-full p-4 overflow-auto `}
            >
              {products.length > 0 ? (
                products.map((product) => (
                  <div className="flex w-full rounded-[10px]  overflow-hidden gap-3 items-center cartCard h-25 mb-5">
                    <div className=" w-20 ">
                      <img
                        src={product.img}
                        className="h-full object-fit "
                        alt=""
                      />
                    </div>
                    <div className="p-1 text-[14px] flex flex-col justify-between h-full ">
                      <h1 className="">{product.title}</h1>
                      <b>{product.price}</b>
                      <span>
                        <Rating />
                      </span>
                    </div>
                    <div>
                      <PrimaryBtn
                        additionalStyle={"text-red-500 border-red-500"}
                        handleFunction={() => onRemoveCartItem(product.id)}
                        FunctionDesc={"Remove"}
                      />
                    </div>
                  </div>
                  // )) : ""}
                ))
              ) : (
                <BlankSection
                  placeholderText={"Cart is Empty "}
                  icon={<FiShoppingCart />}
                />
              )}
              <div>
                {products.length > 0 && (
                  <PrimaryBtn FunctionDesc={"Clear Cart"} />
                )}
              </div>
            </main>
          </>
        )}
      </div>
      {/* overlay background */}
      <div
        className={` ${!collapse ? "h-0 hidden" : "h-screen block"} w-screen  bg-neutral-800 fixed top-0 right-0 z-20 text-white `}
        style={{ backgroundColor: "#0c0c0cab" }}
        onClick={toggleCollapse}
      ></div>
    </>
  );
}

export default CartSection;
