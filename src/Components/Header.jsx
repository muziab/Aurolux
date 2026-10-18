import React, { useState } from "react";
import Logo from "../ui/reusable/Logo";
import "../Components/Card.css";
import Nav from "../ui/reusable/Nav";
import SearchBar from "../ui/reusable/SearchBar";
import Wishlist from "../ui/reusable/Wishlist";
import CartIcon from "../ui/reusable/CartIcon";
import Notification from "../ui/reusable/Notification";
import Profile from "../ui/reusable/Profile";
import UniversalBtn from "../ui/reusable/UniversalBtn";
import { AiOutlineMenu, AiOutlineMenuFold } from "react-icons/ai";
import { FaArrowDown, FaChevronCircleDown } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa6";
import { FiHeart, FiMenu } from "react-icons/fi";
import Categories from "../ui/reusable/Category";
import { Link, Route, Routes } from "react-router-dom";
import ChevronDown from "../ui/reusable/ChevronDown";

export default function heaeder({
  wishes,
  handleWish,
  handleCartedItems,
  openCart,
}) {
  const [collapse, setCollapse] = useState(false);
  const [drop, SetDrop] = useState(false);
  function handleCategoryDrop() {
    SetDrop(!drop);
  }
  return (
    <header
      className="h-fit p-4 gap-y-4 flex items-center border max-xl:flex-col max-w-screen justify-evenly"
      // style={{ border: "0.5px thin var(--color-gold-deep)" }}
    >
      <div className="flex items-center w-full gap-2 justify-evenly">
        <Link to={"/"}>
          <Logo />
        </Link>
        <div className="flex items-center max-xl:hidden gap-2 text-xs text-white">
          <div>
            <div
              onClick={handleCategoryDrop}
              className="flex items-center relative justify-center border-spacing-2 border border-dashed border-yellow-500 w-30 h-8 text-lg rounded gap-2 "
            >
              <AiOutlineMenu color="gold" className=" text-sm" />{" "}
              <span className="text-xs">Categories</span>
              <div className="text-sm " style={{ color: "gold" }}>
                <ChevronDown
                  collapsed={collapse}
                  toggleCollapse={() => {
                    setCollapse(!collapse);
                    console.log(collapse);
                  }}
                />
              </div>
              {/* <FaChevronDown color="gold" className="text-xs" /> */}
              <div
                className={`absolute backdrop-blur-2xl flex gap-4 justify-center top-8 z-30 bg-[#0c0c0cac] left-0 rounded-lg p-4 ${drop ? " h-fit " : "h-0 opacity-0"} w-fit`}
              >
                {drop && <Categories catWrap={true} />}
                {drop && <Categories catWrap={true} />}
              </div>
            </div>
          </div>
          <div className="w-fit flex gap-0">
            <Link to={"/market"} className="p-2">
                Market
            </Link>
            <a href="#" className="p-2">
              Brands
            </a>
            <a href="#" className="p-2">
              Deals
            </a>
            <a href="#" className="p-2">
              Vendors
            </a>
          </div>
        </div>
        <div
          className=""
          style={{ borderRight: "1px solid var(--color-gold-deep)" }}
        >
          <SearchBar
            iconCam={true}
            iconMic={true}
            additionalStyle={"max-xl:hidden"}
          />
        </div>
        <div className="flex gap-2">
          <div
            className="max-sm:gap-2 gap-3  flex text-white items-center p-1 "
          >
            <Link to={"/wishlist"}>
              <div className="flex flex-col items-center justify-center relative">
                <div className="bg-red-500 flex justify-center items-center absolute -top-2 -left-2 aspect-square h-4 w-4 text-[10px] text-center rounded-full">
                  {wishes}
                </div>
                <Wishlist icons={<FiHeart />} handleWish={handleWish} />
                <small className="text-[10px]">Wishlist</small>
              </div>
            </Link>
            <div className="flex flex-col items-center justify-center">
              <Notification />
              <small className="text-[10px]">Alerts</small>
            </div>
            <div
              className="flex flex-col items-center justify-center relative"
              onClick={openCart}
            >
              <div className="bg-red-500 flex justify-center items-center absolute -top-2 -left-2 aspect-square h-4 w-4 text-[10px] text-center rounded-full">
                {handleCartedItems}
              </div>
              <CartIcon />
              <small className="text-[10px]">Cart</small>
            </div>
          </div>
          <div className="max-sm:hidden flex">
            <Profile header={true} />
          <UniversalBtn actionDesc={"Become a Vendor"} />
          </div>
        </div>
      </div>
      {/* <div className="text-white flex w-full items-center justify-evenly"> */}
      {/* <FiMenu className="text-2xl"/> */}
      {/* <SearchBar
        iconCam={true}
        iconMic={true}
        additionalStyle={"min-lg:hidden max-sm:w-4/5"}
      /> */}
      {/* </div> */}
    </header>
  );
}
