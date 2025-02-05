import React from "react";

export const Project = () => {
  return (
    <div className="w-full flex justify-center items-center flex-col gap-8">
      <div className="relative flex max-w-6xl w-full items-center">
        {/* Phần Text - Đè lên Ảnh */}
        <div className="absolute text-justify left-0 p-6 md:p-10 max-w-lg bg-gradient-to-br from-gray-800 to-gray-500 backdrop-blur-lg rounded-lg text-white">
          <h4 className="text-purple-400 font-bold uppercase tracking-wide">
            Featured Project
          </h4>
          <h1 className="text-2xl font-extrabold my-2">Example Project</h1>
          <p className="text-base leading-relaxed">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
        </div>

        {/* Phần Ảnh */}
        <div className="w-full flex justify-end">
          <img
            className="w-full max-w-2xl  rounded-xl border-t-12 "
            src="https://raw.githubusercontent.com/Kaicity/Cloth-Store-Ecommerce/main/Cloth-Store-Client-FE/src/assets/Screenshot%202024-05-19%20235908.png"
            alt="Project Screenshot"
          />
        </div>
      </div>

      <div className="relative flex max-w-6xl w-full items-center ">
        {/* Phần Text - Đè lên Ảnh */}
        <div className="absolute text-justify right-0 p-6 md:p-10 max-w-lg bg-gradient-to-br from-gray-800 to-gray-500 backdrop-blur-lg rounded-lg text-white">
          <h4 className="text-purple-400 font-bold uppercase tracking-wide">
            Featured Project
          </h4>
          <h1 className="text-2xl font-extrabold my-2">Example Project</h1>
          <p className="text-base leading-relaxed">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
        </div>

        {/* Phần Ảnh */}
        <div className="w-full flex justify-start order-1" >
          <img
            className="w-full max-w-2xl  rounded-xl border-t-12 "
            src="https://portfolio-kaicitys-projects.vercel.app/assets/img/projects/vge/vge.png"
            alt="Project Screenshot"
          />
        </div>
      </div>


      <div className="relative flex max-w-6xl w-full items-center">
        {/* Phần Text - Đè lên Ảnh */}
        <div className="absolute text-justify left-0 p-6 md:p-10 max-w-lg bg-gradient-to-br from-gray-800 to-gray-500 backdrop-blur-lg rounded-lg text-white">
          <h4 className="text-purple-400 font-bold uppercase tracking-wide">
            Featured Project
          </h4>
          <h1 className="text-2xl font-extrabold my-2">Example Project</h1>
          <p className="text-base leading-relaxed">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
        </div>

        {/* Phần Ảnh */}
        <div className="w-full flex justify-end">
          <img
            className="w-full max-w-2xl  rounded-xl border-t-12 "
            src="https://raw.githubusercontent.com/Kaicity/Cloth-Store-Ecommerce/main/Cloth-Store-Client-FE/src/assets/Screenshot%202024-05-19%20235908.png"
            alt="Project Screenshot"
          />
        </div>
      </div>
    </div>
  );
};
