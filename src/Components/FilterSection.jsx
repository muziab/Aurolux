import React, { useState } from "react";
import { FaChevronUp, FaShoePrints, FaTimes } from "react-icons/fa";
import Data from "../ui/items.json";
import ProductCard from "./ProductCard";
import Categories from "../ui/reusable/Category";
import { FcAutomotive, FcElectronics } from "react-icons/fc";
import {
  FaBagShopping,
  FaPersonDress,
  FaShirt,
  FaShoelace,
} from "react-icons/fa6";
import { GiDress } from "react-icons/gi";
import { TbGymnastics } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import PriceRange from "../ui/PriceRange";
import SearchBar from "../ui/reusable/SearchBar";
import "./Card.css";
import ChevronDown from "../ui/reusable/ChevronDown";
import { FiMenu } from "react-icons/fi";
// import { JSAnimation } from "framer-motion";
export default function FilterSection() {
  const [collapse, setCollapse] = useState(false);
  function toggleCollapse() {
    setCollapse(!collapse);
    console.log(collapse);
  }
  return (
    <>
      <div
        className={`${collapse == true ? " w-20 max-lg:h-fit flex flex-col max-lg:w-10  items-center py-2 " : "w-80 py-6 px-4 "} z-40  max-lg:fixed  text-[13.5px] flex flex-col gap-4 sticky bg-[#0d0d0d] rounded-sm text-neutral-300 h-screen left-0 top-0 CustomScrollBar`}
      >
        <div className={`text-2xl`}>
          {!collapse && <FaTimes onClick={toggleCollapse} />}
          {collapse && <FiMenu onClick={toggleCollapse} />}
        </div>
        <div
          className={` ${collapse ? "hidden" : "flex"} items-center justify-between `}
        >
          <h1 className="text-xl font-semibold">Filter</h1>
          <span className="text-yellow-500 font-light">Clear All</span>
        </div>
        <div className={`${collapse && "hidden"}`}>
          <Categories title={"CATEGORIES"} />
          <PriceRange />
          {/* <br/> */}
          <Categories title={"BRANDS"} search={<SearchBar />} />
        </div>
        {/* <div className="text-white flex flex-col items-center max-lg:hidden justify-center mt-5 gap-3">
          <FaBagShopping className=" bg-neutral-800 text-2xl  rounded-sm h-4/6 w-4/6 sm:w-10 sm:h-10 p-2" />
          <CgGym className=" bg-neutral-800 text-2xl  rounded-sm h-4/6 w-4/6 sm:w-10 sm:h-10 p-2" />
          <GiDress className=" bg-neutral-800 text-2xl  rounded-sm h-4/6 w-4/6 sm:w-10 sm:h-10 p-2" />
        </div> */}
      </div>
    </>
  );
}

let ddt = Data.map((product) => product)
  .filter((product) => product.id.endsWith("-1"))
  .map((product) => product);
console.log(ddt);
