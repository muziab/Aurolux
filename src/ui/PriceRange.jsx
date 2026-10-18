import React from "react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import ChevronDown from "./reusable/ChevronDown";

export default function PriceRange() {
  const [collapse, setCollapse] = useState(false);
  function toggleCollapse() {
    setCollapse(!collapse);
  }
  return (
    <div className="flex flex-col gap-3 pt-3 border-t border-neutral-800 ">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold">PRICE RANGE</h1>
        <ChevronDown
            toggleCollapse={() => toggleCollapse()}
            collapsed={collapse}
          />
      </div>
      <div
        className={`flex flex-col gap-3 transition-all ${collapse == !false ? "h-0 overflow-hidden" : "h-15"}`}
      >
        <input
          type="range"
          name=""
          style={{ accentColor: "gold", border: "1px solid red" }}
          className="accent-yellow"
          id=""
        />
        <div className="flex justify-between">
          <span>₦1,000</span>
          <span>₦5,000,000+</span>
        </div>
      </div>
    </div>
  );
}
