import ProductCard from "./ProductCard";
import "./ProductGrid.css";
import { Link } from "react-router-dom";
const ProductGrid = ({
  productsData,
  handleAddWish,
  handleRemoveWish,
  handleCartedItems,
  wishable,
  onproductCollapse,
  additonalStyle,
}) => {
  // let re = menuList.map((pr) => pr.img)

  return (
    <section className="productGrid max-sm:grid max-sm:grid-cols-2" style={additonalStyle}>
      {/* {menuList.map((bg) => console.log(bg.category.length))} */}
      {productsData.map((productInfo) => (
        <ProductCard
          onproductCollapse={() => onproductCollapse(productInfo.id)}
          wish={wishable}
          imageSource={productInfo.img}
          product={productInfo}
          handleCartedItems={() => handleCartedItems(productInfo.id)}
          handleAddWish={() => handleAddWish(productInfo.id)}
          handleRemoveWish={() => handleRemoveWish(productInfo.id)}
          key={productInfo.id}
          description={productInfo.title}
          discount={productInfo.discount}
          price={productInfo.price}
          toggleClickState={productInfo.wishlisted}
          cartPresence={true}
        />
      ))}
      {/* {console.log(itemApi.map(pr => pr.wishlisted))} */}
      {/*  */}
    </section>
  );
};

export default ProductGrid;
