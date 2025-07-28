const Banner1 = ({ img, title, subTitle }) => {
  return (
    <div className="flex flex-col md:flex-row gap-6 md:gap-10 p-4 md:p-8 bg-[#F2F4F6] items-center rounded">
      {/* Image Container */}
      <div className="banner1 flex-shrink-0 p-4 md:p-11 w-full md:w-1/2">
        <img
          src={img}
          alt="main banner1"
          className="w-full h-auto rounded object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h3 className="text-3xl md:text-5xl lg:text-6xl font-medium leading-tight">
          {title}
        </h3>
        <p className="text-base md:text-xl text-gray-600 mt-4 md:mt-5 mb-6 md:mb-10">
          {subTitle}
        </p>
        <button className="btn-primary px-6 py-3 text-base md:text-lg">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default Banner1;
