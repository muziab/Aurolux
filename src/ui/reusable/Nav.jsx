import React from "react";
// import "../Card.css"

const Nav = ({ linkTxt }) => {
  return (
    <a
      href="#"
      className="text-white "
      style={{padding:"2px 7px"}}
    >
      {linkTxt}
    </a>
  );
};

export default Nav;
