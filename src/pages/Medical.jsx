import React from "react";
import MedicalHero from "../components/medicalComp/MedicalHero";
import MedicalSection from "../components/medicalComp/MedicalHero";
import BenefitsSection from "../components/medicalComp/BenefitsSection";
import ManagementProgram from "../components/managementComponent/managementProgram";

const Medical = () => {
  return (
    <>
      {/* <MedicalHero /> */}
      <MedicalSection />
      <div className="h-[900px]">
        <BenefitsSection />
      </div>
    </>
  );
};

export default Medical;
