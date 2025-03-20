import ShimmerButton from "../../magicui/shimmer-button";

const Card3 = ({ value }) => {
  return (
    <div className="p-6 sm:p-8 bg-white shadow-2xl rounded-2xl relative">
      {/* Image Section */}
      <div className="flex justify-center sm:justify-start mb-4">
        <img className="w-full sm:w-[20vw] object-contain" src={value.url} alt="" />
      </div>

      {/* Text Section */}
      <div className="flex flex-col items-start text-left">
        <h1 className="text-lg sm:text-xl font-semibold text-gray-800">{value.title}</h1>
        <p className="mt-2 text-sm sm:text-base font-normal opacity-80 text-gray-600 text-left">
          {value.text}
        </p>
      </div>

      {/* Button Section */}
      <div className="flex justify-start mt-4">
        <button className=" text-white px-4 py-2 rounded-lg  transition-all duration-300">
          <ShimmerButton>
          {value.button}
          </ShimmerButton>
        </button>
      </div>
    </div>
  );
};

export default Card3;
