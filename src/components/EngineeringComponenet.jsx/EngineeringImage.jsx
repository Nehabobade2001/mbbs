
import React from "react";
import image from '../../Images/d720405b32ca8ab05298fd8ab351ab00.jpg'

const ContentSection = ({ title, description, children }) => (
  <div className="mb-8">
    <h2 className="text-2xl font-semibold text-gray-800 mb-4">{title}</h2>
    <p className="text-gray-600 mb-6">{description}</p>
    {children}
  </div>
);

const StepSection = ({ number, title, description, bulletPoints }) => (
  <div className="mb-8">
    <div className="flex items-start mb-4">
      <span className="text-lg font-semibold text-gray-800">{number}. </span>
      <h3 className="text-lg font-semibold text-gray-800 ml-2">{title}</h3>
    </div>
    <p className="text-gray-600 mb-4 ml-6">{description}</p>
    {bulletPoints && (
      <ul className="list-disc ml-12 text-gray-600 space-y-2">
        {bulletPoints.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    )}
  </div>
);

const HeroImage = () => (
  <div className="w-full h-[80vh] mb-8 rounded-lg overflow-hidden">
    <img
      src={image}
      alt="Team collaborating"
      className="w-full h-full object-cover"
    />
  </div>
);

const EngineeringImage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <HeroImage />

      <ContentSection
        title="How do I create meaningful connections?"
        description="When producing content for platforms like Revision, it's essential to focus not only on the quality of the writing but also on how it fosters engagement."
      />

      <ContentSection
        title="How do I make authentic engagement?"
        description="There are several ways to ensure your content builds these connections effectively. Here's what they are:"
      >
        <StepSection
          number="1"
          title="Understand your audience"
          description="The first step to creating meaningful connections is understanding who your audience is. This involves researching their demographics, interests, preferences, and needs. Are they young professionals looking for lifestyle tips? Or perhaps they're established homeowners seeking inspiration? Once you have a clear picture of who your readers are, you can start thinking about how to best serve them."
          bulletPoints={[
            "For instance, knowing that your audience values emotional, personal stories can guide your content to be more reflective and impactful, making it easier for them to relate to themselves.",
            "Furthermore, understanding your audience allows you to tailor your tone and style to better connect with them.",
          ]}
        />

        <StepSection
          number="2"
          title="Provide diverse perspectives"
          description="Before you create content that truly connects, everyone involved in the creative process needs to understand the importance of incorporating diverse perspectives. This includes:"
          bulletPoints={[
            "Featuring contributors from different backgrounds",
            "Showcasing a variety of life experiences",
            "Including global viewpoints",
            "Highlighting diverse professional expertise",
          ]}
        />
      </ContentSection>
    </div>
  );
};

export default EngineeringImage;
