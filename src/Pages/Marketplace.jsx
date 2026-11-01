import React from "react";
import PageTitle from "../ui/reusable/PageTitle";
import ProductGrid from "../Components/ProductGrid";
import FilterSection from "../Components/FilterSection";
import Carousel from "../Components/Carousel";
import MyCarousel from "../Components/MyCarousel";
import FullProductDescription from "../Components/FullProductDescription";

export default function Marketplace({
  idd,
  handleCartedItems,
  handleAddWish,
  productsData,
  handleRemoveWish,
  onproductCollapse,
  describedProduct,
  productCollapse,
  handleShowProduct
}) {
  return (
    <>
      <div className="flex max-w-screen">
        <FilterSection />
        <div className="w-full">
          <PageTitle title={"Marketplace"} />
          <MyCarousel/>
          {/* <Carousel /> */}
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
        <FullProductDescription
        onAddWish={handleAddWish}
        onAddToCart={handleCartedItems}
        toggleCollapse={() => handleShowProduct()}
        collapse={productCollapse}
        product={describedProduct}
        check={(id) => handleCartedItems(id)}
        // collapse={productCollapse}
      />
      </div>
    </>
  );
}
