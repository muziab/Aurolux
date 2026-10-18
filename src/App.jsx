import React, { useState } from "react";
import Header from "./Components/Header";
import itemsApi from "./ui/items.json";
import "./App.css";
import "./Root.css";
import Marketplace from "./Pages/Marketplace";
import CartSection from "./Components/CartSection";
import Message from "./ui/reusable/Message";
import { Route, Routes } from "react-router-dom";
import WishListPage from "./Pages/WishListPage";
import HomePage from "./Pages/HomePage";
import FullProductDescription from "./Components/FullProductDescription";

const App = () => {
  const [collapse, SetCollapse] = useState(false);
  const [productCollapse, SetProductCollapse] = useState(false);
  const [wishlist, SetWishlist] = useState([]);
  const [describedProduct, SetDescribedProduct] = useState([]);
  function handleShowProduct(id) {
    SetProductCollapse(!productCollapse);
    SetDescribedProduct(itemsApi.filter((item) => item.id == id));
  } // const [cartItems, SetCartItems] = useState(0);

  const [carted, SetCarted] = useState([]);
  localStorage.setItem("cart", carted);
  let cart = localStorage.getItem(carted);
  console.log(cart);

  const cartItems = carted.length;
  // let message

  function toggleAddToWishlist(id) {
    SetWishlist(
      [...wishlist].concat(itemsApi.filter((product) => product.id == id)),
    );
    console.log(id);
    console.log(wishlist.map((item) => item.id) == id);
    alert("Added 1 Product To Wishlist")
    console.log(wishlist);
  }
  function SubtractWishlist(id) {
    alert("Removed 1 Product from Wishlist")
    SetWishlist(wishlist.filter((item) => item.id !== id));
    // console.log(e.target);
  }
  // let idd
  function AddToCart(id) {
    alert("Added 1 Product To Cart")
    SetCarted(
      [...carted].concat(itemsApi.filter((product) => product.id == id)),
    );
    console.log(cartItems + " cart");
    console.log(cartItems);
  }
  function handleRemoveCartItem(id) {
    SetCarted(carted.filter((item) => item.id !== id));
  }
  function handleMoveWish(id) {
    SetCarted([...carted].concat(id));
  }
  function toggleCollapse() {
    SetCollapse(!collapse);
  }
  
  return (
    <div className="" style={{ backgroundColor: "black" }}>
      <Header
        openCart={toggleCollapse}
        handleWish={toggleAddToWishlist}
        handleCartedItems={cartItems}
        wishes={wishlist.length}
      />
      <Routes>
        <Route
          path="/market"
          element={
            <Marketplace
              onproductCollapse={handleShowProduct}
              productsData={itemsApi}
              handleCartedItems={AddToCart}
              handleAddWish={toggleAddToWishlist}
              handleRemoveWish={SubtractWishlist}
              // idd={idd}
            />
          }
        />
        <Route
          path="/wishlist"
          element={
            <WishListPage
              handleCartedItems={AddToCart}
              handleRemoveWish={SubtractWishlist}
              MoveWish={(id) => handleMoveWish(id)}
              wishlistedList={wishlist}
            />
          }
        />
        <Route
          path="/"
          element={
            <HomePage showcase={itemsApi.filter((m) => m.id.endsWith("-1"))} />
          }
          />
      </Routes>

      <FullProductDescription
          onAddWish={toggleAddToWishlist}
      onAddToCart={AddToCart}
        toggleCollapse={() => handleShowProduct()}
        collapse={productCollapse}
        product={describedProduct}
        // collapse={productCollapse}
      />

      <CartSection
        onRemoveCartItem={(id) => handleRemoveCartItem(id)}
        products={carted}
        toggleCollapse={toggleCollapse}
        collapse={collapse}
      />
      {/* <ProductGrid/> */}
      {/* <Test img={img}/> */}
    </div>
  );
};

export default App;
