import { useState } from 'react';
import { FaFacebook, FaGooglePlay, FaInstagram, FaTwitter } from 'react-icons/fa';
import { IoReorderThreeOutline } from 'react-icons/io5'

const Header = () => {
  const [show,setShow]=useState(true);
  const handleShow =()=>{
    setShow(!show)
  }
  return (
    <div className='w-full bg-gray-700/80 absolute z-10 text-white'>
      <div className='max-w-[1140px] mx-auto min-h-[50px] flex justify-between items-center'>
        <ul className='hidden sm:flex px-4 gap-4'>
          <li className='hover:text-black cursor-pointer text-xl uppercase'>Home</li>
          <li className='hover:text-black cursor-pointer text-xl uppercase'>Gallery</li>
          <li className='hover:text-black cursor-pointer text-xl uppercase'>Deals</li>
          <li className='hover:text-black cursor-pointer text-xl uppercase'>Contact Us</li>
        </ul>
        <div className='flex justify-between px-4 gap-4 items-center'>
          <FaFacebook size={20} className='text-white text-[16px] cursor-pointer hover:text-blue-600'/>
          <FaTwitter size={20} className='text-white text-[16px] cursor-pointer hover:text-green-600'/>
          <FaGooglePlay size={20} className='text-white text-[16px] cursor-pointer hover:text-red-600'/>
          <FaInstagram size={20} className='text-white text-[16px] cursor-pointer hover:text-pink-600'/>
          <div className='sm:hidden z-10 cursor-pointer'>
            <IoReorderThreeOutline size={20} className='mr-4 cursor-pointer' onClick={handleShow}/>
          </div>
        </div>
      </div>

      <div onClick={handleShow} className={show ? "overflow-y-hidden md:hidden ease-in duration-300 absolute text-gray-300 left-0 top-0 w-full h-screen bg-black/90 px-4 py-7 flex":"absolute top-0 h-screen left-[-100%] ease-in duration-300"}>
        <div>
          <ul className='h-screen w-full text-center pt-12'>
            <li className='text-2xl py-8 uppercase hover:underline underline-offset-8'>Home</li>
            <li className='text-2xl py-8 uppercase hover:underline underline-offset-8'>Gallery</li>
            <li className='text-2xl py-8 uppercase hover:underline underline-offset-8'>Deals</li>
            <li className='text-2xl py-8 uppercase hover:underline underline-offset-8'>Contact</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header