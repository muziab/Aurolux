import React from "react";
import ProductCard from "./ProductCard";
import itemApi from "../ui/Items.json";
import "./ProductGrid.css";
import { Link } from "react-router-dom";
// import gymnwear1 from "/images/Shop_items/Premium Cotton T-Shirt – Comfortable Everyday Style.jpg";
// import gymnwear2 from "/images/Shop_items/men wears/Red_Hoodie.jpg";
// import gymnwear3 from "/images/Shop_items/SPU_ YSHHP244105 Style_ casual Color….jpg";
/* Shoes */
// import shoe1 from "/images/Shop_items/men wears/Complete_White_shoe.jpg";
// import shoe2 from "/images/Shop_items/noBgImg/995506693224450395.png";
// import shoe3 from "/images/Shop_items/men wears/street_wear1.jpg";
/* StreetWears */
// import street1 from "/images/Shop_items/Manfinity RebelGame Loose Men's Buffalo Plaid Pattern Drop Shoulder Teddy Coat (Without T-Shirt).jpg";
// import street2 from "/images/Shop_items/men wears/Streetwears.jpg";
// import street3 from "/images/Shop_items/jeans.jpg";
// import completewears1 from "/images/Shop_items/men wears/Comlete_brown.jpg";
// import completewears2 from "/images/Shop_items/men wears/Complete_blue.jpg";
// import completewears3 from "/images/Shop_items/men wears/Complete_white.jpg";
// import completewears4 from "/images/Shop_items/men wears/Complete_White_shoe.jpg";
// import completewears5 from "/images/Shop_items/men wears/Coplete_Black.jpg";
// import completewears6 from "/images/Shop_items/men wears/Complte_bg-brown.jpg";
// import completewears7 from "/images/Shop_items/men wears/Streetwears.jpg";
// import completewears8 from "/images/Shop_items/men wears/street_wear1.jpg";
// import completewears9 from "/images/Shop_items/men wears/Work Outfit Ideas for Winter 2025–2026_ Chic….jpg";
// import completewears10 from "/images/Shop_items/men wears/Men’s Summer Outfit_Casual_Luxury_Men_Fashion.jpg";
// import completewears11 from "/images/Shop_items/men wears/Complete_001.png";
// import dress1 from "/images/Shop_items/Cool dress combo.jpg";
// import dress2 from "/images/Shop_items/New Collection Online_ SHEIN Australia.jpg";
// import dress3 from "/images/Shop_items/2 pièces Femmes Style Casual de Rue Teinture Nouée….jpg";
// import jeans1 from "/images/Shop_items/jeans1.jpg";
// import jeans2 from "/images/Shop_items/jeans2.jpg";
// import jeans3 from "/images/Shop_items/jeans3.jpg";
// import jeans4 from "/images/Shop_items/jeans4.jpg";
// import jeans5 from "/images/Shop_items/jeans2.jpg";
// import shirt1 from "/images/Shop_items/men wears/Men_Polo.png";
// import shirt2 from "/images/Shop_items/Men's Japanese Dragon Print Knitted Long Sleeve Hoodie.jpg";
// import shirt3 from "/images/Shop_items/Camiseta Masculina Estampada StreetWear Camisa Estilosa Moderna.jpg";
// import shirt4 from "/images/Shop_items/noBgImg/premium T shirts manufacture.png";
// import jalab1 from "/images/Shop_items/men wears/Djellaba Homme Musulman – Élégance & Confort….jpg";
// import jalab2 from "/images/Shop_items/men wears/Luxury_Blue_jalabia_for_male.jpg";
// import jalab3 from "/images/Shop_items/men wears/Mens_Grey_Emirati_Thobes_Jubbah_Jubba_Thawb_Kandora_Dishdasha_Jalabiya_Kaftan_Qamis_Mens_Islamic Clothing-Etsy.jpg";
// import jalab4 from "/images/Shop_items/men wears/Shabab Al Yola Men's Tailors _ Buy Traditional….jpg";
// import jalab5 from "/images/Shop_items/men wears/Step into refined style with mens Emirati thobes….jpg";
// import jalab6 from "/images/Shop_items/noBgImg/Premium Italian wool JALABIYA__Tailored….png";
// import jalab7 from "/images/Shop_items/men wears/Toobaa is a designer, manufacturer and online….jpg";
// import jalab8 from "/images/Shop_items/noBgImg/There are different jalamia style for men out….png";
// import head from "/images/Shop_items/noBgImg/premium T shirts manufacture.png";
// import {streetImg} from "assets/Shop_stock/Shop_items/jeans.jpg"

