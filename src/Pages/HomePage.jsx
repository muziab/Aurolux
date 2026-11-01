import React from "react";
import EditedCarousel from "../Components/EditedCarousel";
import ProductGrid from "../Components/ProductGrid";
import { FaFoursquare } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { Link } from "react-router-dom";
import PrimaryBtn from "../ui/reusable/PrimaryBtn";
import MyCarousel from "../Components/MyCarousel";
import ProductImage from "../ui/reusable/ProductImage";
import data from "../ui/items.json";

let test = data.filter((item) => item.id.endsWith("-1"));
export default function HomePage({ showcase }) {
  let catDetails = [
    {
      id: new Date(),
      src: "/images/995506693224450395.png",
      category: "Shoes",
      amount: "45,000+ items",
    },
    {
      id: new Date(),
      src: "/images/headset1.png",
      category: "Gadget",
      amount: "2,000+ items ",
    },
    {
      id: new Date(),
      src: "/images/Toobaa is a designer, manufacturer and online….png",
      category: "Jalab",
      amount: "43,000 items",
    },
    {
      id: new Date(),
      src: "/images/jeans4.png",
      category: "Jeans",
      amount: "2,000 items",
    },
    {
      id: new Date(),
      src: "/images/SHEIN.png",
      category: "Japanese",
      amount: "14,235 items",
    },
  ];
  // .map((item) => <ProductImage imageSource={item.img} />);
  console.log(test);
  return (
    <section className="min-h-screen">
      {/* <EditedCarousel /> */}
      <MyCarousel />
      <section className="h-150 flex overflow-hidden items-center justify-evenly flex-col ">
        <div>
          <h1
            className="text-white text-2xl font-bold"
            style={{ fontFamily: "quicksand" }}
          >
            CATEGORIES
          </h1>
        </div>
        <div className="flex gap-3 ">
          {test.map((item) => (
            <CatCard key={item.id} item={item} />
          ))}
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
export function CatCard({ item }) {
  return (
    <div className="h-75 cat hover:translate-0 relative overflow-hidden aspect-3/4">
      <ProductImage
        imageSource={item.img}
        additionalStyle={"h-full aspect-3/4"}
      />
      <div
        className="absolute h-full w-full inset-0 "
        style={{ backgroundImage: "linear-gradient(to top, black, transparent)" }}
      ></div>
      <b className="text-white font-light absolute bottom-5 left-5">{item.category}</b>
    </div>
  );
}
