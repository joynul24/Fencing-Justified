import Agricultural from "./Agricultural/Agricultural";
import CustomerLove from "./CustomerLove/CustomerLove";
import Landscape from "./Landscape/Landscape";
import Services from "./Services/Services";
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
            <Services></Services>
            <CustomerLove></CustomerLove>
        </div>
    );
};

export default Home;