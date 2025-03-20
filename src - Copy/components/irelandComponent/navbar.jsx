import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Menu, X } from 'lucide-react'; // Import icons for mobile menu toggle

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { name: 'FAST FACTS', to: 'studyHero' },
    { name: 'TOP UNIVERSITIES', to: 'topUniversities' },
    { name: 'ADMISSIONS', to: 'admissions' },
    { name: 'SCHOLARSHIPS', to: 'scholarships' },
    { name: 'VISA', to: 'visa' },
    { name: 'COST OF LIVING', to: 'costOfLiving' },
    { name: 'WORK OPPORTUNITIES', to: 'opportunities' },
    { name: 'FAQS', to: 'faqs' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-28 z-50 w-full md:w-[90%] mx-auto rounded">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Hamburger Button for Mobile */}
        <button
          className="md:hidden absolute left-4 z-50" // Ensure button has a high z-index
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 text-[#233871]" />
          ) : (
            <Menu className="w-6 h-6 text-[#233871]" />
          )}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex justify-center space-x-8">
          {menuItems.map((item, index) => (
            <li key={index} className="cursor-pointer px-4 font-poppins">
              <ScrollLink
                to={item.to}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-[#233871] border-b-2 border-[#233871]"
                className="text-[#233871] hover:text-[#f6c16f] font-poppins"
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu (dropdown when hamburger is clicked) */}
        {isOpen && (
          <ul className="md:hidden fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center space-y-6 z-40"> {/* Fullscreen Menu */}
            {menuItems.map((item, index) => (
              <li key={index} className="text-[#233871] hover:text-[#f6c16f] cursor-pointer px-4 text-xl">
                <ScrollLink
                  to={item.to}
                  smooth={true}
                  duration={500}
                  spy={true}
                  activeClass="text-[#233871] border-b-3 border-[#233871]"
                  onClick={toggleMenu} // Close menu on click
                  className="cursor-pointer"
                >
                  {item.name}
                </ScrollLink>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
