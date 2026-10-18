// src/components/Carousel.jsx
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import mountain from "../../public/images/Shop_items/jeans.jpg";
import mountain2 from "../../public/images/Shop_items/logan-weaver-lgnwvr-BCWaY_rNe6M-unsplash.jpg";
import mountain3 from "../../public/images/Shop_items/Picture1.png";
import Features from "../ui/reusable/Features";
import UniversalBtn from "../ui/reusable/UniversalBtn";
import PrimaryBtn from "../ui/reusable/PrimaryBtn";
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: mountain,
      title: "The World's Finest Products.",
      addition: "Curated For You",
      subtitle: "Get the best out of shopping",
      topLayerText: "New Adventure",
      link: "www.facebook.com",
    },
    {
      id: 2,
      image: mountain2,
      title: "Proffessional Wears",
      subtitle: "Arena for Unbeatable Office Wears",
      topLayerText: "Summer Special",
      link: "www.youtube.com",
    },
    {
      id: 3,
      image: mountain3,
      title: "Well Sectioned Wear Sort",
      subtitle: "Get the best out of shopping",
      topLayerText: "Eco Tour",
      link: "www.twitter.com",
    },
    {
      id: 4,
      image: mountain,
      title: "The World's Finest Products.",
      addition: "Curated For You",
      subtitle: "Get the best out of shopping",
      topLayerText: "New Adventure",
      link: "www.facebook.com",
    },
    {
      id: 5,
      image: mountain2,
      title: "Proffessional Wears",
      subtitle: "Arena for Unbeatable Office Wears",
      topLayerText: "Summer Special",
      link: "www.youtube.com",
    },
    {
      id: 6,
      image: mountain3,
      title: "Well Sectioned Wear Sort",
      subtitle: "Get the best out of shopping",
      topLayerText: "Eco Tour",
      link: "www.twitter.com",
    },
    {
      id: 7,
      image: mountain,
      title: "The World's Finest Products.",
      addition: "Curated For You",
      subtitle: "Get the best out of shopping",
      topLayerText: "New Adventure",
      link: "www.facebook.com",
    },
    {
      id: 8,
      image: mountain2,
      title: "Proffessional Wears",
      subtitle: "Arena for Unbeatable Office Wears",
      topLayerText: "Summer Special",
      link: "www.youtube.com",
    },
    {
      id: 9,
      image: mountain3,
      title: "Well Sectioned Wear Sort",
      subtitle: "Get the best out of shopping",
      topLayerText: "Eco Tour",
      link: "www.twitter.com",
    },
    {
      id: 10,
      image: mountain,
      title: "The World's Finest Products.",
      addition: "Curated For You",
      subtitle: "Get the best out of shopping",
      topLayerText: "New Adventure",
      link: "www.facebook.com",
    },
    {
      id: 11,
      image: mountain2,
      title: "Proffessional Wears",
      subtitle: "Arena for Unbeatable Office Wears",
      topLayerText: "Summer Special",
      link: "www.youtube.com",
    },
    {
      id: 12,
      image: mountain3,
      title: "Well Sectioned Wear Sort",
      subtitle: "Get the best out of shopping",
      topLayerText: "Eco Tour",
      link: "www.twitter.com",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Auto slide (optional)
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className="relative w-full my-4  min-h-100 h-[70vh] overflow-hidden">
      {/* Slides */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover  bg-center  bg-no-repeat"
              style={{
                backgroundImage: `url(${slide.image})`,
                filter: "brightness(0.4)",
              }}
            />

            {/* Overlay for better text readability */}
            <div className="absolute inset-0 bg-gray-60 bg-opacity-40" />

            {/* Top Layer with Light Gray Background */}
            {/* <div className="absolute top-0 left-0 right-0 bg-gray-200 bg-opacity-90 py-3 px-6">
              <div className="container mx-auto">
                <span className="text-gray-800 font-semibold text-lg">
                  {slide.topLayerText}
                </span>
              </div>
            </div> */}

            {/* Content */}
            <div className="relative z-10  flex max-sm:w-full w-150 pl-20 max-sm:pl-7 float-left items-center h-full text-white">
              <div className="max-w-4xl mx-auto w-full">
                <h1
                  className=" md:text-6xl text-3xl mb-6 animate-fade-in-up"
                  style={{ fontFamily: "sans" }}
                >
                  {slide.title}
                  <span
                    style={{ fontFamily: "sans" }}
                    className="text-yellow-600"
                  >
                    {slide.addition}
                  </span>
                </h1>
                <h3 className="text-md md:text-xl mb-8 animate-fade-in-up delay-300">
                  {slide.subtitle}
                </h3>
                <div className="flex gap-4 justify-between items-center w-60 sm:w-3/4">
                  <UniversalBtn actionDesc={"Shop From Us"} />
                  <PrimaryBtn additionalStyle={"w-full"} FunctionDesc={"Get In Touch"} />
                </div>

                {/* <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 animate-fade-in-up delay-500">
                  {slide.link}
                </button> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      {/* <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm"
      >
        <FaChevronLeft className="w-5 h-5 text-black" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-3 rounded-full transition-all duration-300 z-20 backdrop-blur-sm"
      >
        <FaChevronRight className="w-5 h-5 text-black" />
      </button> */}

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-500 ${
              index === currentSlide
                ? "bg-gray-500 w-10"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
