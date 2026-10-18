import React from "react";
import Rating from "../ui/reusable/Rating";
import Discount from "../ui/reusable/Discount";
import { FaStar } from "react-icons/fa";
import UniversalBtn from "../ui/reusable/UniversalBtn";
import PrimaryBtn from "../ui/reusable/PrimaryBtn";
import Wishlist from "../ui/reusable/Wishlist";

export default function FullProductDescription({
  product,
  toggleCollapse,
  collapse,
  onAddWish,
  onAddToCart,
}) {
  console.log(product);
  return (
    <>
      {collapse &&
        product.map((item) => (
          <main className="fixed z-30 min-h-80 h-[95vh] overflow-auto self-center bottom-0 inset-0 p-10 justify-self-center rounded-lg flex gap-4 w-[70vw] backdrop-blur-2xl backdrop-brightness-50 bg-[#1c1c1cab] items-center justify-center CustomScrollBar">
            <div className="w-20 flex flex-col gap-2 p-2">
              <img
                className="border border-yellow-800 rounded-sm"
                src={item.img}
                alt=""
              />
            </div>
            <div>
              <img
                className="border border-yellow-600 rounded-[10px]"
                src={item.img}
                alt=""
              />
            </div>
            <div className="text-neutral-400 p-4 flex flex-col gap-5 w-100">
              <div className="flex flex-col gap-3">
                <div className="text-white flex gap-2 items-center">
                  <small
                    className="border rounded-sm border-[#00ff00] px-4 py-1"
                    style={{ backgroundColor: "#063e02" }}
                  >
                    in stock
                  </small>
                  <small className="border rounded-sm border-yellow-600 px-4 bg-[#5346016d] py-1">
                    Authentic Welfare
                  </small>
                </div>
                <h1 className="text-2xl font-semibold text-white">
                  {item.title || "Rolex Submariner Date Oyster 41mm"}
                </h1>
                <div>
                  <div className="flex items-center gap-1">
                    {" "}
                    <span className="text-yellow-600 items-center gap-1 flex">
                      <FaStar /> 4.2{" "}
                    </span>
                    ( 210,Reviews )<div>2,435 Sold</div>
                  </div>
                </div>
                <ul className="leading-10">
                  <li>Brand: Rolex</li>
                  <li>Model: Submariner Date</li>
                  <li>Reference: 1256349.N</li>
                  <li>Core Size: 41mm</li>
                  <li>Water Resistance: 300m/100ft</li>
                </ul>
                <small>Movemart Automatic</small>
                <a href="#" className="leading-8 w-fit text-lg text-yellow-500">
                  View Full Specification
                </a>
              </div>
              <h1 className="text-xl">
                <span className="text-3xl text-yellow-500">
                  {item.price || "N5,550,000"}
                </span>{" "}
                <strike>{item.org_price}</strike>{" "}
                <small>{item.Discount || "-10%"}</small>
              </h1>
              <div className="flex flex-col gap-3">
                <div onClick={() => onAddToCart(item.id)}>
                  <UniversalBtn actionDesc={"Add To Cart"} />
                </div>
                <PrimaryBtn FunctionDesc={"Buy Now"} />
                <div className="flex items-center justify-between">
                  {/* <div className="flex border px-2 py-4 items-center"> Add To Wishlist</div> */}
                  <PrimaryBtn
                  handleFunction={()=>onAddWish(item.id)}
                    FunctionDesc={"Add To Wishlist"}
                    additionalStyle={"hover:text-white"}
                    icon={<Wishlist />}
                  />
                  <PrimaryBtn
                    FunctionDesc={"Compare"}
                    additionalStyle={"hover:text-white"}
                  />
                </div>
              </div>
            </div>
          </main>
        ))}
      <div
        className={` ${!collapse ? "h-0 hidden" : "h-screen block"} w-screen  bg-neutral-800 fixed top-0 right-0 z-20 text-white `}
        style={{ backgroundColor: "#0c0c0cab" }}
        onClick={toggleCollapse}
      ></div>
    </>
  );
}
