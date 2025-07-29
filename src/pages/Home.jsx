import Agricultural from "./Agricultural/Agricultural";
import Landscape from "./Landscape/Landscape";
import Slider from "./Slider/Slider";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <Agricultural></Agricultural>
            <Landscape></Landscape>
        </div>
    );
};

export default Home;