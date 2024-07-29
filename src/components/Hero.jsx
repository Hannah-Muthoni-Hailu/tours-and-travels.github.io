
const Hero = () => {
  return (
      <div className="w-full h-[90vh]">
        <img src="https://images.pexels.com/photos/1261728/pexels-photo-1261728.jpeg?auto=compress&cs=tinysrgb&w=600" alt="safari" className="w-full h-full object-cover"/>
        <div className="max-w-[1140px] mx-auto">
          <div className="absolute top-[-30%] w-full md:top-[40%] max-w-[600px] h-full flex flex-col text-black p-4 ">
            <h1 className="font-bold text-[40px] bg-clip-text text-transparent bg-gradient-to-r from-orange-800 via-orange-400 to-teal-300">Find Your Perfect Destination</h1>
            <h2 className="text-3xl py-2 italic text-white font-bold">For your family and friends</h2>
            <p className="text-lg p-1 py-10 text-white">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Dignissimos alias sunt est blanditiis explicabo excepturi <br />
              quos officia sit minus ex? Dolores molestias sequi totam <br />
              ipsam ratione neque quisquam, illo placeat.
            </p>
          </div>
        </div>
      </div>
  )
}

export default Hero
