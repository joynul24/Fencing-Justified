import Agricultural from "./Agricultural/Agricultural";
import Landscape from "./Landscape/Landscape";
import Slider from "./Slider/Slider";
import StatasSection from "./StatasSection/StatasSection";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Agricultural></Agricultural>
            <Landscape></Landscape>
            <StatasSection></StatasSection>
        </div>
    );
};

export default Home;