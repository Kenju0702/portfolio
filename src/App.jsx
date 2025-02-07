import React from "react";
import Nav from "./components/Header";
import Slider from "./components/Slider";
import CarrerObjective from "./components/CarrerObjective";
import ContentSection from "./components/ContentSection";
import AboutDetail from "./components/AboutDetail";
import SkillDetail from "./components/Skilldetail";
import "./index.css";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiFigma,
  SiNextdotjs,
  SiVuedotjs,
  SiMongodb,
  SiTypescript,
  SiAngular,
  SiSpringboot,
} from "react-icons/si";
import {CiDatabase} from "react-icons/ci";
import {GrMysql} from "react-icons/gr";
import {Project} from "./components/Project";
import Formcontact from "./components/Formcontact";
import Footerpage from "./components/Footer";

const App = () => {
  const skillsData = [
    {icon: FaHtml5, title: "HTML", color: "#E44D26"},
    {icon: FaCss3Alt, title: "CSS", color: "#264DE4"},
    {icon: FaJs, title: "JavaScript", color: "#F7DF1E"},
    {icon: FaReact, title: "React", color: "#61DAFB"},
    {icon: FaNodeJs, title: "Node.js", color: "#83CD29"},
    {icon: FaGitAlt, title: "Git", color: "#F1502F"},
    {icon: SiTailwindcss, title: "Tailwind CSS", color: "#38B2AC"},
    {icon: SiFigma, title: "Figma", color: "#F24E1E"},
  ];
  const skillsLearning = [
    {icon: SiNextdotjs, title: "Next.js", color: "#000000"},
    {icon: SiVuedotjs, title: "Vue.js", color: "#42B883"},
    {icon: SiMongodb, title: "MongoDB", color: "#47A248"},
    {icon: SiTypescript, title: "TypeScript", color: "#3178C6"},
  ];
  const otherSkills = [
    {icon: SiAngular, title: "Angular", color: "#DD0031"},
    {icon: SiSpringboot, title: "Spring Boot", color: "#6DB33F"},
    {icon: CiDatabase, title: "SQL Server", color: "#266595"},
    {icon: GrMysql, title: "MySQL", color: "#4479A1"},
  ];
  return (
    <>
      <Nav />
      <div className=" bg-gradient-to-br from-gray-950 to-gray-700 backdrop-blur-lg rounded-lg text-white w-full">
        <div className="slider-carrer  w-full">
          <Slider />
          <CarrerObjective />

          <div className="about w-full">
            <div className="md:w-1/2 mx-auto text-center ">
              <div id="About">
                <ContentSection
                  title={"About"}
                  content={
                    "My name is Nguyen Quang Tien, and I am currently a student majoring in Information Technology at Saigon University (SGU), living in Ho Chi Minh City."
                  }
                />
                <AboutDetail />
              </div>

              <div id="Skills">
                <ContentSection
                  title={"skill"}
                  content={
                    "Throughout my university studies, I had the opportunity to engage with and master various programming languages, frameworks, and development tools such as IDEs. Consequently, I hope that the skills I have acquired will play a significant role in shaping my career path and provide robust support for my future endeavors."
                  }
                />
                <h1 className="md:px-0 md:mt-0 mt-4 px-2 uppercase text-2xl font-bold text-start ">
                  using now :
                </h1>
                <SkillDetail skills={skillsData} />
                <h1 className="md:px-0 md:mt-0 mt-4 px-2 uppercase text-2xl font-bold text-start ">
                  Learning :
                </h1>
                <SkillDetail skills={skillsLearning} />
                <h1 className="md:px-0 md:mt-0 mt-4 px-2 uppercase text-2xl font-bold text-start ">
                  Other Skills :
                </h1>
                <SkillDetail skills={otherSkills} />
              </div>
            </div>
          </div>
        </div>
        <div id="Portfolio">
          <div className=" bg-black text-center md:mx-auto md:w-full mb-20">
            <ContentSection title={"Portfolio"} />
          </div>
        </div>
        <div id="Contact">
          <div className="md:w-1/2 mx-auto text-center">
            <Project />

            <ContentSection
              title={"Contact "}
              content={"Please provide your name, email, and message."}
            />
            <Formcontact />
          </div>
        </div>

        <div className="footer bg-black">
          <Footerpage />
        </div>
      </div>
    </>
  );
};

export default App;
