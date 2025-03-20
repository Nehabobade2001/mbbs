
const Card = ({value}) => {
  return (
    <div className="flex  flex-col items-center justify-center h-fit w-fit px-12 mt-2 py-4 rounded-full bg-white shadow-lg ">
      <div>
        <img src={value.url} alt="" />
      </div>
      <p className="w-[14vw] mt-2 font-medium opacity-80 font-poppins">{value.text}</p>
    </div>
  )
}

export default Card