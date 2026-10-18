import React from "react";
import PageTitle from "../ui/reusable/PageTitle";
import ProductGrid from "../Components/ProductGrid";
import FilterSection from "../Components/FilterSection";
import Carousel from "../Components/Carousel";

export default function Marketplace({
  idd,
  handleCartedItems,
  handleAddWish,
  productsData,
  handleRemoveWish,
  onproductCollapse,
}) {
  return (
    <>
      <div className="flex max-w-screen">
        <FilterSection />
        <div className="w-full">
          <PageTitle title={"Marketplace"} />
          <Carousel />
          <ProductGrid
            handleAddWish={(id) => handleAddWish(id)}
            idd={idd}
            productsData={productsData}
            onproductCollapse={(id) => onproductCollapse(id)}
            // handleCartedItems={() => handleCartedItems}
            handleCartedItems={(id) => handleCartedItems(id)}
            handleRemoveWish={(id) => handleRemoveWish(id)}
          />
        </div>
      </div>
    </>
  );
}
