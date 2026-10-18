// src/components/Carousel.jsx
import { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const mountain = "/images/jeans.jpg";
const mountain2 = "/images/logan-weaver-lgnwvr-BCWaY_rNe6M-unsplash.jpg";
const mountain3 = "/images/Picture1.png";
const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      image: mountain,
      title: "New Arrivals",
      subtitle: "UnHat the stress of Wear Search",
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
      subtitle: "Immerse yourself in nature",
      topLayerText: "Eco Tour",
      link: "www.twitter.com",
    },
    {
      id: 4,
      image: mountain,
      title: "New Arrivals",
      subtitle: "UnHat the stress of Wear Search",
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
      subtitle: "Immerse yourself in nature",
      topLayerText: "Eco Tour",
      link: "www.twitter.com",
    },
    {
      id: 7,
      image: mountain,
      title: "New Arrivals",
      subtitle: "UnHat the stress of Wear Search",
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
      subtitle: "Immerse yourself in nature",
      topLayerText: "Eco Tour",
      link: "www.twitter.com",
    },
    {
      id: 10,
      image: mountain,
      title: "New Arrivals",
      subtitle: "UnHat the stress of Wear Search",
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
      subtitle: "Immerse yourself in nature",
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
    <div className="relative w-full my-4 min-h-100 h-[70vh] overflow-hidden">
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
            <div className="relative z-10 flex items-center justify-center h-full text-white">
              <div className="text-center max-w-4xl mx-auto px-6">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                  {slide.title}
                </h1>
                <h3 className="text-lg md:text-xl mb-8 animate-fade-in-up delay-300">
                  {slide.subtitle}
                </h3>
                <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 animate-fade-in-up delay-500">
                  {slide.link}
                </button>
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
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-gray-700 scale-155"
                : "bg-white bg-opacity-50 hover:bg-opacity-75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
