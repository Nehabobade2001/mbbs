import React from 'react';

const testimonials = [
  {
    name: 'Ria',
    institution: 'KS Hegde Medical Academy',
    content: 'My name is Ria. I discovered Medical Mentor a few months before my NEET exam. They provided me with all the necessary information for both the Karnataka state counselling and other states\' counselling. They helped me prepare and submit documents and provided me with information on individual colleges across India. Thanks to their assistance, I got admission to KS Hegde Medical Academy in Mangalore.',
    imageUrl: '/asp_png.png'
  },
  {
    name: 'Vismaya Prakash',
    institution: 'Kempegowda Institute Of Medical Sciences(KIMS)',
    content: 'Hello, my name is Vismaya Prakash. I found Medical Mentor through a pamphlet given during my NEET exam. Their services have been helpful since the beginning. I was unsure about choosing a college due to my rank, but their counseling process helped me understand that it was still possible to pursue my dreams. I recommend their services, especially for those new to national exams.',
    imageUrl: '/asp_png.png'
  },
  {
    name: 'Bhavana',
    institution: '',
    content: 'Hi, I\'m Bhavana. I found Medical Mentor online and attended one of their seminars at BMCRI. The seminar had renowned doctors who gave insights on the MBBS life and counseling process. Medical Mentor provided live counseling...',
    imageUrl: '/asp_png.png'
  }
];

const TestimonialCard = ({ testimonial }) => (
  <div className="bg-white rounded-2xl shadow-md p-6 mb-6 flex transition-transform duration-300 hover:shadow-lg">
    <img src={testimonial.imageUrl} alt={testimonial.name} className="w-20 h-20 rounded-full mr-4" />
    <div>
      <p className="text-gray-700 mb-4 v">{testimonial.content}</p>
      <p className="font-bold font-poppins" style={{ color: '#3e5ba9' }}>{testimonial.name}</p>
      <p className="text-gray-500 font-poppins">{testimonial.institution}</p>
    </div>
  </div>
);

const TestimonialSection = () => (
  <div className="bg-slate-50 py-12 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold mb-2 text-center text-[#3E5BA9] font-poppins">

        From <span className="text-[#f6c16f]">Attendees</span>, with <span className="text-[#f6c16f]">Appreciation</span>...
      </h2>
      <p className="text-center text-gray-600 mb-8 font-poppins">Here's what our attendees are saying about our webinars</p>
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} testimonial={testimonial} />
      ))}
    </div>
  </div>
);

export default TestimonialSection;
