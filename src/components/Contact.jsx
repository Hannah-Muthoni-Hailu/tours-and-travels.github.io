
const Contact = () => {
  return (
    <div className="max-w-[1140px] mx-auto w-full p-4 py-16">
      <h2 className="text-center font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-800 via-orange-400 to-teal-300">Send Us a Message</h2>
      <p className="text-center text-gray-700 py-2">Ask about anything...</p>
      <div className="grid md:grid-cols-2">
        <img src="https://images.pexels.com/photos/547119/pexels-photo-547119.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" className="w-full md:h-full object-cover p-2 max-h-[500px] h-[200px] rounded-md "/>
        <form action="">
         <div>
          <div className="grid grid-cols-2">
              <input type="text" placeholder="First Name" className="border-2 border-solid border-gray-400 m-2 p-2 outline-none rounded-md"/>
              <input type="text" placeholder="Last Name" className="border-2 border-solid border-gray-400 m-2 p-2 outline-none rounded-md"/>
              <input type="email" placeholder="Email" className="border-2 border-solid border-gray-400 m-2 p-2 outline-none rounded-md"/>
              <input type="number" placeholder="Phone Number" className="border-2 border-solid border-gray-400 m-2 p-2 outline-none rounded-md"/>
            
              <input type="text" placeholder="Address" className="border-2 border-solid border-gray-400 m-2 p-2 outline-none rounded-md"/>
            </div>
            <div>
              <textarea placeholder="Message..." className="w-[550px] mx-2 border-2 border-solid border-gray-400 outline-none rounded-md"></textarea>
            </div>
            <div>
              <button className='w-[550px] px-3 py-2 bg-gradient-to-br from-amber-500 via-orange-700 to-lime-300 rounded-xl cursor-pointer hover:border-2 border-solid border-black '>Submit</button>
            </div>
         </div>
        </form>
      </div>
    </div>
  )
}

export default Contact