
// import React from "react";
// import boys from "../../Images/51ed70b12e7c3362590c705632fa7942.jpg";
// import { FaInstagram } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa6";
// import { FaFacebook } from "react-icons/fa";
// import { GiSplitCross } from "react-icons/gi";
// import { ArrowUpRight } from "lucide-react";




// const CourseCard = ({ icon, title, description }) => (
//   <div className="flex items-start gap-4 p-4">
//     <div className="w-12 h-12 flex-shrink-0">{icon}</div>
//     <div>
//       <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
//       <p className="text-gray-600">{description}</p>
//     </div>
//   </div>
// );

// const LinkCard = ({ title, description, href }) => (
//   <a
//     href={href}
//     className="block mb-6 hover:bg-gray-50 p-4 rounded-lg transition-colors duration-200"
//   >
//     <div className="flex items-start justify-between">
//       <h3 className="text-indigo-600 font-semibold text-lg flex items-center gap-2">
//         {title}
//         <ArrowUpRight className="w-4 h-4" />
//       </h3>
//     </div>
//     <p className="text-gray-600 mt-2 text-base">{description}</p>
//   </a>
// );

// const EngineeringStory = () => {

//   const links = [
//     {
//       title: "Apply Now",
//       description:
//         "Start your journey by submitting your application today and take the first step toward an exciting engineering career.",
//       href: "#apply",
//     },
//     {
//       title: "Program Details",
//       description:
//         "Explore our diverse engineering programs and discover the curriculum, faculty, and unique features of each.",
//       href: "#programs",
//     },
//     {
//       title: "Tuition And Financial Aid",
//       description:
//         "Find detailed information on tuition costs, payment plans, and available financial aid options to support your education",
//       href: "#financial-aid",
//     },
//   ]



//   const courses = [
//     {
//       icon: (
//         <div className="bg-indigo-100 w-12 h-12 rounded-lg flex items-center justify-center">
//           <svg
//             viewBox="0 0 24 24"
//             className="w-8 h-8 text-indigo-600"
//             fill="currentColor"
//           >
//             <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
//           </svg>
//         </div>
//       ),
//       title: "AI And Machine Learning",
//       description: "Learn algorithms and applications of AI.",
//     },
//     {
//       icon: (
//         <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center">
//           <svg
//             viewBox="0 0 24 24"
//             className="w-8 h-8 text-green-600"
//             fill="currentColor"
//           >
//             <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
//           </svg>
//         </div>
//       ),
//       title: "Cybersecurity Engineering",
//       description: "Protect networks and data in the digital age.",
//     },
//     {
//       icon: (
//         <div className="bg-emerald-100 w-12 h-12 rounded-lg flex items-center justify-center">
//           <svg
//             viewBox="0 0 24 24"
//             className="w-8 h-8 text-emerald-600"
//             fill="currentColor"
//           >
//             <path d="M17 7l-5-4-5 4v9h10V7z" />
//             <path d="M4 11h4M16 11h4M12 12v4" />
//           </svg>
//         </div>
//       ),
//       title: "Sustainable EnergySystems",
//       description: "Study renewable energy technologies.",
//     },
//     {
//       icon: (
//         <div className="bg-orange-100 w-12 h-12 rounded-lg flex items-center justify-center">
//           <svg
//             viewBox="0 0 24 24"
//             className="w-8 h-8 text-orange-600"
//             fill="currentColor"
//           >
//             <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 18a8 8 0 118-8 8 8 0 01-8 8z" />
//             <path d="M12 6a6 6 0 106 6 6 6 0 00-6-6zm0 10a4 4 0 114-4 4 4 0 01-4 4z" />
//           </svg>
//         </div>
//       ),
//       title: "Robotics And Automation",
//       description: "Design and program robots for real-world tasks.",
//     },
//   ];



//   return (
//     <div className="flex  gap-20 px-20">
//       <div className="w-1/3">
//         <p>
//           In today’s ever-evolving world, storytelling has become a powerful
//           tool for connection. Revision provides a unique platform for
//           individuals to share their stories.
//         </p>
//         <p>
//           Revision is more than a typical content hub. It’s a dynamic space for
//           meaningful conversations and personal stories that resonate with
//           people on an emotional level. Whether you are looking for inspiration,
//           comfort, or just a different perspective on life, Revision offers a
//           wide range of narratives to explore.
//         </p>

//         <p>
//           So, what makes Revision stand out as the place for heartfelt
//           reflections?
//         </p>

//         <p>
//           Revision is more than a typical content hub. It’s a dynamic space for
//           meaningful conversations and personal stories that resonate with
//           people on an emotional level. Whether you are looking for inspiration,
//           comfort, or just a different perspective on life, Revision offers a
//           wide range of narratives to explore.
//         </p>
//         <p>
//           With covering everything from love and relationships to
//           personaldevelopment and lifestyle, it encourages readers to explore
//           topics that touch on their emotions and experiences.
//         </p>

