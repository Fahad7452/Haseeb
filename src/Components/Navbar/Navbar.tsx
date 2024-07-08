import React from 'react'
import  { useState } from 'react';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
      setIsOpen(!isOpen);
    };
  return (
    <nav className="bg-white ">
    <div className="max-w-7xl mx-auto px-4 md:px-10 py-2 flex justify-between items-center">
      {/* First Section: Logo */}
      <div className="flex  gap-2 items-center">
        <svg width="45" height="45" viewBox="0 0 81 54" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40.5 50.3879C48.5703 45.7195 54 36.9938 54 27C54 17.0062 48.5703 8.28055 40.5 3.61212C44.4713 1.31482 49.0821 0 54 0C68.9117 0 81 12.0883 81 27C81 41.9117 68.9117 54 54 54C49.0821 54 44.4713 52.6852 40.5 50.3879ZM40.5 50.3879C36.5287 52.6852 31.9179 54 27 54C12.0883 54 0 41.9117 0 27C0 12.0883 12.0883 0 27 0C31.9179 0 36.5287 1.31482 40.5 3.61212C32.4297 8.28055 27 17.0062 27 27C27 36.9938 32.4297 45.7195 40.5 50.3879Z" fill="#7F56D9"/>
        </svg>
        <span className=" text-xl font-bold">Onlinetutor.</span>
      </div>

      {/* Second Section: Navigation Links */}
      <div className="hidden md:flex space-x-3 lg:space-x-6">
        <a href="#" className="text-[#55557A] font-medium  text-[15px] lg:text-base transition duration-300">Home</a>
        <a href="#" className="text-[#55557A] font-medium  text-[15px] lg:text-base  transition duration-300">Course</a>
        <a href="#" className="text-[#55557A] font-medium  text-[15px] lg:text-base transition duration-300">Partners</a>
        <a href="#" className="text-[#55557A] font-medium  text-[15px] lg:text-base transition duration-300">Universities</a>
        <a href="#" className="text-[#55557A] font-medium  text-[15px] lg:text-base transition duration-300">Blog</a>
        <a href="#" className="text-[#55557A] font-medium  text-[15px] lg:text-base transition duration-300">Contact</a>
      </div>

      {/* Third Section: Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="bg-white text-black px-4 font-medium py-2 rounded h transition duration-300">Sign in</button>
        <button className="bg-[#7F56D9] text-white px-4 py-2 font-medium rounded-full  transition duration-300">Contact Us</button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-gray-600 hover:text-blue-600 focus:outline-none">
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
    </div>

    {/* Mobile Menu */}
    <div className={`md:hidden transition-all duration-500 ease-in-out transform ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
      <a href="#" className="block px-4 py-2 text-[#55557A] font-medium text-[15px] lg:text-base transition duration-300">Home</a>
      <a href="#" className="block px-4 py-2 text-[#55557A] font-medium text-[15px] lg:text-base transition duration-300">University</a>
      <a href="#" className="block px-4 py-2 text-[#55557A] font-medium text-[15px] lg:text-base transition duration-300">Partners</a>
      <a href="#" className="block px-4 py-2 text-[#55557A] font-medium text-[15px] lg:text-base transition duration-300">About</a>
      <a href="#" className="block px-4 py-2 text-[#55557A] font-medium text-[15px] lg:text-base transition duration-300">Blog</a>
      <a href="#" className="block px-4 py-2 text-[#55557A] font-medium text-[15px] lg:text-base transition duration-300">Course</a>
      <div className="flex flex-col px-4 py-2 space-y-2">
        <button className="bg-white text-[#55557A] px-4 py-2 rounded font-medium transition duration-300">Sign in</button>
        <button className="bg-[#7F56D9] text-white px-4 py-2 rounded  font-medium transition duration-300">Contact Us</button>
      </div>
    </div>
  </nav>
  )
}

export default Navbar
