import React from "react";

const Feedback = () => {
  const steps = [
    {
      id: 1,
      title: "Get a Quotation",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 2,
      title: "Talk With Us",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 3,
      title: "Brain Storming",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: 4,
      title: "Brain Storming",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];

  return (
    <>
      <div className="bg-[#0E131D] text-white py-16 pl-8">
        <div className="flex justify-between">
          <div className="mb-12 sticky top-32 h-[150px]">
            <h3 className="text-gray-400 text-sm">CLIENT FEEDBACK</h3>
            <h1 className="text-3xl font-bold mt-2">How We Work</h1>
            <p className="text-gray-400 mt-2 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="max-w-4xl mxauto">
            {/* Title Section */}

            {/* Steps Section */}
            <div className="space-y-0">
              {steps.map((step) => (
                <>
                  <div
                    key={step.id}
                    className="flex items-start bg-[#1C263A] px-6 py-20 roundeg shadow-lg relative"
                  >
                    <div className="text-[70px] font-extrabold text-[#2B3B59] leading-[36px]">
                      0{step.id}
                    </div>
                    <div className="ml-6">
                      <h2 className="text-xl font-semibold">{step.title}</h2>
                      <p className="text-gray-400 w-1/2 mt-2">
                        {step.description}
                      </p>
                    </div>
                    <div className="ml-auto absolute right-0 top-0">
                      {/* Right decorative squares */}
                      {/* <div className="h-6 w-6 bg-[#333650]"></div>
                <div className="h-6 w-6 bg-[#333650] mt-1"></div> */}
                      <svg
                        width="60"
                        height="60"
                        viewBox="0 0 71 71"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="0.421875"
                          y="0.423828"
                          width="35.2881"
                          height="35.2881"
                          fill="#0E131D"
                        />
                        <rect
                          x="0.421875"
                          y="35.7119"
                          width="35.2881"
                          height="35.2881"
                          fill="#6F749B"
                        />
                        <rect
                          x="35.7109"
                          y="0.423828"
                          width="35.2881"
                          height="35.2881"
                          fill="#6F749B"
                        />
                        <rect
                          x="35.7109"
                          y="35.7119"
                          width="35.2881"
                          height="35.2881"
                          fill="#0E131D"
                        />
                      </svg>
                    </div>
                  </div>
                  <hr />
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedback;
