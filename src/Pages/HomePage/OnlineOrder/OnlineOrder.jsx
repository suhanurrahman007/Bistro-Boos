import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import "./OnlineOrder.css";

import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import img5 from "../../../assets/home/slide5.jpg";
import img6 from "../../../assets/home/slide5.jpg";
import img7 from "../../../assets/home/slide2.jpg";
import img8 from "../../../assets/home/slide3.jpg";
import img9 from "../../../assets/home/slide4.jpg";


const OnlineOrder = () => {
  return (
    <div className="py-7">
      <div className="flex flex-col space-y-3 justify-center items-center">
        <p className="text-lg text-[#D99904] italic">
          ---From 11:00am to 10:00pm---
        </p>
        <hr className="w-72 border" />
        <h2 className="text-2xl font-semibold">ORDER ONLINE</h2>
        <hr className="w-72 border" />
      </div>
        <>
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            <SwiperSlide>
              <img src={img1} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img7} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img8} alt="" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img9} alt="" />
            </SwiperSlide>
          </Swiper>
        </>
    </div>
  );
};

export default OnlineOrder;
