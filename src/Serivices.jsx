import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
const Serivices = () => {
  return (
    <div>
      <div className="flex items-center justify-center">
        <div className="flex flex-col gap-y-4 py-14 justify-center items-center">
          <h2 className="text-3xl font-bold text-blue-950">Our Services</h2>
          <div className="relative  w-screen">
            <Swiper
              spaceBetween={30}
              breakpoints={{
                320:{
                  slidesPerView:1
                },
                768:{
                  slidesPerView:2,
                  spaceBetween:50
                },
                769:{
                  slidesPerView:4
                },
              }}
              centeredSlides={true}
              autoplay={{
                delay: 6500,
                disableOnInteraction: false,
              }}
              navigation={{
                prevEl: ".pre-button",
                nextEl: ".next-button",
              }}
              modules={[Navigation, Autoplay]}
              className=" w-[60vw] h-[50vh] py-10 "
              loop
              slidesPerView={3}
            >
              <SwiperSlide className="w-[100px] h-[200px] bg-red-400 rounded-lg">
                Slide 1
              </SwiperSlide>
              <SwiperSlide className="w-[100px] h-[200px] bg-red-400 rounded-lg">
                Slide 2
              </SwiperSlide>
              <SwiperSlide className="w-[100px] h-[200px] bg-red-400 rounded-lg">
                Slide 3
              </SwiperSlide>
              <SwiperSlide className="w-[100px] h-[200px] bg-red-400 rounded-lg">
                Slide 4
              </SwiperSlide>
              <SwiperSlide className="w-[100px] h-[200px] bg-red-400 rounded-lg">
                Slide 5
              </SwiperSlide>
              <SwiperSlide className="w-[100px] h-[200px] bg-red-400 rounded-lg">
                Slide 5
              </SwiperSlide>
              <SwiperSlide className="w-[100px] h-[200px] bg-red-400 rounded-lg">
                Slide 5
              </SwiperSlide>

              <div className="flex justify-between ">
                <div className="pre-button absolute top-[130px] z-10 left-0">
                  <FaChevronCircleLeft />
                </div>
                <div className="next-button absolute top-[130px] z-10 right-0">
                  <FaChevronCircleRight />
                </div>
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Serivices;
