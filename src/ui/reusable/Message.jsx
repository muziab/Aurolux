import React from "react";
import { FaCheck } from "react-icons/fa";
import "../../Components/Card.css";
export default function Message({ destination }) {
  return (
    <div
      className="text-white z-90 fixed text-xs right-0 bottom-5 w-60
    p-3 h-15 rounded-l items-center border-l-3 border-yellow-600 gap-2 flex bg-neutral-900 backdrop-blur-lg font-sans"
    >
      <FaCheck className="text-yellow-500 text-lg" />
      <b>{destination} </b>
    </div>
  );
}
