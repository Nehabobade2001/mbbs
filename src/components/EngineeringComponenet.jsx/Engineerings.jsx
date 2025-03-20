import React from 'react'
import side from '../../Images/33f36229c1153c8fd42ee3b09c5b492a.gif'
import g from '../../Images/c4c9f0b30ece1e9656d3e7cb43ec2694.png'

const Engineerings = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-center p-8 bg-white">
     
      <div className="lg:w-1/2 space-y-4">
        <h1 className="text-9xl font-bold">
          ENGIN<span className="text-yellow-500">EER</span>
        </h1>
        <p className="text-gray-700 text-lg">
          We help students get into engineering and medical professions through
          a very simple yet effective process. Our guidance and experience ensure
          aspirants find the best path for their future.
        </p>
        <button className="bg-yellow-500 text-white px-6 py-2 rounded-lg hover:bg-yellow-600">
          Learn More
        </button>
        
        {/* Statistics */}
        <div className="flex space-x-6 mt-4">
          <div className="text-center">
            <p className="text-2xl font-semibold">15k+</p>
            <p className="text-gray-500">Successful Admissions</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold">99.8%</p>
            <p className="text-gray-500">Students Satisfied</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-semibold">15+</p>
            <p className="text-gray-500">Years Experience</p>
          </div>
          <div className="text-center flex ">
          <div className='bg-[#233871]' style={{ clipPath: "ellipse(54.3% at 12% 100%)" }}>
            <img className='h-24 w-24' src={g} alt="" />
          </div>
          <div className='bg-red-6'>
           <h1>Our Happy Students</h1>
           <h4 className='w-60'>Laborum quasi distinctio est et. Sequi omnis molestiae. Officia occaecati voluptatem accusantium. Et corrupti saepe quam.</h4>
          </div>
          </div>
        </div>
      </div>

     
      <div className="lg:w-1/2 mt-8 lg:mt-0 relative flex justify-center items-center">
      
       
          <img
            src={side}
            alt="Graduate Illustration"
            className="w-[52vw] h-[60vh]"
          />
       

        {/* Testimonial */}
        <div className="absolute bottom-4 right-4 bg-white shadow-lg p-4 rounded-lg max-w-xs">
          <img
            src="student-photo.png" // Replace with actual path or API-based image
            alt="Student"
            className="w-12 h-12 rounded-full"
          />
          <p className="text-gray-700 mt-2">"The guidance was exceptional!"</p>
          <p className="text-sm text-gray-500">- Happy Student</p>
        </div>
      </div>
    </section>
  )
}

export default Engineerings


