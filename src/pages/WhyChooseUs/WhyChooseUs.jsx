import imgBadge from "../../assets/Group 480.png";
import imgUser from "../../assets/Frame-8.png";
import imgReact from "../../assets/Frame-7.png";

const WhyChooseUs = () => {
  return (
    <div>
      <div className="container">
        <h2 className=" text-xl md:text-3xl lg:text-4xl font-medium text-center">
          Why Us{" "}
        </h2>
        <p className="text-gray-600 md:w-2xl mx-auto mt-3 md:mt-5 text-center">
          We specialize in delivering durable and innovative fencing solutions
          built to last. With a focus on quality and trust, we help secure
          spaces across industries and communities.
        </p>
        {/* card container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-18">
          {/* card 1 */}
          <div className="flex flex-col gap-5 bg-[#F2F4F6] px-10 py-9 rounded-3xl">
            <img className="w-[50px]" src={imgBadge} alt="imgBadge" />
            <h3 className="text-xl md:text-3xl font-medium">
              Unmatched Durability with Corrosion-Free Technology
            </h3>
            <p className="text-gray-600">
              Our JF-270 barbed wire features a robust 270 GSM zinc coating,
              ensuring superior resistance against rust and corrosion. Paired
              with stainless steel binding wire, our fencing solutions are
              designed to withstand harsh environmental conditions, offering
              longevity and reliability.
            </p>
          </div>
          {/* card 2 */}
          <div className="flex flex-col gap-5 bg-[#002B55] px-10 py-9 rounded-3xl text-white relative overflow-hidden lg:bottom-9 lg:z-10">
            {/* glow line at top right */}
            <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[radial-gradient(circle,_rgba(255,255,255,0.5),_transparent)] blur-3xl pointer-events-none z-10 rounded-full" />
            <img className="w-[50px]" src={imgUser} alt="imgBadge" />
            <h3 className="text-xl md:text-3xl font-medium">
              Customer-Centric Approach
            </h3>
            <p className="text-gray-200">
              At JF Products, customer satisfaction is paramount. We pride
              ourselves on delivering timely services, maintaining transparent
              communication, and ensuring a seamless purchasing experience. Our
              commitment to excellence is reflected in the positive feedback
              from our valued clients.
            </p>
          </div>
          {/* card 3 */}
          <div className="flex flex-col gap-5 bg-[#F2F4F6] px-10 py-9 rounded-3xl md:col-span-2 lg:col-span-1">
            <img className="w-[50px]" src={imgReact} alt="imgBadge" />
            <h3 className="text-xl md:text-3xl font-medium">
              Innovative and Diverse Product Range
            </h3>
            <p className="text-gray-600">
              We offer a wide array of fencing solutions, including Polyhex
              Mesh, Australian Trellis, and GI Poultry Mesh, catering to various
              needs from agricultural to residential applications. Our products
              combine functionality with aesthetic appeal, ensuring both
              security and style.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
