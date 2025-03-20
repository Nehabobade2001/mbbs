import React from "react";
import SectionOne from "../components/PsychometricTestComp/SectionOne";
import OurOfferings from "../components/PsychometricTestComp/OurOfferings";
import OurInvestors from "../components/PsychometricTestComp/Inverstorscards";
import LogoGrid from "../components/PsychometricTestComp/logo";
import OperatorGrid from "../components/PsychometricTestComp/IndividualOperators";
import AboutOurWork from "../components/PsychometricTestComp/AboutOurwork";
import OurStudents from "../components/PsychometricTestComp/ourStudents";
import SectionTwo from "../components/PsychometricTestComp/SectionTwo";
import SectionThree from "../components/PsychometricTestComp/SectionThree";

const PsychometricTestPage = () => {
  return (
    <>
      {/* <SectionOne /> */}
      {/* <SectionTwo /> */}
      {/* <SectionThree /> */}
      {/* <OurOfferings /> */}
      <div className="pt-20">
      <OurInvestors />
      </div>
      {/* <LogoGrid /> */}
      <OperatorGrid />
      <AboutOurWork />
      <OurStudents />
    </>
  );
};

export default PsychometricTestPage;
