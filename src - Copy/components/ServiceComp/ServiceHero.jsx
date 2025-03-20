import React, { useState } from "react";
// import img from "./clients/23.png";
// import img1 from "./clients/21.png";
// import img2 from "./clients/22.png";
import "./style.scss";
import Ug from "./sub/Ug";
import Pg from "./sub/Pg";

const ServiceHero = () => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <>
      <section className="maintraining py-28">
        <section className="w-full py-6 md:py-12">
          <div className="contaner px4 md:px6">
            <div>
              <div className="flex gap- justify-center items-center service-tab">
                <button
                  className={`px-20 py-2  ${
                    activeTab === "tab1"
                      ? "bg-[#233871] text-white active"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handleTabClick("tab1")}
                >
                  UG
                </button>
                <button
                  className={`px-20 py-2  ${
                    activeTab === "tab2"
                      ? "bg-[#233871] text-white active"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handleTabClick("tab2")}
                >
                  PG
                </button>
                {/* <button
                  className={`px-4 py-2 rounded ${
                    activeTab === "tab3"
                      ? "bg-purple-700 text-white"
                      : "bg-gray-200"
                  }`}
                  onClick={() => handleTabClick("tab3")}
                >
                  Tab 3
                </button> */}
              </div>
              <div className="mt-4">
                {activeTab === "tab1" && (
                  <div>
                    <Ug />
                  </div>
                )}
                {activeTab === "tab2" && (
                  <div>
                    <Pg />
                  </div>
                )}
                {/* {activeTab === "tab3" && <div>Content for Tab 3</div>} */}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default ServiceHero;