//         <h2 className="text-3xl font-bold mb-6">Stories that Matter</h2>
//         <p className="text-gray-700 mb-6 leading-relaxed">
//           At the core of Revision is a commitment to delivering stories that
//           matter. Unlike traditional media platforms or news, Revision invites
//           readers into a world of deeply personal narratives. The website’s
//           title, “Heartfelt Reflections: Stories of Love, Loss, and Growth,”
//           signals this intent clearly, inviting you to journey through the most
//           intimate aspects of human experience.
//         </p>
//         <p className="text-gray-700 mb-6 leading-relaxed">
//           But we’re not just talking about written content — there are many ways
//           that Revision fosters connection and creativity. The different types
//           of features include:
//         </p>
//         <ul className="list-disc list-inside text-gray-700 space-y-2">
//           <li>
//             Author Profiles: Each contributor has a detailed profile, allowing
//             readers to connect with their personal journey and social media
//             presence.
//           </li>
//           <li>
//             <strong>Experience Widgets:</strong> Contributors showcase their
//             skills. Experience Widgets: Contributors showcase their professional
//             growth and skills, giving readers insight into their expertise.
//           </li>
//           <li>
//             Technologies Section: Creators highlight the tools they use, such as
//             Figma, Photoshop, and more, providing transparency in their creative
//             processes.
//           </li>
//           <li>
//             Creating Widget: A space where contributors can link to external
//             projects and portfolios, expanding their reach beyond the platform.
//           </li>
//         </ul>
//       </div>

//       <div>
//         {/* <img className="w-full h-48 object-cover" src={boys} alt="" />
//         <div className="p-6">
//           <h2 className="text-xl font-semibold mb-2 text-gray-800">
//             Rahul Singh
//           </h2>
//           <p className="text-gray-600 text-base mb-4">
//             Enrolling in this engineering program transformed my career. The
//             hands-on experience and innovative courses equipped me with skills
//             that are highly valued in the industry. I landed my dream job right
//             after graduation!
//           </p>
//           <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
//             hhhhhhhhg
//           </button>
//         </div> */}

//         <div className="shadow-md">
//           <div className="w-[10vw] h-[20vh] overflow-hidden">
//             <img
//               src={boys}
//               alt=""
//               className="w-20 h-20 rounded-full object-cover"
//             />
//           </div>
//           <div className="">
//             <h3 className="text-xl font-bold mb-2">Rahul Singh</h3>
//             <p className="text-gray-600 text-sm mb-4">Class of 2023</p>
//             <p className="text-gray-700 mb-6 w-1/3">
//               Enrolling in this engineering program transformed my career. The
//               hands-on experience and innovative courses equipped me with skills
//               that are highly valued in the industry. I landed my dream job
//               right after graduation!
//             </p>

//             <div className="flex items-center">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 className="h-5 w-5 text-gray-500 mr-2"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
//                 />
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
//                 />
//               </svg>
//               <p className="text-gray-600  text-xl font-semibold">
//                 Bhopal, Madhya Pradesh
//               </p>
//             </div>
//             <div className="flex items-center">
//               <p className="text-gray-600  text-2xl font-bold">
//                 <GiSplitCross />{" "}
//               </p>
//               <p className="text-gray-600 text-2xl font-bold">
//                 <FaFacebook />{" "}
//               </p>
//               <p className="text-gray-600 text-2xl font-bold">
//                 <FaInstagram />
//               </p>

//               <p className="text-gray-600 text-2xl font-bold">
//                 <FaLinkedin />
//               </p>
//             </div>
//           </div>
//           <div className="max-w-2xl mx-auto p-6 bg-white rounded-xl shadow-sm">
//             <h2 className="text-gray-700 font-semibold mb-6 uppercase text-sm">
//               Links
//             </h2>
//             <div className="space-y-2">
//               {links.map((link, index) => (
//                 <LinkCard
//                   key={index}
//                   title={link.title}
//                   description={link.description}
//                   href={link.href}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//         <div className="shadow-md">
//           <h1>Upcoming Events</h1>
//           <div className="flex items-cwenter">
//             <div className="text-xl font-bold">Open House Day</div>
//             <div>2025</div>
//             <p>
//               Explore our campus, meet faculty, and learn about our engineering
//               programs.
//             </p>
//           </div>
//           <div className="flex items-cwenter">
//             <div className="text-xl font-bold">Virtual Info Session</div>
//             <div>2025</div>
//             <p>
//               Join us online to discover admissions details, course offerings,
//               and career opportunities.
//             </p>
//           </div>
//           <div className="flex items-cwenter">
//             <div className="text-xl font-bold">Engineering Workshop Series</div>
//             <div>2025</div>
//             <p>
//               Participate in hands-on workshops covering topics like robotics,
//               AI, and sustainable energy.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div>
//         <div className="max-w-2xl mx-auto p-6">
//           <div className="border border-blue-200 rounded-lg">
//             <div className="border-b border-blue-200 px-6 py-4">
//               <h2 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
//                 NEW COURSES
//               </h2>
//             </div>

//             <div className="divide-y divide-blue-200">
//               {courses.map((course, index) => (
//                 <CourseCard
//                   key={index}
                 
//                   image={course.icon}
//                   title={course.title}
//                   description={course.description}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EngineeringStory;



import React from 'react'

const EngineeringStory = () => {
  return (
    <div>EngineeringStory add the work now</div>
  )
}

export default EngineeringStory