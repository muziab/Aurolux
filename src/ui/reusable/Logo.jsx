import React from "react";
import logo from "/images/Shop_items_noBgImg_Alux.png";

const Logo = () => {
  return (
    <div
    className="max-sm:scale-75"
      style={{
        fontSize: "12px",
        display: "flex",
        gap: "10px",
        alignItems: "center",
      }}
    >
      <img
        src={logo}
        style={{ filter: "brightness(1.25)" }}
        className="h-10"
        alt=""
      />
      <div
        className=""
        style={{
          color: "var(--color-gold-primary)",
        }} 
      >
        <div className="logoTxt">
          <h1
            style={{ letterSpacing: "4px", fontFamily: "initial" }}
            className="text-xl"
          >
            AURO-LUX
          </h1>
          <div className="flex gap-0">
            <small className="text-[7px]" style={{ letterSpacing: "2px" }}>LUXURY.</small>
            <small className="text-[7px]" style={{ letterSpacing: "2px" }}>GENUINE.</small>
            <small className="text-[7px]" style={{ letterSpacing: "2px" }}>TRUSTED.</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Logo;
