import React, { useEffect, useState } from "react";
import SingerImg_2 from "../assets/singer_2.jpg";
import SingerImg_3 from "../assets/singer_3.jpg";
import CollectionImg_1 from "../assets/collection_1.jpg";
import UserImg_1 from "../assets/user_1.jpg";
import UserImg_3 from "../assets/user_3.jpg";
import UserImg_4 from "../assets/user_4.jpg";
import UserImg_5 from "../assets/user_5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import VerticleLine from "./VerticleLine";

const CollectionComponents = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const [animateSlider, setAnimateSlider] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimateSlider(true);
      setTimeout(() => {
        setAnimateSlider(false);
      }, 1500);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1800,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const handleClick = () => {
    setIsActive(!isActive);
    setTimeout(() => {
      navigate("/");
    }, 500);
  };
  return (
    <div className="flex min-h-screen">
      <div className="relative" style={{ width: "65%" }}>
        <div className="pl-10 pt-2 ml-10 mt-2  w-32">
          <h1 className="text-3xl  font-bold text-yellow-400">Astrix.</h1>
        </div>
        <div className="absolute inset-0  flex flex-col items-left  mt-20 ml-10 justify-start text-gray-500 z-0">
          <h1 className="sm:text-7xl md:text-8xl lg:text-8xl font-bold">
            ASTR
          </h1>
          <h2 className="sm:text-7xl md:text-8xl lg:text-8xl font-bold">IX</h2>
          <h3 className="sm:text-7xl md:text-8xl lg:text-8xl font-bold mt-10">
            COL
          </h3>
          <h4 className="sm:text-7xl md:text-8xl lg:text-8xl font-bold">ECT</h4>
          <h5 className="sm:text-7xl md:text-8xl lg:text-8xl font-bold">BLE</h5>
        </div>
        <div className="relative z-10  mt-5 slider-wrapper">
          <Slider {...settings}>
            {[SingerImg_2, CollectionImg_1, SingerImg_3].map((img, index) => (
              <div
                key={index}
                className={`p-3 ${
                  animateSlider ? "animate-slide-to-right" : ""
                }`}
              >
                <div className=" flex-col  absolute  bg-black bg-opacity-0 flex items-start justify-end rounded ">
                  <h4 className="text-white text-2xl  font-semibold">
                    Lunar Palace:
                  </h4>
                  <p className="flex text-white text-lg  font-semibold ">
                    (ft. Kanye west)
                  </p>
                </div>
                <div className="relative bg-white rounded shadow mt-16">
                  <img
                    className="w-full h-100 object-cover rounded "
                    src={img}
                    alt={`Singer ${index + 1}`}
                  />
                </div>
              </div>
            ))}
          </Slider>

          <div className="inline-flex rounded-full shadow-sm overflow-hidden mt-16 ml-10 ">
            <button
              type="button"
              className={`w-1/2 px-8 py-2 text-sm font-medium flex justify-center items-center ${
                isActive
                  ? "bg-yellow-400  text-gray-800 cursor-pointer"
                  : "bg-gray-400 text-white"
              }`}
              onClick={handleClick}
            >
              Events
            </button>
            <button
              type="button"
              className={`w-1/2 px-4 py-2 text-sm font-medium flex justify-center items-center ${
                isActive
                  ? "bg-gray-400 text-white cursor-pointer"
                  : "bg-yellow-400 text-gray-800"
              }`}
              onClick={handleClick}
            >
              Collections
            </button>
          </div>
        </div>
      </div>
      <div style={{ width: "5%" }}>
        <div className=" w-10 h-screen ">
          <VerticleLine />
        </div>
      </div>

      <div style={{ width: "30%" }} className="mt-10 ml-5">
        <div>
          <h2 className="font-semibold md:text-xl xl:text-xl text-white">
            Explore Your First <br /> Collectible
          </h2>
          <h1 className="font-bold mt-10 text-3xl text-white">Meta</h1>
          <h1 className="font-bold  text-3xl text-white">Lives</h1>
        </div>
        <div className="mt-2">
          <div className="flex flex-row space-x-2 text-white font-semibold">
            <h1 className="font-bold  text-xl text-white">Live in Astrix</h1>
          </div>
        </div>
        <p className="font-semibold text-start sm:text-xs md:text-sm lg:text-sm text-white mt-4 leading-relaxed whitespace-normal ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          ipsam facere rerum necessitatibus eligendi exercitationem, in sed. Nam
          porro quam modi beatae nulla.
        </p>
        <div className="flex sm:flex-col sm:items-start md:flex-row  md:-space-x-4  lg:flex-row lg:-space-x-4 mt-5">
          <div className="flex sm:flex-row sm:-space-x-4 md:flex-row md:-space-x-4 lg:flex-row lg:-space-x-4 items-start sm:mb-4">
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src={UserImg_3}
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src={UserImg_1}
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src={UserImg_5}
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src={UserImg_3}
              alt=""
            />
            <img
              className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
              src={UserImg_4}
              alt=""
            />
          </div>
          <h4 className=" sm:p-0 md:pl-7 md:pt-2 lg:pl-7 lg:pt-2 text-white font-semibold sm:text-center">
            22k people interested
          </h4>
        </div>

        <h1 className="font-semibold mt-5 text-sm text-white">Collectible</h1>
        <div className="mt-5 mr-5">
          <div className="flex flex-col sm:flex-col md:flex-col  lg:flex-row relative gap-1">
            <div className="rounded-lg shadow-lg bg-violet-300">
              <div className="flex flex-row items-end justify-between p-2">
                <span className="bg-gray-800 px-2 text-white text-xs font-medium rounded-lg">
                  2024
                </span>
                <span className="text-gray-800 text-xs font-bold">
                  By Pablo
                </span>
              </div>
              <p className="text-xs font-bold text-center">Collectible Name</p>
              <div className="p-2">
                <img
                  className="w-32 h-28 rounded-lg object-cover"
                  src={SingerImg_2}
                  alt="Sunset in the mountains"
                />
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-violet-300">
              <div className="flex flex-row items-end justify-between p-2">
                <span className="bg-gray-800 px-2 text-white text-xs font-medium rounded-lg">
                  2024
                </span>
                <span className="text-gray-800 text-xs font-bold">
                  By Pablo
                </span>
              </div>
              <p className="text-xs font-bold text-center">Collectible Name</p>
              <div className="p-2">
                <img
                  className="w-32 h-28 rounded-lg object-cover"
                  src={SingerImg_2}
                  alt="Sunset in the mountains"
                />
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg bg-violet-300">
              <div className="flex flex-row items-end justify-between p-2">
                <span className="bg-gray-800 px-2 text-white text-xs font-medium rounded-lg">
                  2024
                </span>
                <span className="text-gray-800 text-xs font-bold">
                  By Pablo
                </span>
              </div>
              <p className="text-xs font-bold text-center">Collectible Name</p>
              <div className="p-2">
                <img
                  className="w-32 h-28 rounded-lg object-cover"
                  src={SingerImg_2}
                  alt="Sunset in the mountains"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-row items-end justify-end mb-10  ">
          <button className="border mt-1 rounded w-28 h-10 bg-yellow-400 text-gray-800 font-bold mr-5 mb-3">
            Join Waiting
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionComponents;
