// import React from "react";

// const courses = [
//   { title: "INI-CET", color: "bg-[#F28482]" },
//   { title: "AIIMS PG", color: "bg-teal-200" },
//   { title: "JIPMER PG", color: "bg-purple-200" },
//   { title: "PGIMER", color: "bg-teal-300" },
//   { title: "FMGE", color: "bg-teal-400" },
//   { title: "DNB-PDCET", color: "bg-gray-800 text-white" },
//   { title: "CPMEE", color: "bg-orange-200" },
//   { title: "UPCET", color: "bg-red-300" },
// ];

// function CourseCard({ title, color }) {
//   return (
//     <div
//       className={`rounded-lg p-4 ${color} shadow-lg w-60 h-48 flex flex-col justify-between`}
//     >
//       <div>
//         <h3 className="text-3xl text-white font-bold mb-2">{title}</h3>
//         <p className="text-sm text-gray-600">
//           Minim dolor in amet nulla laboris enim dolore. Minim dolor in amet
//           nulla laboris enim dolore.
//         </p>
//       </div>
//       <div className="flex items-center justify-between text-sm text-gray-600">
//         <div className="flex items-center space-x-2">
//           <span>❤️ 20k</span>
//           <span>🔄</span>
//         </div>
//         <div style={{
//         clipPath: 'circle(41.4% at 100% 100%)',
//       }} className="text-white bg-black h-20 w-20">
//           View ➔
//         </div>
//       </div>
//     </div>
//   );
// }

// const EngineeringCors = () => {
//   return (
//     <div className="flex flex-col items-center">
//       <h2 className="text-3xl font-bold mb-8">Our Courses</h2>
//       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//         {courses.map((course, index) => (
//           <CourseCard key={index} title={course.title} color={course.color} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default EngineeringCors;

import React from "react";

const courses = [
  { title: "INI-CET", color: "bg-[#F28482]" },
  { title: "AIIMS PG", color: "bg-teal-200" },
  { title: "JIPMER PG", color: "bg-purple-200" },
  { title: "PGIMER", color: "bg-teal-300" },
  { title: "FMGE", color: "bg-teal-400" },
  { title: "DNB-PDCET", color: "bg-gray-800 text-white" },
  { title: "CPMEE", color: "bg-orange-200" },
  { title: "UPCET", color: "bg-red-300" },
];

function CourseCard({ title, color }) {
  return (
    <div
      className={`relative rounded-lg p-4 ${color} shadow-lg w-60 h-48 flex flex-col justify-between overflow-hidden`}
    >
      <div>
        <h3 className="text-4xl text-white font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-600">
          Minim dolor in amet nulla laboris enim dolore. Minim dolor in amet
          nulla laboris enim dolore.
        </p>
      </div>
      <div className="flex items-center justify-between text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <span>❤️ 20k</span>
          <span>🔄</span>
        </div>
      </div>

       <div
        style={{
          clipPath: "circle(41.4% at 100% 100%)",
        }}
        className="absolute bottom-0 right-0 h-40 w-40 bg-white"
      >
      <p className="z-10 relative text-black">View ➔</p></div>
    </div> 
   

     
  );
}

const EngineeringCors = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8">Our Courses</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course, index) => (
          <CourseCard key={index} title={course.title} color={course.color} />
        ))}
      </div>
    </div>
  );
};

export default EngineeringCors;
