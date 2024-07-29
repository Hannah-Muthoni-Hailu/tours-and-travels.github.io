import { TiMessageTyping } from 'react-icons/ti';
import { FaPhone, FaRegClock } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div className='bg-slate-300 shadow-md'>
      <div className='flex justify-between items-center px-5 py-2 max-w-[1140px] mx-auto'>
        <div className='flex items-center gap-1'>
          <TiMessageTyping  size={30} className='text-[var(--primary-dark)] mr-2 cursor-pointer'/>
          <h1 className='text-xl font-bold text-gray-700 cursor-pointer'>Enjoyment</h1>
        </div>
        <div className='flex'>
          <div className='hidden md:flex items-center px-6'>
            <FaRegClock size={18} className='text-[var(--primary-darkk)] mr-2' />
            <p className='text-sm text-gray-700 cursor-pointer hover:underline underline-offset-8'>9AM-10PM</p>
          </div>
          <div className='hidden md:flex items-center px-6'>
            <FaPhone size={18} className='text-[var(--primary-darkk)] mr-2 ' />
            <p className='text-sm text-gray-700 cursor-pointer hover:underline underline-offset-8'>1234567890</p>
          </div>
          <button className='px-3 py-2 bg-gradient-to-br from-amber-500 via-orange-700 to-lime-300 rounded-xl cursor-pointer hover:border-2 border-solid border-black '>Connect with us</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar