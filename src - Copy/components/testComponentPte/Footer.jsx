// import { useState } from "react"



// const Footer = () => {



// // SVG components for Plus and Minus icons (unchanged)
// const Plus = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
//     <line x1="12" y1="5" x2="12" y2="19"></line>
//     <line x1="5" y1="12" x2="19" y2="12"></line>
//   </svg>
// )

// const Minus = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-primary">
//     <line x1="5" y1="12" x2="19" y2="12"></line>
//   </svg>
// )

// const faqItems = [
//   {
//     question: "What is the GMAT exam - focus edition?",
//     answer: "The GMAT Focus Edition is a streamlined version of the traditional GMAT, designed to be more efficient and relevant to today's business education landscape."
//   },
//   {
//     question: "What is the eligibility to take the GMAT exam?",
//     answer: "Generally, anyone 18 years or older can take the GMAT. There are no specific educational requirements, though most test-takers have or are pursuing a bachelor's degree."
//   },
//   {
//     question: "How is the GMAT focus exam scored?",
//     answer: "The GMAT Focus exam is scored on a scale of 205-805, with separate scores for Quantitative Reasoning, Verbal Reasoning, and Integrated Reasoning sections."
//   },
//   {
//     question: "Does admission to B-schools depend only on GMAT scores?",
//     answer: "No, admission to business schools typically considers multiple factors including GMAT scores, academic record, work experience, essays, and letters of recommendation."
//   },
//   {
//     question: "Do business schools in India accept GMAT scores?",
//     answer: "Yes, many top business schools in India accept GMAT scores for their MBA programs, especially for international or executive MBA courses."
//   },
// ]

// const ArticleCard = ({ imageSrc, title, description }) => (
//   <div className="bg-white rounded-lg shadow-md overflow-hidden">
//     <img src={imageSrc} alt={title} className="w-full h-48 object-cover" />
//     <div className="p-4">
//       <h3 className="text-lg font-semibold mb-2">{title}</h3>
//       <p className="text-gray-600 text-sm mb-4">{description}</p>
//       <button className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors">
//         Read More
//       </button>
//     </div>
//   </div>
// )



//   const [openItem, setOpenItem] = useState(null)

//   const toggleItem = (index) => {
//     setOpenItem(openItem === index ? null : index)
//   }

//   const articles = [
//     {
//       imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-07%20at%203.06.58%E2%80%AFPM-6EdElLPQ8ACi9gIEe2cQEnl74ArE7Y.png",
//       title: "Exploring Job Prospects After studying MBA in UK",
//       description: "Many international students consider an MBA in the UK to be highly prestigious, and an MBA degree from the UK is globally ...",
//     },
//     {
//       imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-07%20at%203.06.58%E2%80%AFPM-6EdElLPQ8ACi9gIEe2cQEnl74ArE7Y.png",
//       title: "Recipe for the Perfect MBA Essays: Question Types, Sample MBA Essays & More",
//       description: "We know you think a sample MBA essay will solve all your problems. But anything you use as inspiration from the internet, ...",
//     },
//     {
//       imageSrc: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202024-10-07%20at%203.06.58%E2%80%AFPM-6EdElLPQ8ACi9gIEe2cQEnl74ArE7Y.png",
//       title: "Apurva's GMAT Exam Score 715 Scored 90 in Verbal Section",
//       description: "This is the success story of Apurva, with an amazing GMAT exam score of 715 (99th Percentile), and above all, she scored ...",
//     },
//   ]

//   return (
//     <>
  
     

//       {/* GMAT FAQs Accordion Section */}
//       <section className="py-12 bg-white">
//         <div className="w-full max-w-3xl mx-auto p-4">
//           <h2 className="text-2xl font-bold mb-6 text-center">GMAT FAQs</h2>
//           <div className="space-y-4">
//             {faqItems.map((item, index) => (
//               <div key={index} className="border rounded-md shadow-lg bg-white">
//                 <button
//                   className="flex justify-between items-center w-full p-4 text-left"
//                   onClick={() => toggleItem(index)}
//                 >
//                   <span className="font-medium">{item.question}</span>
//                   {openItem === index ? <Minus /> : <Plus />}
//                 </button>
//                 {openItem === index && (
//                   <div className="p-4 bg-gray-50 border-t">
//                     <p>{item.answer}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Popular GMAT Articles Section */}
//       <section className="py-12 bg-gray-100">
//         <div className="max-w-6xl mx-auto px-4">
//           <h2 className="text-3xl font-bold text-center mb-8">Popular GMAT Articles</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {articles.map((article, index) => (
//               <ArticleCard key={index} {...article} />
//             ))}
//           </div>
//           <div className="text-center mt-8">
//             <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors">
//               View all
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Footer (unchanged) */}
//       <footer className="bg-gray-100 text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
//         <div className="max-w-7xl mx-auto">
//           {/* Universities Section */}
//           <section className="mb-8">
//             <h2 className="text-lg font-bold mb-4">UNIVERSITIES</h2>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
//               {['UNIVERSITY ENCYCLOPEDIA', 'MIT', 'OXFORD', 'LSE', 'STANFORD', 'CORNELL', 'CARNEGIE MELLON', 'GEORGIA TECH', 'UNIVERSITY OF MICHIGAN', 'PURDUE UNIVERSITY', 'SOUTHERN CALIFORNIA'].map((uni) => (
//                 <a key={uni} href="#" className="text-sm hover:underline">
//                   {uni}
//                 </a>
//               ))}
//             </div>
//           </section>

//           {/* About and Useful Links Section */}
//           <div className="grid md:grid-cols-2 gap-8 mb-8">
//             <section>
//               <h2 className="text-lg font-bold mb-4">ABOUT JAMBOREE</h2>
//               <p className="text-sm mb-4">
//                 Established in 1993 with a vision to make global education accessible, Jamboree Education has been pioneering
//                 international university admissions for 3 decades now. We've helped more than 200,000 students realise their
//                 dream of studying in prestigious colleges including Harvard, Stanford, MIT, Oxford, Yale and LBS.
//               </p>
//               <p className="text-sm">
//                 Jamboree has earned the reputation as the go-to place for students aspiring to study at the top universities
//                 around the world. We understand that each student is unique, and our approach reflects this belief, ensuring
//                 that every student receives the attention and guidance they deserve.
//               </p>
//             </section>
//             <section>
//               <h2 className="text-lg font-bold mb-4">USEFUL LINKS</h2>
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <a href="#" className="text-sm block hover:underline mb-2">JAMBOREE BLOG</a>
//                   <a href="#" className="text-sm block hover:underline mb-2">CAREER COUNSELING</a>
//                   <a href="#" className="text-sm block hover:underline mb-2">EVENTS/WEBINARS</a>
//                   <a href="#" className="text-sm block hover:underline mb-2">JAMBOREE ONLINE WEBSITE</a>
//                 </div>
//                 <div>
//                   <a href="#" className="text-sm block hover:underline mb-2">DOWNLOADS</a>
//                   <a href="#" className="text-sm block hover:underline mb-2">COMPANY PROFILE</a>
//                   <a href="#" className="text-sm block hover:underline mb-2">INSTITUTION PROGRAMS</a>
//                   <a href="#" className="text-sm block hover:underline mb-2">OUR STUDY CENTERS</a>
//                   <a href="#" className="text-sm block hover:underline">VALUE ADDED SERVICES</a>
//                 </div>
//               </div>
//             </section>
//           </div>

