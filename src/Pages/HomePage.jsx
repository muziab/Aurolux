import React from "react";
import EditedCarousel from "../Components/EditedCarousel";
import ProductGrid from "../Components/ProductGrid";
import { FaFoursquare } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import PrimaryBtn from "../ui/reusable/PrimaryBtn";

export default function HomePage({ showcase }) {
  let catDetails = [
    {
      id: new Date(),
      src: "/public/img/995506693224450395.png",
      category: "Shoes",
      amount: "45,000+ items",
    },
    {
      id: new Date(),
      src: "/public/img/headset1.png",
      category: "Gadget",
      amount: "2,000+ items ",
    },
    {
      id: new Date(),
      src: "/public/img/Toobaa is a designer, manufacturer and online….png",
      category: "Jalab",
      amount: "43,000 items",
    },
    {
      id: new Date(),
      src: "/public/img/jeans4.png",
      category: "Jeans",
      amount: "2,000 items",
    },
    {
      id: new Date(),
      src: "/public/img/SHEIN.png",
      category: "Japanese",
      amount: "14,235 items",
    },
  ];
  return (
    <section className="min-h-screen">
      <EditedCarousel />
      <section className="h-100 flex items-center justify-center flex-col gap-5">
        <div>
          <h1
            className="text-white text-2xl font-bold"
            style={{ fontFamily: "quicksand" }}
          >
            CATEGORIES
          </h1>
        </div>
        <div className="flex justify-center p-4 gap-5 w-full overflow-hidden items-center">
          <div className="carouse  flex w-screen gap-10">
            {catDetails.map((cat) => (
              <div className="text-white flex flex-col items-center justify-center leading-tight">
                <div className="bg-neutral-900 h-23 p-2 object-contain flex justify-center items-center w-23 mb-2 rounded-full">
                  <img src={cat.src} alt="" className="h-full" />
                </div>
                <b className="text-[14px]  text-nowrap max-sm:text-[12px]">
                  {cat.category}
                </b>
                <p className="text-neutral-600 text-xs">{cat.amount}</p>
              </div>
            ))}
          </div>
          <div className="carouse  flex w-[95vw] gap-5">
            {catDetails.map((cat) => (
              <div className="text-white flex flex-col items-center justify-center leading-tight">
                <div className="bg-neutral-900 h-23 p-2 object-contain flex justify-center items-center w-23 mb-2 rounded-full">
                  <img src={cat.src} alt="" className="h-full" />
                </div>
                <b className="text-[14px]  text-nowrap max-sm:text-[12px]">
                  {cat.category}
                </b>
                <p className="text-neutral-600 text-xs">{cat.amount}</p>
              </div>
            ))}
          </div>
          <div className="carouse  flex w-screen gap-5">
            {catDetails.map((cat) => (
              <div className="text-white flex flex-col items-center justify-center leading-tight">
                <div className="bg-neutral-900 h-23 p-2 object-contain flex justify-center items-center w-23 mb-2 rounded-full">
                  <img src={cat.src} alt="" className="h-full" />
                </div>
                <b className="text-[14px]  text-nowrap max-sm:text-[12px]">
                  {cat.category}
                </b>
                <p className="text-neutral-600 text-xs">{cat.amount}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <div className="flex flex-col py-4">
        <div className="flex justify-center p-4 px-10">
          <h1
            className=" text-white text-2xl font-bold"
            style={{ fontFamily: "quicksand" }}
          >
            OUR PRODUCTS
          </h1>
        </div>
        <div className="overflow-hidden flex items-center justify-center">
          <div className="carouse">
            <ProductGrid
              productsData={showcase}
              additonalStyle={{
                display: "flex",
                flexWrap: "noWrap",
                overflow: "auto",
                width: "fit-content",
              }}
            />
          </div>
          <div className="carouse">
            <ProductGrid
              productsData={showcase}
              additonalStyle={{
                display: "flex",
                flexWrap: "noWrap",
                overflow: "auto",
                width: "fit-content",
              }}
            />
          </div>
          <div className="carouse">
            <ProductGrid
              productsData={showcase}
              additonalStyle={{
                display: "flex",
                flexWrap: "noWrap",
                overflow: "auto",
                width: "fit-content",
              }}
            />
          </div>
        </div>
        <Link className="flex place-self-end w-fit mr-20 my-2" to={"/market"}>
          <PrimaryBtn FunctionDesc={"Browse Products →"} />
        </Link>
      </div>
    </section>
  );
}
