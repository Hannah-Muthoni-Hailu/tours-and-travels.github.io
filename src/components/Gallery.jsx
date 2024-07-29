
const Gallery = () => {
  return (
      <div className="max-w-[1140px] mx-auto w-full px-4 py-16">
        <h2 className="text-center py-4 font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-orange-800 via-orange-400 to-teal-300">Gallery</h2>
        <div className="grid sm:grid-cols-5 gap-4">
          <div className="sm:col-span-3 col-span-2 row-span-2">
            <img className="w-full h-full object-cover" src="https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/1105389/pexels-photo-1105389.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
          <div>
            <img src="https://images.pexels.com/photos/1107717/pexels-photo-1107717.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          </div>
        </div>
      </div>
  )
}

export default Gallery