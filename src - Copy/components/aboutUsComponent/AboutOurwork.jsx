import React from 'react';

const cards = [
  {
    id: 1,
    title: 'Thank God It\'s Saturday',
    imageUrl: '/asp_png.png',
    altText: 'Group of people in an office setting'
  },
  {
    id: 2,
    title: 'Public Policy',
    imageUrl: '/asp_png.png',
    altText: 'Gavel and law books'
  },
  {
    id: 3,
    title: 'News',
    imageUrl: '/asp_png.png',
    altText: 'Person using a tablet with coffee'
  }
];

const Card = ({ title, imageUrl, altText }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden border border-white"> {/* Added white border */}
    <img src={imageUrl} alt={altText} className="w-full h-60 object-cover" />
    <div className="p-4 bg-[#233871]"> {/* Updated background color for the card content */}
      <h3 className="text-lg font-semibold italic text-black">{title}</h3> {/* Title in black */}
    </div>
  </div>
);

const AboutOurWork = () => (
  <section className="bg-slate-50 py-12">
    <div className="container mx-auto px-8 sm:px-12 lg:px-16"> {/* Responsive padding */}
      <h2 className="text-2xl font-semibold text-[#233871] mb-2 font-poppins">Know More</h2> {/* Updated text color */}
      <h3 className="text-3xl font-semibold text-black mb-8 font-poppins">About our people & our work</h3> {/* Main heading in black */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> {/* Responsive grid and gap */}
        {cards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </div>
  </section>
);

export default AboutOurWork;
