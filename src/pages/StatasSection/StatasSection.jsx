import star from "../../assets/star.png";
import face from "../../assets/face.png";
import jeep from "../../assets/jeep.png";

const StatasSection = () => {
  return (
    <div className="mt-12 md:mt-28 mb-10 md:mb-28 relative overflow-hidden">
      <div className="container">
        <div className="bg-[#002B55] pb-5 pt-8 md:py-20 text-white rounded-3xl relative overflow-hidden">
          <h2 className="text-xl md:text-3xl lg:text-4xl font-medium text-center px-1">
            Trusted by over 6K+ customers
          </h2>

          {/* badge container */}
          <div className="flex flex-wrap justify-center md:justify-evenly flex-row mt-9 md:mt-12 gap-5">
            {/* card 1 */}
            <div className="flex flex-col md:flex-row text-center md:text-left items-center gap-5 mb-5 md:mb-0">
              <img className="bg-white p-2 md:p-4 rounded-full" src={star} alt="" />
              <div>
                <h4 className="md:text-2xl font-bold md:font-medium">Premium</h4>
                <p className="md:text-xl">Premium</p>
              </div>
            </div>

            {/* card 2 */}
            <div className="flex flex-col md:flex-row text-center md:text-left items-center gap-5 mb-5 md:mb-0">
              <img className="bg-white p-2 md:p-4 rounded-full" src={face} alt="" />
              <div>
                <h4 className="md:text-2xl font-bold md:font-medium">4000+</h4>
                <p className="md:text-xl">Google Review</p>
              </div>
            </div>

            {/* card 3 */}
            <div className="flex flex-col md:flex-row text-center md:text-left items-center gap-5 mb-5 md:mb-0">
              <img className="bg-white p-2 md:p-4 rounded-full" src={jeep} alt="" />
              <div>
                <h4 className="md:text-2xl font-bold md:font-medium">Delivery</h4>
                <p className="md:text-xl">Across India</p>
              </div>
            </div>
          </div>

          {/* glow line at bottom center */}
          <div className="absolute left-1/2 bottom-0 transform -translate-x-1/2 translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.4),_transparent)] blur-3xl pointer-events-none z-10 w-100 h-80" />
        </div>
      </div>
    </div>
  );
};

export default StatasSection;
