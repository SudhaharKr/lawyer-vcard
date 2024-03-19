import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FaChevronCircleLeft, FaChevronCircleRight } from "react-icons/fa";
import DigitalMarketing from "./assets/Gallery/digital-marketing.webp";
import WebApplication from "./assets/Gallery/web-development.jpg";
import FullStack from "./assets/Gallery/full-stack-developer.jpg";
import MobileApp from "./assets/Gallery/mobile-app.jpeg";
import { useState } from "react";

const Gallery = () => {
  const images = [
    {
      id: 1,
      img: DigitalMarketing,
    },
    {
      id: 2,
      img: WebApplication,
    },
    {
      id: 3,
      img: FullStack,
    },
    {
      id: 4,
      img: MobileApp,
    },
  ];

  const [imgid, setImgid] = useState("");

  return (
    <div className="px-4">
      <div className="flex flex-col items-center justify-center py-8">
        <h2 className="text-3xl font-bold text-blue-950">Our Gallery</h2>
        <div className="relative w-full">
          <Swiper
            spaceBetween={30}
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
            className="w-full py-10"
            loop
            slidesPerView={1}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {images.map((res, index) => (
              <SwiperSlide key={index} className="rounded-lg">
                <img
                  onClick={() => setImgid(index)}
                  key={index}
                  src={res.img}
                  className="w-full h-auto rounded-lg"
                  alt={`Image ${index + 1}`}
                />
              </SwiperSlide>
            ))}
            <div className="flex justify-between ">
              <div className="pre-button absolute top-[50%] z-10 left-0 transform -translate-y-1/2">
                <FaChevronCircleLeft />
              </div>
              <div className="next-button absolute top-[50%] z-10 right-0 transform -translate-y-1/2">
                <FaChevronCircleRight />
              </div>
            </div>
          </Swiper>
        </div>
      </div>
      {imgid !== "" && (
        <div className="fixed top-0 left-0 w-full h-full bg-[#a8a6a6bb] flex items-center justify-center">
          <FaChevronCircleLeft
            className={`cursor-pointer ${
              imgid > 0 ? "" : "text-gray-400 pointer-events-none"
            }`}
            onClick={() => setImgid(imgid - 1)}
          />
          <img
            src={images[imgid].img}
            alt={`Image ${imgid + 1}`}
            className="max-w-full max-h-full"
          />
          <FaChevronCircleRight
            className={`cursor-pointer ${
              imgid < images.length - 1
                ? ""
                : "text-gray-400 pointer-events-none"
            }`}
            onClick={() => setImgid(imgid + 1)}
          />
          <div
            className="absolute top-10 right-10 cursor-pointer"
            onClick={() => setImgid("")}
          >
            Close
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
