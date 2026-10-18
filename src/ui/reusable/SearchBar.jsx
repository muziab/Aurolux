import React from "react";
import "../../Components/Card.css";
import { FiCamera, FiMic, FiSearch } from "react-icons/fi";

const SearchBar = ({iconMic,iconCam,additionalStyle}) => {
  let iconStyle = { color: "white", fontSize: "15px", fontWeight: "100" };
  return (
    <div
      style={{
        // display: "flex",
        // alignItems: "center",
        // gap: "12px",
        backgroundColor: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        // padding: "7px 15px",
        // borderRadius: "5px",
      }}
      className={`mr-2 flex gap-3 items-center px-4 rounded-sm py-2 ${additionalStyle}`}
      >
      <FiSearch style={iconStyle} />
      <input
        className="text-neutral-50 text-sm outline-none"
        type="text"
        name="search"
        id="search"
        style={{
          backgroundColor: "transparent",
          border: "none",
          width: "250px",
          fontSize:"13px"
          // fontWeight: "200",
        }}
        placeholder="Search for products brands,categories..."
      />
      {iconCam == true ? <FiCamera style={iconStyle} />:""}
      {iconMic == true ?<FiMic style={iconStyle}/> : ""}
    </div>
  );
};

export default SearchBar;
