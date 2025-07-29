const SliderCard = ({ img, title, price }) => {
  return (
    <div className="flex flex-col bg-[#F2F4F6] shadow-sm rounded p-3">
      <div>
        <figure>
          <img
            src={img}
            alt="agricultural img"
            className="w-full rounded-xl h-40 object-cover"
          />
        </figure>
        <div className="px-2">
          <h2 className="text-lg font-semibold mt-4 overflow-hidden whitespace-nowrap text-ellipsis">{title}</h2>
          <p className="text-gray-600 mt-3 line-clamp-2">{price}</p>
        </div>
      </div>

      {/* Button at bottom */}
      <div className="px-2 mt-5">
        <button className="btn-primary">Shop Now</button>
      </div>
    </div>
  );
};
export default SliderCard;