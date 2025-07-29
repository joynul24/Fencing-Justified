import SectionSlider from "../../components/hooks/SectionSlider";
import SliderCard from "../../components/SliderCard/SliderCard";
import img1 from "../../assets/image.png"
import img2 from "../../assets/image-8.png"
import img3 from "../../assets/image (1).png"
import img4 from "../../assets/image (2).png"

const Agricultural = () => {
  const slidesData = [
    <SliderCard
    img={img1}
    title="JF Barbed Wire- 270 GSM"
    price="₹4,995.00"
    ></SliderCard>,
    <SliderCard
    img={img2}
    title="FGC RustFree Fencing Poles"
    price="₹499.00 – ₹1,589.00"
    ></SliderCard>,
    <SliderCard
    img={img3}
    title="GI Poultry Mesh"
    price="₹1,260.00 – ₹10,750.00"
    ></SliderCard>,
    <SliderCard
    img={img4}
    title="JF Bluelink Mesh"
    price="₹3,067.50 – ₹6,362.50"
    ></SliderCard>,
     <SliderCard
    img={img2}
    title="FGC RustFree Fencing Poles"
    price="₹499.00 – ₹1,589.00"
    ></SliderCard>,
     <SliderCard
    img={img1}
    title="JF Barbed Wire- 270 GSM"
    price="₹4,995.00"
    ></SliderCard>,
     <SliderCard
    img={img3}
    title="GI Poultry Mesh"
    price="₹1,260.00 – ₹10,750.00"
    ></SliderCard>,
  ];
  return (
    <div className="md:my-20 lg:my-28">
      <div className="container">
      <h1 className="text-xl md:text-3xl lg:text-4xl font-medium">Agricultural Products</h1>
      <div className="mt-5 md:mt-8">
        <SectionSlider
           slides={slidesData}
          slidesPerView={4}
          centeredSlides={false}
        ></SectionSlider>
      </div>
    </div>
    </div>
  );
};

export default Agricultural;
