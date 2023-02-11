import React from "react";
import "./Projects.css";
import Pro1 from "../img/musicapp.png";
import Pro2 from "../img/ecommerce.png";
import Pro3 from "../img/hoc.png";
import Pro4 from "../img/sidebar.png";
import  { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import {HiOutlineBuildingLibrary}  from "react-icons/hi2"
// import required modules
import { FreeMode, Pagination, Autoplay ,Navigation } from "swiper";


const Projects = () => {
  return (
    <div className="project_Main">
      <h2>Recent Projects</h2>
      <h3>Portfolio</h3>

      <div>
        <Swiper
           // slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        modules={[Navigation, Pagination, Autoplay,FreeMode]}
        // slide
        navigation
        autoplay={{ delay: 2000 }}
        className="mySwiper"
        breakpoints={{
            576: {
              width: 576,
              slidesPerView: 2,
            },
            450: {
              width: 450,
              slidesPerView: 1,
            },
            768: {
              width: 900,
              slidesPerView: 2,
            },
          }}
        >
          <SwiperSlide >
            <img
              src={Pro2}
              alt="Image"
            />
          </SwiperSlide>
          <SwiperSlide >
            <img
              src={Pro3}
            //   style={{ height: "80vh", objectFit: "cover" }}
              alt="Image"
            />
          </SwiperSlide>
          <SwiperSlide >
            <img
              src={Pro4}
            //   style={{ height: "80vh", objectFit: "cover" }}
              alt="Image"
            />
          </SwiperSlide>
          <SwiperSlide >
            <img
              src={Pro1}
            //   style={{ height: "80vh", objectFit: "cover" }}
              alt="Image"
            />
          </SwiperSlide>
          
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
