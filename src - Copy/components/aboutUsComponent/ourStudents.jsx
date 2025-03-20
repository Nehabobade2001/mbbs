import React from 'react';

const countries = [
  { name: 'UK', flag: 'https://assets.leverageedu.com/about-us/UK-flag.svg', offers: 4600 },
  { name: 'USA', flag: 'https://assets.leverageedu.com/about-us/US-flag.svg', offers: 3500 },
  { name: 'Ireland', flag: 'https://assets.leverageedu.com/about-us/Ireland-flag.svg', offers: 500 },
  { name: 'Germany', flag: 'https://assets.leverageedu.com/about-us/Germany-flag.svg', offers: 450 },
  { name: 'Canada', flag: 'https://assets.leverageedu.com/about-us/Canada-flag.svg', offers: 1500 },
  { name: 'Australia', flag: 'https://assets.leverageedu.com/about-us/Australia-flag.svg', offers: 900 },
  { name: 'New Zealand', flag: 'https://assets.leverageedu.com/about-us/New Zealand-flag.svg', offers: 200 },
  { name: 'Dubai', flag: 'https://assets.leverageedu.com/about-us/Dubai-flag.svg', offers: 300 },
];

const CountryCard = ({ name, flag, offers }) => (
  <div className="bg-white rounded-lg shadow-md p-4 text-center">
    <div className="flex justify-center mb-2">
      {/* Check if the flag is a URL (image) or an emoji */}
      {flag.startsWith('http') ? (
        <img src={flag} alt={`${name} Flag`} className="h-12 w-12 object-contain" />
      ) : (
        flag
      )}
    </div>
    <h3 className="font-semibold text-[#233871] font-poppins">{name}</h3>
    <p className="text-sm text-black">{offers}+ Offers</p>
  </div>
);

const CharacterSVG = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" className="mx-auto">
    <rect x="50" y="50" width="45" height="45" fill="#adff2f" />
    <rect x="105" y="50" width="45" height="45" fill="#ff69b4" />
    <rect x="50" y="105" width="45" height="45" fill="#87cefa" />
    <rect x="105" y="105" width="45" height="45" fill="#ffd700" />
    <circle cx="72" cy="72" r="5" fill="black" />
    <circle cx="127" cy="72" r="5" fill="black" />
    <path d="M72 95 Q 100 120 127 95" fill="none" stroke="black" strokeWidth="3" />
    <path d="M87 140 Q 100 150 112 140" fill="none" stroke="black" strokeWidth="3" />
    <line x1="50" y1="40" x2="70" y2="20" stroke="black" strokeWidth="2" />
    <line x1="130" y1="40" x2="150" y2="20" stroke="black" strokeWidth="2" />
    <line x1="40" y1="150" x2="20" y2="170" stroke="black" strokeWidth="2" />
    <line x1="160" y1="150" x2="180" y2="170" stroke="black" strokeWidth="2" />
  </svg>
);

const OurStudents = () => (
  <section className="bg-slate-50 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-2xl font-bold text-[#233871] mb-2 pl-20 font-poppins">Our Students</h2>
      <h3 className="text-3xl font-bold text-white mb-8 pl-20 font-poppins">Across the globe</h3>
      <div className="flex flex-col md:flex-row items-center mb-8">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <CharacterSVG />
        </div>
        <div className="md:w-2/3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {countries.map((country) => (
            <CountryCard key={country.name} {...country} />
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default OurStudents;
