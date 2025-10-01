//Imports
import image1 from "./images/9.jpg";
import image2 from "./images/8.jpg";
import image3 from "./images/4.jpg";
import image4 from "./images/7.jpg";
import image5 from "./images/9.jpg";

import { FaStar } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Import required modules
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";

import { useLanguage } from "../Language/Language";

import "./Slider2.css";

export default function Slider() {
  const { sentences } = useLanguage();
    // TODO: MAKE DYNAMIC THE SLIDES AND CHANGE THE COLOR OF THE ARROW
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
          {/* Slide 1 */}
          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src={image1} alt="Tranding" />
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$20</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Special Pizza</h2>
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

          {/* Slide 2 */}
          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src={image2} alt="Tranding" />
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$20</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Meat Ball</h2>
                <h3 className="food-rating">
                  <span>4.5</span>
                  <div className="rating">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                </h3>
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src={image3} alt="Tranding" />
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$40</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Burger</h2>
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

          {/* Slide 4 */}
          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src={image4} alt="Tranding" />
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$40</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Burger</h2>
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

          {/* Slide 5 */}
          <SwiperSlide className="tranding-slide">
            <div className="tranding-slide-img">
              <img src={image5} alt="Tranding" />
            </div>
            <div className="tranding-slide-content">
              <h1 className="food-price">$40</h1>
              <div className="tranding-slide-content-bottom">
                <h2 className="food-name">Burger</h2>
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
        </Swiper>
      </div>
    </section>
  );
}
