import React from 'react';

const operators = [
  { name: 'Operator 1', company: 'Company A', image: "/asp_png.png" },
  { name: 'Operator 2', company: 'Company B', image: "/asp_png.png" },
  { name: 'Operator 3', company: 'Company C', image: "/asp_png.png" },
  { name: 'Operator 4', company: 'Company D', image: "/asp_png.png" },
  { name: 'Operator 5', company: 'Company E', image: "/asp_png.png" },
  { name: 'Operator 6', company: 'Company F', image: "/asp_png.png" },
  { name: 'Operator 7', company: 'Company G', image: "/asp_png.png" },
  { name: 'Operator 8', company: 'Company H', image: "/asp_png.png" },
  { name: 'Operator 9', company: 'Company I', image: "/asp_png.png" },
  { name: 'Operator 10', company: 'Company J', image: "/asp_png.png" },
  { name: 'Operator 11', company: 'Company K', image: "/asp_png.png" },
  { name: 'Operator 12', company: 'Company L', image: "/asp_png.png" },
];

const OperatorCard = ({ name, company, image }) => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden w-50"> {/* Fixed width */}
    <div className=" p-2 flex justify-center items-center h-auto"> {/* Increased height */}
      <img src={image} alt={name} className="w-48 object-contain rounded-2xl" /> {/* Image height */}
    </div>
    <div className="p-3 bg-[#243671] text-white text-center"> {/* Updated background color */}
      <h3 className=" text-lg ">{name}</h3> {/* Name in black */}
      <p className="text-sm text-[#f6c16f]">{company}</p> {/* Company name in #f6c16f */}
    </div>
  </div>
);

const OperatorGrid = () => (
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8"> {/* Responsive padding */}
    <h2 className="text-3xl font-semibold mb-6 text-left text-[#233871]">Individual Operators</h2> {/* Title in #233871 */}
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
      {operators.map((operator, index) => (
        <OperatorCard 
          key={index} 
          name={operator.name} 
          company={operator.company} 
          image={operator.image} 
        />
      ))}
    </div>
  </div>
);

export default OperatorGrid;
