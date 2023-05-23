import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";

import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
        <SectionTitle heading={"ORDER ONLINE"} subHeading={"From 11:00am to 10:00p"}></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <div className="relative">
            <img className="" src={slide1} alt="" />
            <h3 className="text-center text-4xl drop-shadow-lg text-white absolute bottom-10 right-[100px] uppercase">
              Salads
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="" src={slide2} alt="" />
            <h3 className="text-center text-4xl drop-shadow-lg text-white absolute bottom-10 right-[100px] uppercase">
            pizzas
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="" src={slide3} alt="" />
            <h3 className="text-center text-4xl drop-shadow-lg text-white absolute bottom-10 right-[100px] uppercase">
              Soups
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="" src={slide4} alt="" />
            <h3 className="text-center text-4xl drop-shadow-lg text-white absolute bottom-10 right-[100px] uppercase">
            desserts
            </h3>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img className="" src={slide5} alt="" />
            <h3 className="text-center text-4xl drop-shadow-lg text-white absolute bottom-10 right-[100px] uppercase">
              Salads
            </h3>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
