import React from "react";
import "../index.css";
import { motion } from "framer-motion";
import { ProjectItem } from "./ProjectItem";

const projects = [
  {
    title: "ILCVN",
    date: "Mar 2025 – Apr 2025",
    desc: "This is a legal news website that allows for the publication of articles, updates, and legal news, providing a platform for sharing relevant legal information and insights.",
    image:
      "https://github.com/Kenju0702/portfolio/blob/main/src/assets/ilcvn.png?raw=true",
    reverse: true,
  },
  {
    title: "VGE Project",
    date: "Sep 2024 – Dec 2024",
    desc: "VGE is an innovative platform that manages collaborators and connects international students with global labor opportunities, streamlining talent sourcing and workforce collaboration.",
    image:
      "https://portfolio-kaicitys-projects.vercel.app/assets/img/projects/vge/vge.png",
    reverse: false,
  },
  {
    title: "Landing Page",
    date: "Feb 2024 – Mar 2024",
    desc: "A stylish landing page for product marketing with responsive design and animation.",
    image:
      "https://raw.githubusercontent.com/Kenju0702/portfolio/refs/heads/main/src/assets/landingpage.png",
    reverse: true,
  },
  {
    title: "ClothStore",
    date: "Dec 2022 – Mar 2023",
    desc: "This is an e-commerce website designed for selling excavators, providing a convenient platform for product presentation and brand promotion.",
    image:
      "https://raw.githubusercontent.com/Kaicity/Cloth-Store-Ecommerce/main/Cloth-Store-Client-FE/src/assets/Screenshot%202024-05-19%20235908.png",
    reverse: false,
  },
];
export const Project = () => {
  return (
    <div className="w-full max-w flex flex-col  gap-8  md:px-0 px-2 text-start">
      {projects.map((project, index) => (
        <ProjectItem key={index} {...project} />
      ))}
    </div>
  );
};
