import React from "react";
import l1 from "../Images/Destination/12979 1.png";
import Engineerings from "../components/EngineeringComponenet.jsx/Engineerings";
import EngineeringEducation from "../components/EngineeringComponenet.jsx/EngineeringEducation";
import EngineeringStory from "../components/EngineeringComponenet.jsx/EngineeringStory";
import EngineeringCors from "../components/EngineeringComponenet.jsx/EngineeringCors";
import EngineeringImage from "../components/EngineeringComponenet.jsx/EngineeringImage";

const Engineering = () => {
  return (
    <div className="pt-32">
     <Engineerings/>
     <EngineeringEducation/>  
     <EngineeringStory  />
     <EngineeringImage/>
     <EngineeringCors/>
    </div>
  );
};
 
export default Engineering;
