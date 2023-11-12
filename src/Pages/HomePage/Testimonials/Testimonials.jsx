import SectionTitle from "../../../components/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "@smastrom/react-rating/style.css";
import { Rating } from "@smastrom/react-rating";
import { BiSolidQuoteSingleLeft } from "react-icons/bi";
import useReview from "../../../hooks/useReview";


const Testimonials = () => {
  const [reviews] = useReview()

  // console.log(reviews);
  return (
    <div className="mt-10">
      <SectionTitle
        header={" What Our Clients Say"}
        miniHeader={"TESTIMONIALS"}
      ></SectionTitle>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="px-8 md:px-20 flex justify-center items-center flex-col space-y-4 -mt-8">
              <Rating
                style={{ maxWidth: 180 }}
                value={review.rating}
                readOnly
              />
              <div className="flex text-6xl">
                <BiSolidQuoteSingleLeft></BiSolidQuoteSingleLeft>
                <BiSolidQuoteSingleLeft className="-ml-7"></BiSolidQuoteSingleLeft>
              </div>
              <p className="text-center text-sm text-gray-700">{review.details}</p>
              <h2 className="text-lg font-bold text-orange-600">{review.name}</h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Testimonials;
