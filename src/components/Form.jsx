
const Form = () => {
  return (
    <div className="max-w-[1140px] mx-auto w-full p-4">
      <form action="" className="lg:flex lg:justify-between w-full items-center">
        <div className="flex flex-col my-2 py-2">
          <label htmlFor="" className="text-xl">Destination</label>
          <select className="lg:w-[300px] md:w-full border rounded-md p-2">
            <option value="op1">Lorem Ipsum</option>
            <option value="op2">Lorem Ipsum</option>
            <option value="op3">Lorem Ipsum</option>
            <option value="op4">Lorem Ipsum</option>
          </select>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label htmlFor="" className="text-xl">Check In</label>
            <input type="date" className="border rounded-md p-2"/>
          </div>
          <div className="flex flex-col w-full lg:max-w-[250px] my-2 p-2">
            <label htmlFor="" className="text-xl">Check Out</label>
            <input type="date" className="border rounded-md p-2"/>
          </div>
        </div>
        <div className="flex flex-col my-2 p-2 w-full">
          <label htmlFor="" className="text-xl">Search</label>
          <button className='px-3 py-2 bg-gradient-to-br from-amber-500 via-orange-700 to-lime-300 rounded-xl cursor-pointer hover:border-2 border-solid border-black'>Rates and Availability</button>
        </div>
      </form>
    </div>
  )
}

export default Form