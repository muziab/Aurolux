import React from "react";
import { FaCheck } from "react-icons/fa";
import "../../Components/Card.css"
export default function Message({ destination }) {
  return (
    <div className="text-white fixed z-30 top-5 right-[40%] w-70 flex p-3 gap-6 items-center font-light border-t-3 border-b-3 shadow-neutral-700 backdrop-blur-3xl bg-transparent shadow-lg rounded-tl-lg rounded-br-lg border-yellow-500 animate">
      <FaCheck />
      <b>Added 1 item to {destination}</b>
    </div>
  );
}
