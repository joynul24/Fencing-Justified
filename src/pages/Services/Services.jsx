import fencing from "../../assets/fencing.png";

const Services = () => {
  return (
    <div className="bg-[#D9ECFF] py-10 px-4 border border-[#a6d1fc] my-10 md:my-20">
      <div className="flex flex-wrap justify-evenly gap-6">
        <div className="flex items-center gap-4">
          <img className="w-[50px] md:w-[60px]" src={fencing} alt="Fencing" />
          <p className="text-lg font-medium text-[#002B55] whitespace-nowrap">
            Quality Product
          </p>
        </div>
        <div className="flex items-center gap-4">
          <img className="w-[50px] md:w-[60px]" src={fencing} alt="Shipping" />
          <p className="text-lg font-medium text-[#002B55] whitespace-nowrap">
            Shipping Across India
          </p>
        </div>
        <div className="flex items-center gap-4">
          <img className="w-[50px] md:w-[60px]" src={fencing} alt="Quality" />
          <p className="text-lg  font-medium text-[#002B55] whitespace-nowrap">
            Quality Product
          </p>
        </div>
        <div className="flex items-center gap-4">
          <img className="w-[50px] md:w-[60px]" src={fencing} alt="Shipping" />
          <p className="text-lg font-medium text-[#002B55] whitespace-nowrap">
            Shipping Across India
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
