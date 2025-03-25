import React, { useState } from "react";
import Contact from "./Contact";
import Projects from "./Projects";
import ResumePage from "./ResumePage";
import AboutSection from "./AboutSection";
import { FaBars } from "react-icons/fa";
import AsideBar from "./AsideBar";

const Main = () => {
  const [section, setSection] = useState("About");
  const [showNav, setShowNav] = useState(false);
  const [showAside, setShowAside] = useState(false);

  const handleSectionChange = (newSection) => {
    setSection(newSection);
    setShowNav(false);
    setShowAside(false);
  };

  return (
    <>
    <div
        className={`w-full max-w-[80%] block md:hidden bg-[#222831] border border-[#3C3D37] z-[999] h-[100vh] fixed duration-200 transform ${
          showAside ? "translate-x-0" : "-translate-x-full"
        } p-4`}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <AsideBar setShowAside={setShowAside} />
      </div>
      <div className="flex justify-between items-center">
        <header className="flex items-center w-full">
          <FaBars
            className="mt-3 ml-2 block md:hidden text-yellow-600"
            size={28}
            onClick={() => setShowAside((prev) => !prev)}
          />
          <h1 className="text-white text-2xl font-bold ml-6 mt-3 text-center w-full md:w-auto inline-block relative">
            {section}
            <span className="absolute right-1/2 transform w-[30px] border-b-3 border-yellow-600 pt-8"></span>
          </h1>
          <FaBars
            className="mt-3 mr-2 block md:hidden text-yellow-600"
            size={28}
            onClick={() => setShowNav((prev) => !prev)}
          />
          {showNav && (
            <div className="absolute top-12 right-2 bg-[#31363F] p-4 rounded-xl text-white w-[150px]">
              {["About", "Project", "Resume", "Contact"].map((item) => (
                <p
                  key={item}
                  className="hover:text-yellow-600 hover:cursor-pointer"
                  onClick={() => handleSectionChange(item)}
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </header>
        <div className="navbar hidden md:flex bg-[#31363F] py-3 px-6 text-white rounded-tr-xl rounded-bl-xl gap-4">
          {["About", "Project", "Resume", "Contact"].map((item) => (
            <p
              key={item}
              className="hover:text-yellow-600 hover:cursor-pointer"
              onClick={() => setSection(item)}
            >
              {item}
            </p>
          ))}
        </div>
      </div>

      <section
        className="mx-6 my-4 text-white"
        onClick={() => {
          setShowNav(false);
          setShowAside(false);
        }}
      >
        {section === "About" && <AboutSection setSection={setSection} />}
        {section === "Project" && <Projects />}
        {section === "Resume" && <ResumePage />}
        {section === "Contact" && <Contact />}
      </section>
    </>
  );
};

export default Main;
