import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Banner1 from '../../components/Sliders/Banner1/Banner1';
import img1 from "../../assets/banner-1.png"
import img2 from "../../assets/banner-2.png"
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Slider = () => {
    return (
        <div className="container relative">
            {/* Custom Arrows */}
            <div className="custom-prev absolute left-3 top-1/2 transform -translate-y-1/2 z-10 bg-[#B0DD1D] p-3 rounded-full cursor-pointer hover:bg-[#c6e75b] md:text-2xl">
                <FaArrowLeft></FaArrowLeft>
            </div>
            <div className="custom-next absolute right-3 top-1/2 transform -translate-y-1/2 z-10 bg-[#B0DD1D] p-3 rounded-full cursor-pointer hover:bg-[#c6e75b] md:text-2xl">
                <FaArrowRight></FaArrowRight>
            </div>

            {/*  Swiper Section */}
            <Swiper
                navigation={{
                    prevEl: '.custom-prev',
                    nextEl: '.custom-next',
                }}
                modules={[Navigation]}
                className="mySwiper"
                spaceBetween={20}
                slidesPerView={1}
            >
                <SwiperSlide>
                    <Banner1 img={img1} title="JF Privezy Grass Wall" subTitle="The perfect Blend of Greenery" />
                </SwiperSlide>
                <SwiperSlide>
                    <Banner1 img={img2} title="JF Privezy a Net Fence" subTitle="The perfect Blend of UK" />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;
