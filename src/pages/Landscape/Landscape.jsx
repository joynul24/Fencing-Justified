import SectionSlider from "../../components/hooks/SectionSlider";
import SliderCard from "../../components/SliderCard/SliderCard";
import img1 from "../../assets/image (3).png";
import img2 from "../../assets/image (4).png";
import img3 from "../../assets/image (5).png";
import img4 from "../../assets/image (6).png";

const Landscape = () => {
  const slidesData = [
    <SliderCard
      img={img1}
      title="Antiqo Fence"
      price="₹10,024.00 – ₹14,984.82"
    ></SliderCard>,
    <SliderCard
      img={img2}
      title="JF Australian Trellis"
      price="₹6,962.00"
    ></SliderCard>,
    <SliderCard
      img={img3}
      title="JF Polyhex Mesh"
      price="₹4,050.00 – ₹10,770.00"
    ></SliderCard>,
    <SliderCard
      img={img4}
      title="JF Privezy Grass Wall"
      price="₹1,646.10 – ₹18,284.10"
    ></SliderCard>,
    <SliderCard
      img={img2}
      title="JF Privezy Grass Wall"
      price="₹1,646.10 – ₹18,284.10"
    ></SliderCard>,
    <SliderCard
      img={img1}
      title="JF Privezy Grass Wall"
      price="₹1,646.10 – ₹18,284.10"
    ></SliderCard>,
    <SliderCard
      img={img3}
      title="JF Privezy Grass Wall"
      price="₹1,646.10 – ₹18,284.10"
    ></SliderCard>,
  ];
  return (
    <div className="my-8 md:my-20 lg:my-28">
      <div className="container">
        <h1 className="text-xl md:text-3xl lg:text-4xl font-medium">
          Landscape Products
        </h1>
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

export default Landscape;
