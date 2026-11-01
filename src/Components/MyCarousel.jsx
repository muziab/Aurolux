import { useEffect, useState } from "react";

const slides = [
  {
    category: "Bags",
    // image:
    //   "https://images.unsplash.com/photo-1584917865442-de89df76afd3?auto=format&fit=crop&w=1800&q=90",
    image: "/public/images/Shabab Al Yola Men's Tailors _ Buy Traditional….png",
    imageAlt: "Sculptural leather handbag",
    headline: "Carry a little more you.",
    action: "Explore bags",
    boldTxt: "Jalabia",
  },
  {
    category: "Clothing",
    // image:
    //   "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1800&q=90",
    image: "/public/images/street_wear1.png",
    imageAlt: "A bold, modern fashion look",
    headline: "Make your own statement.",
    action: "Explore clothing",
    boldTxt: "Casuals",
  },
  {
    category: "Shoes",
    // image:
    //   "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1800&q=90",
    image: "/public/images/Shoe.png",
    imageAlt: "Statement red sneaker",
    headline: "Your next move starts here.",
    action: "Explore shoes",
    boldTxt: "Sneakers",
  },
  {
    category: "Watches",
    // image:
    //   "https://images.unsplash.com/photo-1523170335258-f5ed11844a49?auto=format&fit=crop&w=1800&q=90",
    image: "/public/images/Red_Hoodie.png",
    imageAlt: "Classic wristwatch with a dark dial",
    headline: "Make time for good style.",
    action: "Explore watches",
  },
  {
    category: "Accessories",
    // image:
    //   "https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1800&q=90",
    image: "/public/images/Work Outfit Ideas for Winter 2025–2026_ Chic….png",
    imageAlt: "Sunglasses styled as a fashion accessory",
    headline: "It's all in the details.",
    action: "Explore accessories",
    boldTxt: "Streets",
  },
];

export default function MyCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const activeSlide = slides[currentSlide];

  useEffect(() => {
    if (isPaused) return undefined;

    const interval = window.setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slides.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const showSlide = (offset) => {
    setCurrentSlide(
      (current) => (current + offset + slides.length) % slides.length,
    );
  };

  return (
    <section
      aria-label="Featured fashion collections"
      aria-roledescription="carousel"
      className="relative isolate mx-3 my-5 min-h-[520px] overflow-hidden rounded-3xl bg-[#16070b] text-white sm:mx-5 md:min-h-[570px]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) {
          setIsPaused(false);
        }
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient (ellipse_at_78%_45%,rgba(125,20,39,0.38),transparent_55%)]" />

      {slides.map((slide, index) => (
        <div
          key={slide.category}
          aria-hidden={index !== currentSlide}
          aria-roledescription="slide"
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out motion-reduce:transition-none ${
            index === currentSlide
              ? "opacity-100"
              : "pointer-events-none opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.imageAlt}
            loading={index === 0 ? "eager" : "lazy"}
            className={`absolute inset-y-0 top-10 right-0 h-full w-[88%] object-contain object-center z-5 duration-6000ms ease-out transition-all
             motion-reduce:transition-none sm:w-[76%] md:w-[68%] ${
              index === currentSlide ? "scale-120" : "scale-105"
            } ` }
            />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,#16070b_0%,rgba(22,7,11,0.96)_17%,rgba(22,7,11,0.72)_40%,rgba(22,7,11,0.16)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(12,4,7,0.75)_0%,transparent_38%)]" />
        </div>
      ))}

      <div
        key={activeSlide.category}
        aria-roledescription="slide"
        className="absolute inset-0 z-20 flex flex-col  justify-center px-6 pb-16 pt-8 sm:px-10 md:px-14"
      >
        <div className="max-w-[21rem`] sm:max-w-[24rem]">
          <p className="mb-5 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#fff200] sm:text-xs">
            <span className="h-px w-8 bg-[#fff200]" />
            {activeSlide.category} / The new season
          </p>
          <h1 className="max-w-[21rem] text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {activeSlide.headline}
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
            New-season pieces. Personal style. No rules.
          </p>
          <a
            href="/market"
            className="mt-7 inline-flex items-center gap-4 rounded-full bg-[#fff200] px-5 py-3 text-sm font-bold text-[#16070b] transition hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#fff200]"
          >
            {activeSlide.action}
            <span
              aria-hidden="true"
              className="flex h-6 w-6 items-center justify-center rounded-full bg-[#16070b] text-[#fff200]"
            >
              ↗
            </span>
          </a>
        </div>
      </div>

      <div className="absolute bottom-5 left-6 right-6 z-30 flex items-center justify-between sm:left-10 sm:right-10 md:left-14 md:right-14">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold tracking-widest text-white">
            {String(currentSlide + 1).padStart(2, "0")}
          </span>
          <span aria-hidden="true" className="h-px w-8 bg-white/35" />
          <span className="text-xs tracking-widest text-white/50">
            {String(slides.length).padStart(2, "0")}
          </span>
          <span className="ml-1 hidden text-xs text-white/55 sm:inline">
            {activeSlide.category}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Previous collection"
            onClick={() => showSlide(-1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-[#fff200] hover:text-[#fff200] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fff200]"
          >
            <span aria-hidden="true">←</span>
          </button>
          <div className="flex items-center gap-1.5 px-1">
            {slides.map((slide, index) => (
              <button
                key={slide.category}
                type="button"
                aria-label={`Show ${slide.category} slide`}
                aria-current={index === currentSlide ? "true" : undefined}
                onClick={() => setCurrentSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fff200] ${
                  index === currentSlide
                    ? "w-6 bg-[#fff200]"
                    : "w-1.5 bg-white/45 hover:bg-white/80"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label="Next collection"
            onClick={() => showSlide(1)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-[#fff200] hover:text-[#fff200] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#fff200]"
          >
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
      <div className="absolute max-sm:left-0 -right-20 bottom-20 w-200">
        <p
          aria-hidden="true"
          className=" font-black pointer-events-none z-3 select-none whitespace-nowrap text-[clamp(4.5rem,14vw,12rem)]  uppercase leading-none tracking-[-0.08em] text-transparent customText1"
          cont={slides.map((slide) => slide?.boldTxt)}
        >
          {slides.map((slide, index) => index==currentSlide && slide?.boldTxt ) }
        </p>
        <p
          aria-hidden="true"
          className=" font-black pointer-events-none absolute inset-0 z-6 select-none whitespace-nowrap text-[clamp(4.5rem,14vw,12rem)]  uppercase leading-none tracking-[-0.08em] text-transparent"
          cont={slides.map((slide) => slide?.boldTxt)}
          style={{ WebkitTextStroke: "1px #fff" }}
        >
          {slides.map((slide, index) => index==currentSlide && slide?.boldTxt ) }
        </p>
      </div>
    </section>
  );
}
