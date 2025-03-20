import React from "react";
import {
  BookOpen,
  Briefcase,
  Users,
  Building2,
  GraduationCap,
  Network,
} from "lucide-react";
import boy from "../../Images/d9ce1a384334cae8ab67a2f8fb3da4f5.png";

const EngineeringEducation = () => {
  const benefits = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Expert Instructors",
      description: "Learn from experienced professionals",
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Hands-On Experience",
      description: "Real projects and internships",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Career Services",
      description: "Job placement and career guidance",
    },
    {
      icon: <Building2 className="w-8 h-8" />,
      title: "Modern Facilities",
      description: "Access to advanced labs and tools",
    },
    {
      icon: <Network className="w-8 h-8" />,
      title: "Strong Alumni Network",
      description: "Connections for growth and mentorship",
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Industry-Focused Curriculum",
      description: "Skills for today's engineering careers",
    },
  ];

  const facts = [
    "The engineering field continues to grow, with the U.S. Bureau of Labor Statistics projecting an 8% job growth for engineers from 2020 to 2030, highlighting the increasing need for skilled professionals in various engineering disciplines.",
    "Many engineering programs require strong academic performance in mathematics and science subjects, along with standardized test scores (like SAT or ACT), as well as extracurricular involvement in related activities to secure admission.",
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold text-navy-900">
                Why Choose Us for Your{" "}
                <span className="text-orange-400 block">
                  Engineering Education?
                </span>
              </h1>
              <p className="text-gray-600 text-lg">
                Unleash Your Potential with a Future-Ready Engineering Program
                Designed for Success.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-gray-100 hover:shadow-lg transition-shadow"
                >
                  <div className="text-blue-900 mb-3">{benefit.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>

            <button className="bg-blue-900 text-white px-6 py-3 rounded-full hover:bg-blue-800 transition-colors">
              Learn more
            </button>
          </div>

          {/* <div className="relative bg-green-600 absolute bottom-10">
              
              <div className="relative bg-red-600">
                <div className="aspect-w-4 aspect-h-5">
                  <img
                    src={boy}
                    alt="Engineering student"
                    className="rounded-lg object-cover"
                  />
                </div>
               
                <div className="absolute top-1/4 right-0 max-w-sm space-y-4">
                  {facts.map((fact, index) => (
                    <div
                      key={index}
                      className="bg-white/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border border-gray-100"
                    >
                      <p className="text-sm text-gray-700">{fact}</p>
                    </div>
                  ))}
                </div>
              </div>

              </div> */}

          <div className="h-1/2 w-80 bg-[#264065] relative left-96 bottom-40">
            <h1>sdfghjk</h1>
          </div>

          <div className="h-auto w-auto  flex justify-center items-center absolute  right-0">
            <button className="px-8 absolute left-40 top-20 py-4  border-2 border-black rounded-full">Benefits</button>
           <img className="h-[60vh] w-[60vw] " src={boy} alt="" />
          </div>
         
        </div>
      </div>
    </div>
  );
};

export default EngineeringEducation;
