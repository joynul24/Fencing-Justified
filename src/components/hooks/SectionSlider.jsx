import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const SectionSlider = ({
  slides = [],
  slidesPerView = 4,
  centeredSlides = false,
  spaceBetween = 30,
  pagination = { type: "fraction" },
  className = "sectionSlider",
}) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      swiperRef.current.params &&
      swiperRef.current.params.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy(); // reset
      swiperRef.current.navigation.init();     // reinitialize
      swiperRef.current.navigation.update();   // update
    }
  }, []);

  return (
    <div className="relative">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={slidesPerView}
        centeredSlides={centeredSlides}
        spaceBetween={spaceBetween}
        pagination={pagination}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Pagination, Navigation]}
        className={className}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index}>{slideContent}</SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Arrows */}
      <div
        ref={prevRef}
        className="custom-prev absolute -left-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-[#B0DD1D] hover:bg-[#c6e75b] rounded-full p-2 shadow"
      >
        <FaArrowLeft />
      </div>

      <div
        ref={nextRef}
        className="custom-next absolute -right-2 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-[#B0DD1D] hover:bg-[#c6e75b] rounded-full p-2 shadow"
      >
        <FaArrowRight />
      </div>
    </div>
  );
};

export default SectionSlider;
