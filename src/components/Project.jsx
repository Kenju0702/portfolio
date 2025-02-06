import React from "react";

export const Project = () => {
  return (
    <div className="w-full flex flex-col gap-16">
      <div className=" project">
        {/* Phần Text - Đè lên Ảnh */}
        <div className=" project-Text">
          <h4 className="text-purple-400 font-bold uppercase tracking-wide">
            Featured Project
          </h4>
          <h1 className="md:text-xl text-2xl font-extrabold my-2">ClothStore</h1>
          <p className="text-base leading-relaxed">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
        </div>

        {/* Phần Ảnh */}
        <div className="w-full flex justify-end md:justify-center">
          <img
            className="w-full max-w-2xl mx-2 rounded-xl border-purple-400 border-r-2 border-t-12 "
            src="https://raw.githubusercontent.com/Kaicity/Cloth-Store-Ecommerce/main/Cloth-Store-Client-FE/src/assets/Screenshot%202024-05-19%20235908.png"
            alt="Project Screenshot"
          />
        </div>
      </div>

      <div className=" project">
        {/* Phần Text - Đè lên Ảnh */}
        <div className=" project-Text">
          <h4 className="text-purple-400 font-bold uppercase tracking-wide">
            Featured Project
          </h4>
          <h1 className="md:text-xl text-2xl font-extrabold my-2">VietGroupEduNet</h1>
          <p className="text-base leading-relaxed">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
        </div>

        {/* Phần Ảnh */}
        <div className="w-full flex justify-end md:justify-center">
          <img
            className="w-full max-w-2xl mx-2 rounded-xl border-purple-400 border-r-2 border-t-12 "
            src="https://portfolio-kaicitys-projects.vercel.app/assets/img/projects/vge/vge.png"
            alt="Project Screenshot"
          />
        </div>
      </div>


      <div className=" project">
        {/* Phần Text - Đè lên Ảnh */}
        <div className=" project-Text">
          <h4 className="text-purple-400 font-bold uppercase tracking-wide">
            Featured Project
          </h4>
          <h1 className="md:text-xl text-2xl font-extrabold my-2">ClothStore</h1>
          <p className="text-base leading-relaxed">
            A web app for visualizing personalized Spotify data. View your top
            artists, top tracks, recently played tracks, and detailed audio
            information about each track. Create and save new playlists of
            recommended tracks based on your existing playlists and more.
          </p>
        </div>

        {/* Phần Ảnh */}
        <div className="w-full flex justify-end md:justify-center">
          <img
            className="w-full max-w-2xl mx-2 rounded-xl border-purple-400 border-r-2 border-t-12 "
            src="https://raw.githubusercontent.com/Kaicity/Cloth-Store-Ecommerce/main/Cloth-Store-Client-FE/src/assets/Screenshot%202024-05-19%20235908.png"
            alt="Project Screenshot"
          />
        </div>
      </div>
    </div>
  );
};
