import React from "react";
import "../../Components/Card.css"
import { BiRecycle } from "react-icons/bi";
import { BsShieldCheck } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { FaDelicious, FaProductHunt } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa6";
import { GiDeliveryDrone } from "react-icons/gi";
import { MdPayment } from "react-icons/md";

let features = [
  {
    id: 1,
    title: "100% Authentic",
    desc: "Genuine Products",
    icon: <BsShieldCheck />,
  },
  {
    id: 2,
    title: "Secure Payments",
    desc: "Multiple Options",
    icon: <MdPayment />,
  },
  {
    id: 3,
    title: "Easy Returns",
    desc: "30 Days Return Policy",
    icon: <BiRecycle />,
  },
  {
    id: 4,
    title: "Fast Delivery",
    desc: "Nationwild & Local",
    icon: <CiDeliveryTruck />,
  },
];

export default function Features() {
  return (
    <div
      className="flex gap-5 min-w-180 h-20 max-sm:scale-75 items-center bg-[#0e0e0e] rounded-sm w-fit"
      style={{ padding: "20px" }}
    >
      {features.filter((_)=> _.id <=3).map((content) => (
        <>
          <Unit key={content.id} title={content.title} desc={content.desc} icon={content.icon} />
          <div key={content.id + "div"} className="h-7 bg-neutral-600 w-[0.5px]"></div>
        </>
      ))}
      
      <Unit
        title={"Fast Delivery"}
        desc={"Nationwide & Local"}
        icon={<CiDeliveryTruck className="text-3xl" />}
      />
      {/*<div className="h-7 bg-neutral-600 w-[0.5px]"></div>
      <Unit title={"Secure Payments"} desc={"Multiple Options"} icon={<MdPayment className="text-xl"/>}/>*/}
    </div>
  );
}

export function Unit({ title, desc, icon }) {
  return (
    <div className="flex items-center gap-2 feature-carousel" >
      <div className="text-yellow-500 text-2xl">{icon}</div>
      <div>
        <b className="text-[12px]">{title}</b>
        <p className="text-[11px]">{desc}</p>
      </div>
    </div>
  );
}
