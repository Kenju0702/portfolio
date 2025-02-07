import React from "react";
import "../index.css";
export const Project = () => {
  return (
    <div className="w-full flex flex-col gap-16 md:px-0 px-2">
      <div className=" project ">
        {/* Phần Text - Đè lên Ảnh */}
        <div className=" project-Text 2xl:absolute 2xl:left-0">
          <h4 className="text-purple-400 font-bold uppercase tracking-wide">
            Featured Project
          </h4>
          <h1 className="2xl:text-xl text-2xl font-extrabold my-2">ClothStore</h1>
          <p className="text-base leading-relaxed ">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
          </p>
        </div>

        {/* Phần Ảnh */}
        <div className="img-project justify-end">
          <img
            className="w-full max-w-3xl  rounded-xl border-purple-400 border-r-2 border-t-12 "
            src="https://raw.githubusercontent.com/Kaicity/Cloth-Store-Ecommerce/main/Cloth-Store-Client-FE/src/assets/Screenshot%202024-05-19%20235908.png"
            alt="Project Screenshot"
          />
        </div>
      </div>
      <div className=" project ">
        {/* Phần Text - Đè lên Ảnh */}
        <div className=" project-Text 2xl:absolute 2xl:right-0">
          <h4 className="text-purple-400 font-bold uppercase tracking-wide">
            Featured Project
          </h4>
          <h1 className="2xl:text-xl text-2xl font-extrabold my-2">LandingPage</h1>
          <p className="text-base leading-relaxed ">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
          </p>
        </div>

        {/* Phần Ảnh */}
        <div className="img-project 2xl:justify-start">
          <img
            className="w-full max-w-3xl  rounded-xl border-purple-400 border-r-2 border-t-12 "
            src="https://raw.githubusercontent.com/Kenju0702/portfolio/refs/heads/main/src/assets/landingpage.png"
            alt="Project Screenshot"
          />
        </div>
      </div>
      <div className=" project ">
        {/* Phần Text - Đè lên Ảnh */}
        <div className=" project-Text 2xl:absolute 2xl:left-0">
          <h4 className="text-purple-400 font-bold uppercase tracking-wide">
            Featured Project
          </h4>
          <h1 className="2xl:text-xl text-2xl font-extrabold my-2">VietgroupEduNet</h1>
          <p className="text-base leading-relaxed ">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
          </p>
        </div>

        {/* Phần Ảnh */}
        <div className="img-project justify-end">
          <img
            className="w-full max-w-3xl  rounded-xl border-purple-400 border-r-2 border-t-12 "
            src="https://portfolio-kaicitys-projects.vercel.app/assets/img/projects/vge/vge.png"
            alt="Project Screenshot"
          />
        </div>
      </div>
    </div>
  );
};
