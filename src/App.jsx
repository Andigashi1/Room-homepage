import { useCallback, useEffect, useState } from "react";

import Nav from "./sections/Nav";

import mobileimg1 from "./assets/images/mobile-image-hero-1.jpg";
import mobileimg2 from "./assets/images/mobile-image-hero-2.jpg";
import mobileimg3 from "./assets/images/mobile-image-hero-3.jpg";
import desktopimg1 from "./assets/images/desktop-image-hero-1.jpg";
import desktopimg2 from "./assets/images/desktop-image-hero-2.jpg";
import desktopimg3 from "./assets/images/desktop-image-hero-3.jpg";
import imgdark from "./assets/images/image-about-dark.jpg";
import imglight from "./assets/images/image-about-light.jpg";
import arrow from "./assets/images/icon-arrow.svg";
import right from "./assets/images/icon-angle-right.svg";
import left from "./assets/images/icon-angle-left.svg";

const mobileImgs = [mobileimg1, mobileimg2, mobileimg3];
const desktopImgs = [desktopimg1, desktopimg2, desktopimg3];

const info = [
  {
    title: "Discover innovative ways to decorate",
    text: ` We provide unmatched quality, comfort, and style for property owners
            across the country. Our experts combine form and function in
            bringing your vision to life. Create a room in your own style with
            our collection and make your property a reflection of you and what
            you love.`,
  },
  {
    title: "We are available all across the globe",
    text: `With stores all over the world, it's easy for you to find furniture
    for your home or place of business. Locally, we're in most
    major cities throughout the country. Find the branch nearest
    you using our store locator. Any questions? Don't hesitate to
    contact us today.`,
  },
  {
    title: "Manufactured with the best materials",
    text: `Our modern furniture store provide a high level of quality. Our
    company has invested in advanced technology to ensure that
    every product is made as perfect and as consistent as
    possible. With three decades of experience in this industry, we
    understand what customers want for their home and office.`,
  },
];

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [imgIndex, setImgIndex] = useState(0);

  const images = isMobile ? mobileImgs : desktopImgs;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleImgChange = useCallback(
    (type) => {
      if (type === "next") {
        setImgIndex((imgIndex + 1) % images.length);
      } else if (type === "prev") {
        setImgIndex((imgIndex - 1 + images.length) % mobileImgs.length);
      }
    },
    [images.length, imgIndex]
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowLeft") handleImgChange("prev");
      if (e.key === "ArrowRight") handleImgChange("next");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleImgChange]);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 1024);
    };

    window.addEventListener("resize", handleResize);
    !isMobile ? setIsMenuOpen(false) : null;

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isMobile]);

  return (
    <div className="max-w-container flex flex-col min-h-screen font-display">
      <Nav isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      {isMenuOpen && (
        <div className="inset-0 absolute min-h-full z-10 bg-black/75"></div>
      )}
      <div className="flex flex-col lg:flex-row max-lg:items-center lg:h-[65vh]">
        <div className="flex overflow-x-hidden relative">
          {images.map((img, index) => (
            <img
              className={`w-full min-w-full h-full object-cover transition:transform duration-200`}
              style={{
                transform: `translateX(-${imgIndex * 100}%)`,
              }}
              key={index}
              src={img}
              alt="img"
            />
          ))}
          <div
            className="absolute lg:hidden bottom-0 right-0 [&>*]:bg-black
          [&>*]:py-4 [&>*]:px-6 [&>*]:cursor-pointer [&>*]:hover:bg-gray2"
          >
            <button
              onClick={() => handleImgChange("prev")}
              className="py-4 px-6 cursor-pointer"
            >
              <img src={left} alt="" />
            </button>
            <button
              onClick={() => handleImgChange("next")}
              className="py-4 px-6 cursor-pointer"
            >
              <img src={right} alt="" />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center w-full max-lg:max-w-lg relative px-10 py-16 lg:p-20">
          <div key={imgIndex} className="max-w-xl flex-1">
            <h1
              className="text-[2.5rem] lg:text-5xl leading-10 font-semibold mb-5 transition duration-200 ease-out
             motion-safe:animate-[fade-in_0.3s_ease-out]"
            >
              {info[imgIndex].title}
            </h1>
            <p
              className="text-gray1 transition duration-200 ease-out
             motion-safe:animate-[fade-in_0.3s_ease-out]"
            >
              {info[imgIndex].text}
            </p>
            <p className="flex items-center gap-4 uppercase tracking-[.7rem] mt-5 cursor-pointer hover:text-gray2">
              shop now <img src={arrow} alt="arrow icon" />
            </p>
            <div
              className="absolute hidden lg:block bottom-0 left-0 [&>*]:bg-black
            [&>*]:py-7 [&>*]:px-9.5 [&>*]:cursor-pointer [&>*]:hover:bg-gray2"
            >
              <button onClick={() => handleImgChange("prev")}>
                <img src={left} alt="" />
              </button>
              <button onClick={() => handleImgChange("next")}>
                <img src={right} alt="" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row justify-center items-center w-full lg:h-[35vh]">
          <img
            className="w-full h-full object-cover max-w-xl"
            src={imgdark}
            alt=""
          />
        <div className=" px-12 py-16 info:px-10 info:pt-4 lg:pb-0 max-lg:max-w-lg mx-auto lg:mx-0">
          <h1 className="font-semibold tracking-[.4rem] uppercase mb-5 lg:mb-3">
            About our furniture
          </h1>
          <p className="text-gray1">
            Our multifunctional collection blends design and function to suit
            your individual taste. Make each room unique, or pick a cohesive
            theme that best express your interests and what inspires you. Find
            the furniture pieces you need, from traditional to contemporary
            styles or anything in between. Product specialists are available to
            help you create your dream space.
          </p>
        </div>
        <img className="w-full h-full object-cover max-w-xl" src={imglight} alt="" />
      </div>
    </div>
  );
}

export default App;
