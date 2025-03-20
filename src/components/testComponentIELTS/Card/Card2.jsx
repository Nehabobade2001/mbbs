import ShimmerButton from "../../magicui/shimmer-button";
import ShimmerButtonTwo from "../../magicui/shimmer-button-Two";

const Card2 = ({ value }) => {
  return (
    <div className="flex flex-col items-center justify-center relative shadow-lg py-12 bg-white rounded-2xl">
      {/* Status Badges */}
      <div className="flex gap-2 absolute -top-4 left-0 opacity-90">
        {value.status.map((status, index) => (
          <div
            key={index}
            className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs"
          >
            {status}
          </div>
        ))}
      </div>

      {/* Image */}
      <div>
        <img src={value.url} alt={value.tittle} className="w-auto h-auto" />
      </div>

      {/* Title & Text */}
      <div className="text-center px-4 mt-6">
        <h1 className="font-semibold text-[#3e5ba9] text-lg">{value.tittle}</h1>
        <p className="mt-2 w-full text-slate-500 opacity-80">
          {value.text}
        </p>
      </div>

      {/* Buttons */}
      <div className="flex mt-2 w-full items-center justify-center">
        <button className=" px-2 py-2">
          <ShimmerButton>
          {value.btntext}
          </ShimmerButton>
        </button>
        <button className=" px-2 py-2">
          <ShimmerButtonTwo>
          {value.btntext2}
          </ShimmerButtonTwo>
        </button>
      </div>
    </div>
  );
};

export default Card2;