//           {/* Coaching Locations Section */}
//           <section className="mb-8">
//             <div className="grid md:grid-cols-3 gap-8">
//               {['GMAT', 'GRE', 'SAT'].map((exam) => (
//                 <div key={exam}>
//                   <h2 className="text-lg font-bold mb-4">{exam} COACHING IN</h2>
//                   <div className="grid grid-cols-3 gap-2">
//                     {['DELHI', 'BANGALORE', 'MUMBAI', 'CHENNAI', 'CHANDIGARH', 'GURGAON', 'HYDERABAD', 'JAIPUR', 'INDORE', 'THANE', 'BHOPAL', 'LUCKNOW', 'PUNE', 'KOLKATA', 'FARIDABAD', 'NOIDA', 'GREATER NOIDA', 'NAVI MUMBAI', 'NEPAL', 'OTHER'].map((city) => (
//                       <a key={city} href="#" className="text-xs hover:underline">
//                         {city}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Study Abroad Consultation Section */}
//           <section className="mb-8">
//             <h2 className="text-lg font-bold mb-4">STUDY ABROAD CONSULTATION IN</h2>
//             <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2">
//               {['DELHI', 'BANGALORE', 'MUMBAI', 'CHENNAI', 'CHANDIGARH', 'GURGAON', 'HYDERABAD', 'JAIPUR', 'INDORE', 'THANE', 'NEPAL', 'LUCKNOW', 'PUNE', 'KOLKATA', 'FARIDABAD', 'NOIDA', 'GREATER NOIDA', 'NAVI MUMBAI'].map((city) => (
//                 <a key={city} href="#" className="text-xs hover:underline">
//                   {city}
//                 </a>
//               ))}
//             </div>
//           </section>

//           {/* Programs Section */}
//           <section className="mb-8">
//             <div className="grid md:grid-cols-3 gap-8">
//               {[
//                 { title: 'MBA', programs: ['MBA IN USA', 'MBA IN UK', 'MBA IN CANADA', 'MBA IN IRELAND', 'MBA IN GERMANY', 'MBA IN NEW ZEALAND'] },
//                 { title: 'MS', programs: ['MS IN USA', 'MS IN UK', 'MS IN CANADA', 'MS IN IRELAND', 'MS IN GERMANY', 'MS IN NEW ZEALAND'] },
//                 { title: 'UNDERGRAD', programs: ['UNDERGRAD IN USA', 'UNDERGRAD IN UK', 'UNDERGRAD IN CANADA', 'UNDERGRAD IN IRELAND', 'UNDERGRAD IN GERMANY', 'UNDERGRAD IN NEW ZEALAND'] },
//               ].map(({ title, programs }) => (
//                 <div key={title}>
//                   <h2 className="text-lg font-bold mb-4">{title}</h2>
//                   <div className="grid grid-cols-2 gap-2">
//                     {programs.map((program) => (
//                       <a key={program} href="#" className="text-xs hover:underline">
//                         {program}
//                       </a>
//                     ))}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Legal Section */}
//           <section className="text-xs mb-4">
//             <p className="mb-2">
//               All test names [GMAT, GRE, SAT, IELTS, TOEFL] are registered trademarks of their respective owners. None of the trademark holders are affiliated with Jamboree or this website.
//             </p>
//             <p>
//               Test names and other trademarks are the property of the respective trademark holders.
//             </p>
//           </section>

//           {/* Copyright and Links */}
//           <section className="flex flex-wrap justify-between items-center text-xs">
//             <div className="mb-4 md:mb-0">
//               <span>©ALL RIGHTS RESERVED</span>
//               <span className="mx-2">|</span>
//               <a href="#" className="hover:underline">PRIVACY POLICY</a>
//               <span className="mx-2">|</span>
//               <a href="#" className="hover:underline">CONTACT US</a>
//               <span className="mx-2">|</span>
//               <a href="#" className="hover:underline">Terms & Conditions</a>
//               <span className="mx-2">|</span>
//               <a href="#" className="hover:underline">Privacy Policy</a>
//               <span className="mx-2">|</span>
//               <a href="#" className="hover:underline">Cancellation & Refunds</a>
//             </div>
//             <div className="flex space-x-4">
//               <a href="#" aria-label="Facebook">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
//                   <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
//                 </svg>
//               </a>
//               <a href="#" aria-label="Twitter">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
//                   <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
//                 </svg>
//               </a>
//               <a href="#" aria-label="LinkedIn">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
//                   <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
//                   <rect x="2" y="9" width="4" height="12"></rect>
//                   <circle cx="4" cy="4" r="2"></circle>
//                 </svg>
//               </a>
//               <a href="#" aria-label="Instagram">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
//                   <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
//                   <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
//                   <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
//                 </svg>
//               </a>
//               <a href="#" aria-label="YouTube">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
//                   <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
//                   <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
//                 </svg>
//               </a>
//             </div>
//           </section>
//         </div>
//       </footer>
//     </>
//   )
// }

// export default Footer