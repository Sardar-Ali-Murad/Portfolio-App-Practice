import React from 'react'
import "./Reviews.css"
import Pic1 from "../img/profile1.jpg"
import Pic2 from "../img/profile2.jpg"
import Pic3 from "../img/profile3.jpg"
import Pic4 from "../img/profile4.jpg"
import Pic5 from "../img/profile5.jpg"
import Pic6 from "../img/profile6.jpg"
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from 'swiper';

// Import Swiper styles
import "swiper/css";


const Reviews = () => {
    let arr=[{img:Pic1},{img:Pic2},{img:Pic3},{img:Pic4},{img:Pic5},{img:Pic6},]
  return (
    <div className='reviews_Main' id="reviews">
      <h2>Clients Always get <span>Exceptional Work</span> fom me....</h2>
      <Swiper className="mySwiper"
             modules={[Navigation, Pagination, Autoplay]}
             slidesPerView={1}
            //  slide
             navigation
             autoplay={{ delay: 2000 }}
             pagination={{ clickable: true }}
             style={{marginTop:"50px"}}
            //  spaceBetween={300}
      >
        {
            arr.map((item)=>{
                return <SwiperSlide style={{borderRadius:"20px"}}>
                    <div className='review_Box'>
                     <img src={item?.img} className="review_Img" alt="Image" style={{height:"100px",width:"100px",borderRadius:"50%"}}/>
                     <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                    </div>
                </SwiperSlide>
            })
        }
      </Swiper>
    </div>
  )
}

export default Reviews
