import Agricultural from "./Agricultural/Agricultural";
import Landscape from "./Landscape/Landscape";
import Slider from "./Slider/Slider";
import StatasSection from "./StatasSection/StatasSection";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Agricultural></Agricultural>
            <Landscape></Landscape>
            <StatasSection></StatasSection>
            <WhyChooseUs></WhyChooseUs>
        </div>
    );
};

export default Home;