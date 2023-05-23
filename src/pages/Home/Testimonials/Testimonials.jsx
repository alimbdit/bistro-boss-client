import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { Rating } from "@smastrom/react-rating";


// Import Swiper styles
import '@smastrom/react-rating/style.css'
import "swiper/css";
import "swiper/css/navigation";

//  Icon
import qoute from '../../../../public/quote.png'

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  console.log(reviews);

  return (
    <section>
      <SectionTitle
        heading="TESTIMONIALS"
        subHeading="What Our Clients Say"
      ></SectionTitle>

      <div>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="mt-5 mb-16 mx-24 px-20 flex flex-col justify-center items-center text-center">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <img className="w-[100px] mt-8" src={qoute} alt="" />
                <p className="py-8">{review.details}</p>
                <h3 className="text-3xl text-amber-500 font-medium uppercase">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
