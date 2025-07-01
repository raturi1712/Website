// import { Button } from '@/components/ui/button'
// import { Recycle } from 'lucide-react'
// import React from 'react'
// import { Link } from 'react-router-dom'

// const Header = () => {
//   return (
// <header className="bg-white shadow-lg">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center space-x-2">
//               <Recycle className="h-8 w-8 text-green-600" />
//               <h1 className="text-2xl font-bold text-gray-900">GreenoBin</h1>
//             </div>
//             <nav className="hidden md:flex space-x-8">
//               <Link to="/" className="text-gray-700 hover:text-green-600 transition-colors">Home</Link>
//               <Link to="/services" className="text-gray-700 hover:text-green-600 transition-colors">Services</Link>
//               <Link to="/about" className="text-gray-700 hover:text-green-600 transition-colors">About</Link>
//               <Link to="/contact" className="text-gray-700 hover:text-green-600 transition-colors">Contact</Link>
//             </nav>
//             {/* <Button asChild className="bg-green-600 hover:bg-green-700">
//               <Link to="/login">Get Started</Link>
//             </Button> */}
//           </div>
//         </div>
//       </header>  )
// }

// export default Header
import { Button } from '@/components/ui/button';
import { Leaf, Recycle } from 'lucide-react';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Leaf className="h-8 w-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">GreenHeap</h1>
          </div>
          {/* Hamburger Menu Button */}
          <button
            className="md:hidden text-gray-700 hover:text-green-600 focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
          {/* Navigation Links */}
<nav
  className={`${
    isMenuOpen ? 'block' : 'hidden'
  } md:flex space-x-8 absolute md:static bg-white md:bg-transparent top-16 left-0 w-full md:w-auto shadow-md md:shadow-none`}
>
  <Link
    to="/"
    className="block md:inline-block px-4 py-2 text-gray-700 hover:text-green-600 transition-colors"
    onClick={() => setIsMenuOpen(false)}
  >
    Home
  </Link>
  <Link
    to="/services"
    className="block md:inline-block px-4 py-2 text-gray-700 hover:text-green-600 transition-colors"
    onClick={() => setIsMenuOpen(false)}
  >
    Services
  </Link>
  <Link
    to="/about"
    className="block md:inline-block px-4 py-2 text-gray-700 hover:text-green-600 transition-colors"
    onClick={() => setIsMenuOpen(false)}
  >
    About
  </Link>
  <Link
    to="/contact"
    className="block md:inline-block px-4 py-2 text-gray-700 hover:text-green-600 transition-colors"
    onClick={() => setIsMenuOpen(false)}
  >
    Contact
  </Link>
</nav>
        </div>
      </div>
    </header>
  );
};

export default Header;