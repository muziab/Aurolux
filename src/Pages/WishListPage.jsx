import React from "react";
import FilterSection from "../Components/FilterSection";
import ProductCard from "../Components/ProductCard";
import { FiHeart, FiShare } from "react-icons/fi";
import { Link } from "react-router-dom";
import ProductGrid from "../Components/ProductGrid";
import { FaShare } from "react-icons/fa";
import PrimaryBtn from "../ui/reusable/PrimaryBtn";
import BlankSection from "../ui/reusable/BlankSection";

export default function WishListPage({
  wishlistedList,
  MoveWish,
  handleRemoveWish,
  handleCartedItems,
}) {
  function handleWishCart() {
    MoveWish(wishlistedList.map((product) => product));
    console.log(wishlistedList.map((product) => product.id));
  }
  return (
    <div className="bg-neutral-950 min-h-screen h-fit flex text-white">
      <FilterSection />
      <main className="p-5 w-full flex flex-col gap-2">
        <div className="bg-[#0f0f0f65] border-0.5 sticky z-10 top-0 p-4 backdrop-blur-2xl rounded-md w-full gap-y-5 items-center flex justify-between max-sm:flex-col">
          <h1 className="font-bold text-2xl flex items-center gap-3">
            My Wishlist
            <span className="text-neutral-300  font-light text-lg">
              ({wishlistedList.length} items)
            </span>
          </h1>
          <div className="flex gap-5 ">
            <PrimaryBtn
              FunctionDesc={"Move All To Cart"}
              handleFunction={handleWishCart}
            />
            <PrimaryBtn
              icon={<FiShare />}
              FunctionDesc={" Share Webloit"}
              // handleFunction={handleWishCart}
            />
          </div>
        </div>
        {wishlistedList.length > 0 ? (
          <div>
            <ProductGrid
              productsData={wishlistedList}
              handleCartedItems={(id) => handleCartedItems(id)}
              handleRemoveWish={(id) => handleRemoveWish(id)}
              wishable={true}
            />
            <div className="bg-[#0f0f0f] max-sm:scale-90 border-0.5 border-yellow-500 text-lg mt-10 rounded-2xl flex flex-col items-center justify-center h-40 text-center">
              <Link
                to={"/market"}
                className="text-[#a2a2a2] hover:underline-offset-5 decoration-1 underline-offset-3 underline"
              >
                Continue Shopping
              </Link>
            </div>
          </div>
        ) : (

          // Abscense of Wishlisted items
          <BlankSection icon={<FiHeart />} />
        )}
      </main>
      {console.log(wishlistedList)}
      {console.log(wishlistedList.length)}
    </div>
  );
}
