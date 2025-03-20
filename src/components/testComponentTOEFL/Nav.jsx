// import { Link } from "react-router-dom";
// import { LuMenu } from "react-icons/lu";
// import { useState } from "react";

// const Nav = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="bg-white shadow-md">
//       <div className="container mx-auto px-4">
//         <nav className="flex items-center justify-between px-6 py-4">
//           {/* Logo */}
//           <Link className="nav-brand" to="https://www.jamboreeindia.com/">
//             <img
//               className="h-[40px]"
//               src="https://www.jamboreeindia.com/assets/home/img/logo.webp"
//               alt="Logo"
//             />
//           </Link>

//           {/* Mobile Menu Icon */}
//           <button
//             className="lg:hidden text-3xl"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             <LuMenu />
//           </button>

//           {/* Navigation Links */}
//           <div
//             className={`${
//               isOpen ? "block" : "hidden"
//             } lg:flex flex-col lg:flex-row text-[14px] font-semibold gap-4 lg:gap-8 absolute top-[70px] left-0 w-full lg:static bg-white lg:bg-transparent shadow-lg lg:shadow-none p-6 lg:p-0`}
//           >
//             <Link to="#gmat" className="hover:text-gray-600 block lg:inline">
//               GMAT
//             </Link>
//             <Link to="#prep-modes" className="hover:text-gray-600 block lg:inline">
//               GMAT PREP MODES
//             </Link>
//             <Link to="#about-gmat" className="hover:text-gray-600 block lg:inline">
//               ABOUT GMAT
//             </Link>
//             <Link to="#mba-admission" className="hover:text-gray-600 block lg:inline">
//               MBA ADMISSION
//             </Link>
//             <Link to="#top-scores" className="hover:text-gray-600 block lg:inline">
//               TOP SCORES
//             </Link>
//             <Link to="#prep-resources" className="hover:text-gray-600 block lg:inline">
//               GMAT PREP RESOURCES
//             </Link>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Nav;
