import React, { useState, useEffect } from "react";
import SingerImg_1 from "../assets/singer_1.jpg";
import SingerImg_2 from "../assets/singer_2.jpg";
import SingerImg_3 from "../assets/singer_3.jpg";
import QRImg from "../assets/qr.jpg";
import CollectionImg_1 from "../assets/collection_1.jpg";
import AI_img from "../assets/ai.jpg";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import VerticleLine from "./VerticleLine";

const EventsComponents = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(true);
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
        breakpoint:768,
        settings:{
          slidesToShow:2
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
      navigate("/collection");
    }, 500);
  };
  return (
    <div className="flex min-h-screen">
      <div className="relative" style={{ width: "65%" }}>
        <div className="pl-10 pt-2 ml-10 mt-2  w-32">
          <h1 className="text-3xl  font-bold text-yellow-400">Astrix.</h1>
        </div>
        <div className="absolute inset-0  flex flex-col items-left mt-20 ml-10 justify-start text-gray-500 z-0">
          <h1 className="sm:text-7xl sm:mt-5 md:text-8xl lg:text-8xl font-bold">ASTR</h1>
          <h2 className="sm:text-7xl md:text-8xl lg:text-8xl font-bold">IX</h2>
          <h3 className="sm:text-7xl md:text-8xl lg:text-8xl font-bold mt-10">EVE</h3>
          <h4 className="sm:text-7xl md:text-8xl lg:text-8xl font-bold">NTS</h4>
        </div>
        <div className="relative z-10  mt-5 slider-wrapper">
          <Slider {...settings}>
            {[SingerImg_2, CollectionImg_1, AI_img, SingerImg_3].map(
              (img, index) => (
                <div key={index} className={`p-3 ${animateSlider ? "animate-slide-to-right" : ""}`}>
                  <div
                   className="relative bg-white rounded shadow mt-16"
                  >
                    <img
                      className="w-full h-100 object-cover rounded "
                      src={img}
                      alt={`Singer ${index + 1}`}
                    />
                    <div className=" flex-col  absolute inset-0 bg-black bg-opacity-0 flex items-start justify-end rounded m-5 animate-slide-to-left">
                      <h4 className="text-white text-2xl mb-2  font-semibold ">
                        Event Name
                      </h4>

                      <p className="flex text-white text-lg  font-semibold">
                        <span className="flex items-center">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            className="fill-current w-4 h-4 mr-2 text-white"
                          >
                            <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                          </svg>
                        </span>
                        Location
                      </p>
                    </div>
                  </div>
                </div>
              )
            )}
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

      <div style={{ width: "30%" }} className="mt-10 ml-5 ">
        <div>
          <h2 className="font-semibold md:text-xl xl:text-xl text-white">
            Explore Your First <br /> Event
          </h2>
          <h1 className="font-bold mt-10 text-3xl sm:text-xl md:text-2xl text-white">Event Name</h1>
        </div>
        <div className="ml-2 mt-2 ">
          <div className="flex flex-row  sm:gap-x-0 md:gap-x-0 lg:gap-x-2 sm:flex-col  md:flex-col lg:flex-row text-white font-semibold">
            <span className="flex items-center ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current w-4 h-4 mr-1  text-white"
              >
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
              </svg>
              <p>Venue</p>
            </span>
            <span className="flex items-center  ">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="fill-current w-4 h-4 mr-1 text-white"
              >
                <path d="M19.004 1c-.947 0-1.895.268-2.719.803 3.17 1.218 5.694 3.739 6.914 6.909.534-.823.801-1.77.801-2.717 0-2.761-2.236-4.995-4.996-4.995m-7.004 20c-4.411 0-8.001-3.59-8.001-8 0-4.413 3.59-8.001 8.001-8.001 4.412 0 8.002 3.588 8.002 8.001 0 4.41-3.59 8-8.002 8m10.002-8c0-5.522-4.475-10.001-10.002-10.001-5.523 0-10.001 4.479-10.001 10.001 0 4.316 3.087 10 10.001 10 6.93 0 10.002-5.693 10.002-10m-21.199-4.285c-.535-.824-.802-1.772-.802-2.718 0-2.757 2.233-4.995 4.991-4.995.948 0 1.896.268 2.721.803-3.172 1.217-5.692 3.739-6.91 6.91m12.196 4.285v-5h-1.999v6.998h5.999v-1.998h-4z" />
              </svg>
              <p>04/03/2024</p>
            </span>
            <span className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current w-4 h-3 text-white"
              >
                <path d="M12.042 23.648c-7.813 0-12.042-4.876-12.042-11.171 0-6.727 4.762-12.125 13.276-12.125 6.214 0 10.724 4.038 10.724 9.601 0 8.712-10.33 11.012-9.812 6.042-.71 1.108-1.854 2.354-4.053 2.354-2.516 0-4.08-1.842-4.08-4.807 0-4.444 2.921-8.199 6.379-8.199 1.659 0 2.8.876 3.277 2.221l.464-1.632h2.338c-.244.832-2.321 8.527-2.321 8.527-.648 2.666 1.35 2.713 3.122 1.297 3.329-2.58 3.501-9.327-.998-12.141-4.821-2.891-15.795-1.102-15.795 8.693 0 5.611 3.95 9.381 9.829 9.381 3.436 0 5.542-.93 7.295-1.948l1.177 1.698c-1.711.966-4.461 2.209-8.78 2.209zm-2.344-14.305c-.715 1.34-1.177 3.076-1.177 4.424 0 3.61 3.522 3.633 5.252.239.712-1.394 1.171-3.171 1.171-4.529 0-2.917-3.495-3.434-5.246-.134z" />
              </svg>
              <p>19:00</p>
            </span>
          </div>
        </div>
        <p className="font-semibold text-start sm:text-xs md:text-sm lg:text-sm text-white mt-4  mr-5 leading-relaxed whitespace-normal">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          ipsam facere rerum necessitatibus eligendi exercitationem, in sed. Nam
          porro quam modi beatae nulla.
        </p>
        <h1 className="font-semibold  sm:mt-5 md:mt-5 lg:mt-5 sm:text-lg md:text-lg xl:text-xl text-white"> 
          Artist Lineup
        </h1>
        <div className="sm:mt-5 md:mt-14 lg:mt-20">
          <div className="flex relative sm:flex-col sm:items-center md:flex-col md:items-center  lg:flex-row lg:items-start">
            <img
              className=" sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded object-cover"
              src={SingerImg_1}
              alt="Singer 1"
            />
            <img
              className="sm:w-32 sm:h-32 md:h-32 md:w-32 lg:w-40 lg:h-40 rounded object-cover relative -mt-4 z-10"
              src={SingerImg_2}
              alt="Singer 2"
            />
            <img
              className="sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-32 lg:h-32 rounded object-cover"
              src={SingerImg_3}
              alt="Singer 3"
            />
          </div>
        </div>
        <div className="flex  mr-3 sm:flex-col sm:mt-10  md:flex-row md:items-end md:justify-between md:mt-10 lg:flex-row lg:items-end lg:justify-between lg:mt-24">
          <img
            className=" sm:w-14  sm:h-14 sm:mb-5 md:h-14 md:w-14 lg:h-20 lg:w-20 rounded object-cover "
            src={QRImg}
            alt="QR img"
          />
          <button className="border rounded  sm:w-20 sm:h-10 md:w-20 md:h-10 lg:w-28 lg:h-10 sm:text-xs md:text-xs lg:text-sm bg-yellow-400 text-gray-800 font-bold mr-2  mb-5">
            Join Waiting
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventsComponents;
