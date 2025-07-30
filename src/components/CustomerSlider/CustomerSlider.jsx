import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const testimonials = [
  {
    id: 1,
    name: "- Samuel Varughese",
    message: "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.) Value for money and easy to install. Happy with the product",
    img: "https://i.ibb.co/27F7JYXm/customer1.png",
  },
  {
    id: 2,
    name: "Sumit Singh",
    message: "I had initial issue with stock availability and delivery. Once the product arrived on site the work has completed very fast(400ft.)",
    img: "https://joynul2024.sirv.com/clients/client-8.jpg",
  }
];

const CustomerSlider = () => {
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
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="w-full px-4 py-10">
      <h2 className="text-xl md:text-3xl font-bold text-center mb-8">Why Customers ❤️ Us</h2>

      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop={true}
        spaceBetween={30}
        className="relative"
      >
        {testimonials.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="flex flex-col lg:flex-row gap-5 md:gap-16">
              {/* Left Content */}
              <div className="flex-1 p-14 bg-[#F2F4F6] rounded-2xl">
                <div className="flex gap-2 items-center">
                  <img src="https://i.ibb.co/j9d63CxX/Vector.png" alt="" />
                  <img src="https://i.ibb.co/j9d63CxX/Vector.png" alt="" />
                </div>
                <p className="text-gray-700 mt-10 mb-6">{item.message}</p>
                <h3 className="text-xl md:text-3xl mt-20 font-semibold">{item.name}</h3>
              </div>

              {/* Right Image */}
              <div className="h-[500px]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="rounded-lg shadow-lg max-w-full h-full"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}

        {/* Custom Navigation (using refs) */}
        <div className="flex justify-center mt-4 gap-4">
          <button ref={prevRef} className="rounded-full p-2 cursor-pointer bg-[#B0DD1D] hover:bg-[#c6e75b]">
            <FaArrowLeft />
          </button>
          <button ref={nextRef} className="rounded-full p-2 cursor-pointer bg-[#B0DD1D] hover:bg-[#c6e75b]">
            <FaArrowRight />
          </button>
        </div>
      </Swiper>
    </div>
  );
};

export default CustomerSlider;