// let menuList = [
//   {
//     id: "complete-1",
//     category: "Completewars",
//     title: "Brushed Plaid Overshirt",
//     img: head,
//     price: "400,000",
//     org_price: "500,000",
//     discount: "-20%",
//     description: "Utility-inspired streetwear set with premium finishes",
//   },
//   {
//     id: "complete-1",
//     category: "Completewars",
//     title: "Brushed Plaid Overshirt",
//     img: completewears1,
//     price: "400,000",
//     org_price: "500,000",
//     discount: "-20%",
//     description: "Utility-inspired streetwear set with premium finishes",
//   },
//   {
//     id: "complete-2",
//     category: "Completewars",
//     title: "Navy Utility Street Set",
//     img: completewears2,
//     price: "400,000",
//     org_price: "500,000",
//     discount: "-20%",
//     description: "Smart layered silhouette for everyday style",
//   },
//   {
//     id: "complete-3",
//     category: "Completewars",
//     title: "Crisp White Layered Set",
//     img: completewears3,
//     price: "400,000",
//     org_price: "500,000",
//     discount: "-20%",
//     description: "Modern monochrome outfit with clean tailoring",
//   },
//   {
//     id: "complete-4",
//     category: "Completewars",
//     title: "White Minimalist Ensemble",
//     img: completewears4,
//     price: "400,000",
//     org_price: "500,000",
//     discount: "-20%",
//     description: "Minimal polished look with premium materials",
//   },
//   {
//     id: "complete-5",
//     category: "Completewars",
//     title: "Black Streetwear Capsule",
//     img: completewears5,
//     price: "400,000",
//     org_price: "500,000",
//     discount: "-20%",
//     description: "Bold black layered statement outfit",
//   },
//   {
//     id: "complete-6",
//     category: "Completewars",
//     title: "Brown Workwear Suit",
//     img: completewears6,
//     price: "400,000",
//     org_price: "500,000",
//     discount: "-20%",
//     description: "Earthy tones with upscale workwear styling",
//   },
//   {
//     id: "complete-7",
//     category: "Completewars",
//     title: "Urban Streetwear Jacket",
//     img: completewears7,
//     price: "400,000",
//     org_price: "500,000",
//     discount: "-20%",
//     description: "Effortless street-ready layering piece",
//   },
//   {
//     id: "complete-8",
//     category: "Completewars",
//     title: "Grey Streetwear Outfit",
//     img: completewears8,
//     price: "400,000",
//     org_price: "500,000",
//     discount: "-20%",
//     description: "Relaxed fit with street-ready details",
//   },
//   {
//     id: "complete-9",
//     category: "Completewars",
//     title: "Winter Work Outfit",
//     img: completewears9,
//     price: "400,000",
//     org_price: "500,000",
//     discount: "-20%",
//     description: "Warm layered set for winter styling",
//   },
//   {
//     id: "complete-10",
//     category: "Completewars",
//     title: "Summer Casual Luxury",
//     img: completewears10,
//     price: "400,000",
//     org_price: "500,000",
//     discount: "-20%",
//     description: "Lightweight summer complete look",
//   },
//   {
//     id: "complete-11",
//     category: "Completewars",
//     title: "Black and White Set",
//     img: completewears11,
//     price: "400,000",
//     org_price: "500,000",
//     discount: "-20%",
//     description: "A sharp contrast outfit with premium texture",
//   },
//   {
//     id: "jeans-1",
//     category: "Jeans",
//     title: "Classic Dark Jeans",
//     img: jeans1,
//     price: "5,000",
//     org_price: "4,000",
//     discount: "-40%",
//     description: "Premium denim with comfortable fit",
//   },
//   {
//     id: "jeans-2",
//     category: "Jeans",
//     title: "Light Wash Denim",
//     img: jeans2,
//     price: "5,000",
//     org_price: "4,000",
//     discount: "-40%",
//     description: "Casual light wash jeans for everyday wear",
//   },
//   {
//     id: "jeans-3",
//     category: "Jeans",
//     title: "Straight Leg Jeans",
//     img: jeans3,
//     price: "5,000",
//     org_price: "4,000",
//     discount: "-40%",
//     description: "Modern straight cut with relaxed comfort",
//   },
//   {
//     id: "jeans-4",
//     category: "Jeans",
//     title: "Black Denim Pants",
//     img: jeans4,
//     price: "5,000",
//     org_price: "4,000",
//     discount: "-40%",
//     description: "Sleek black denim for versatile styling",
//   },
//   {
//     id: "jeans-5",
//     category: "Jeans",
//     title: "Relaxed Blue Jeans",
//     img: jeans5,
//     price: "5,000",
//     org_price: "4,000",
//     discount: "-40%",
//     description: "Comfortable fit with a classic wash",
//   },
//   {
//     id: "jalab-1",
//     category: "Jalab",
//     title: "Elegant Muslim Djellaba",
//     img: jalab1,
//     price: "400,000",
//     org_price: "550,000",
//     discount: "-30%",
//     description: "Traditional Jalabiya with premium fabric",
//   },
//   {
//     id: "jalab-2",
//     category: "Jalab",
//     title: "Luxury Blue Jalabia",
//     img: jalab2,
//     price: "400,000",
//     org_price: "550,000",
//     discount: "-30%",
//     description: "Bold blue Jalabia for a refined look",
//   },
//   {
//     id: "jalab-3",
//     category: "Jalab",
//     title: "Grey Emirati Thobe",
//     img: jalab3,
//     price: "400,000",
//     org_price: "550,000",
//     discount: "-30%",
//     description: "Sophisticated grey thobe with elegant cut",
//   },
//   {
//     id: "jalab-4",
//     category: "Jalab",
//     title: "Tailored Shabab Al Yola",
//     img: jalab4,
//     price: "400,000",
//     org_price: "550,000",
//     discount: "-30%",
//     description: "Traditional style designed for modern wear",
//   },
//   {
//     id: "jalab-5",
//     category: "Jalab",
//     title: "Premium Emirati Thobe",
//     img: jalab5,
//     price: "400,000",
//     org_price: "550,000",
//     discount: "-30%",
//     description: "Classic silhouette with premium tailoring",
//   },
//   {
//     id: "jalab-6",
//     category: "Jalab",
//     title: "Italian Wool Jalabiya",
//     img: jalab6,
//     price: "400,000",
//     org_price: "550,000",
//     discount: "-30%",
//     description: "Luxurious wool Jalabiya with sharp detailing",
//   },
//   {
//     id: "jalab-7",
//     category: "Jalab",
//     title: "Designer Toobaa Jalabia",
//     img: jalab7,
//     price: "400,000",
//     org_price: "550,000",
//     discount: "-30%",
//     description: "Stylish designer Jalabia with refined accents",
//   },
//   {
//     id: "jalab-8",
//     category: "Jalab",
//     title: "Modern Jalamia Style",
//     img: jalab8,
//     price: "400,000",
//     org_price: "550,000",
//     discount: "-30%",
//     description: "Contemporary Jalamia with timeless appeal",
//   },
//   {
//     id: "shirt-1",
//     category: "Shirt",
//     title: "Golden Logo Polo Shirt",
//     img: shirt1,
//     price: "55,000",
//     org_price: "70,000",
//     discount: "-20%",
//     description: "Premium polo shirt with soft stretch fabric.",
//   },
//   {
//     id: "shirt-2",
//     category: "Shirt",
//     title: "Black Dragon Hoodie",
//     img: shirt2,
//     price: "65,000",
//     org_price: "85,000",
//     discount: "-25%",
//     description: "Bold dragon print hoodie for edgy styling.",
//   },
//   {
//     id: "shirt-3",
//     category: "Shirt",
//     title: "Streetwear Graphic Tee",
//     img: shirt3,
//     price: "35,000",
//     org_price: "50,000",
//     discount: "-30%",
//     description: "Modern print tee made for daily comfort.",
//   },
//   {
//     id: "shirt-4",
//     category: "Shirt",
//     title: "premium T shirts manufacture.png",
//     img: shirt4,
//     price: "35,000",
//     org_price: "50,000",
//     discount: "-30%",
//     description: "Modern print tee made for daily comfort.",
//   },
//   {
//     id: "dress-1",
//     category: "Dress",
//     title: "Elegant Evening Dress Set",
//     img: dress1,
//     price: "120,000",
//     org_price: "160,000",
//     discount: "-25%",
//     description: "Refined outfit for special nights.",
//   },
//   {
//     id: "dress-2",
//     category: "Dress",
//     title: "Summer Slip Dress",
//     img: dress2,
//     price: "80,000",
//     org_price: "100,000",
//     discount: "-20%",
//     description: "Light and breezy summer dress.",
//   },
//   {
//     id: "dress-3",
//     category: "Dress",
//     title: "Urban Tie-Dye Dress",
//     img: dress3,
//     price: "70,000",
//     org_price: "95,000",
//     discount: "-26%",
//     description: "Casual street dress with bold tie-dye.",
//   },
//   {
//     id: "gym-1",
//     category: "Gymwears",
//     title: "Performance Training Tee",
//     img: gymnwear1,
//     price: "25,000",
//     org_price: "35,000",
//     discount: "-30%",
//     description: "Breathable training tee for workouts.",
//   },
//   {
//     id: "gym-2",
//     category: "Gymwears",
//     title: "Athletic Track Jacket",
//     img: gymnwear2,
//     price: "60,000",
//     org_price: "80,000",
//     discount: "-25%",
//     description: "Warm hoodie to complete your activewear.",
//   },
//   {
//     id: "gym-3",
//     category: "Gymwears",
//     title: "Flex Fit Sports Tee",
//     img: gymnwear3,
//     price: "28,000",
//     org_price: "40,000",
//     discount: "-30%",
//     description: "Stretch tee for gym and street wear.",
//   },
//   {
//     id: "shoes-1",
//     category: "Shoes",
//     title: "Crisp White Sneakers",
//     img: shoe1,
//     price: "75,000",
//     org_price: "95,000",
//     discount: "-21%",
//     description: "Minimal sneakers with premium comfort.",
//   },
//   {
//     id: "shoes-2",
//     category: "Shoes",
//     title: "Brown Leather Boots",
//     img: shoe2,
//     price: "98,000",
//     org_price: "130,000",
//     discount: "-25%",
//     description: "Rugged boots built for daily wear.",
//   },
//   {
//     id: "shoes-3",
//     category: "Shoes",
//     title: "Street Runner Sneakers",
//     img: shoe3,
//     price: "68,000",
//     org_price: "90,000",
//     discount: "-24%",
//     description: "Lightweight design for city moves.",
//   },
//   {
//     id: "street-1",
//     category: "StreetWears",
//     title: "Bold Plaid Coat",
//     img: street1,
//     price: "120,000",
//     org_price: "150,000",
//     discount: "-20%",
//     description: "Statement coat for cool-weather layers.",
//   },
//   {
//     id: "street-2",
//     category: "StreetWears",
//     title: "Urban Streetwear Set",
//     img: street2,
//     price: "80,000",
//     org_price: "100,000",
//     discount: "-20%",
//     description: "Effortless streetwear outfit.",
//   },
//   {
//     id: "street-3",
//     category: "StreetWears",
//     title: "Relaxed Fit Windbreaker",
//     img: street3,
//     price: "55,000",
//     org_price: "70,000",
//     discount: "-21%",
//     description: "Comfort-first windbreaker for every day.",
//   },
// ];
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
