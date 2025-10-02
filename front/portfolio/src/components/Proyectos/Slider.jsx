import { slider_images } from "../../assets";
import image1 from "./images/9.jpg";
import image2 from "./images/8.jpg";
import image3 from "./images/4.jpg";
import image4 from "./images/7.jpg";
import image5 from "./images/9.jpg";

import { FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import { useLanguage } from "../Language/Language";

import "./Slider2.css";

export default function Slider() {
  const { sentences } = useLanguage();
  
  return (
    <section id="tranding">
      <h2 className="section__title">{sentences?._gallery}</h2>

      <div className="container">
        <Swiper
          modules={[Navigation, Pagination, EffectCoverflow]}
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          slidesPerView="auto"
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ clickable: true }}
          navigation
          className="tranding-slider"
        >
          {slider_images?.map((item, index) => {
            return (
              <SwiperSlide className="tranding-slide">
                <div className="tranding-slide-img">
                  <img src={item?.image} alt="Tranding" />
                </div>
                <div className="tranding-slide-content">
                  <h1 className="food-price">${item?.price} </h1>
                  <div className="tranding-slide-content-bottom">
                    <h2 className="food-name">{item?.name}</h2>
                    <h3 className="food-rating">
                      <span>4.5</span>
                      <div className="rating">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                      </div>
                    </h3>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}

        </Swiper>
      </div>
    </section>
  );
}
