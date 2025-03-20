import React from "react";
import CareerHero from "../components/careercomp/CareerHero";
import CareerTestimonials from "../components/careercomp/CareerTestimonials";
import Careermission from "../components/careercomp/Careermission";
import Welcome from "../components/careercomp/Welcome";
import Feedback from "../components/careercomp/Feedback";
import Getintouch from "../components/careercomp/Getintouch";

const Career = () => {
  return (
    <>
      <CareerHero />
      <Welcome/>
      <CareerTestimonials />
      <Feedback/>
      {/* <Careermission /> */}
      <Getintouch/>
    </>
  );
};
export default Career;
