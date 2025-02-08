import React from "react";
function SkillDetail({ skills }) {
    return (
        <div className="my-14 md:-mx-30">
            <div className="grid md:grid-cols-3 lg:grid-cols-4 grid-cols-2 md:gap-12 gap-6 px-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col justify-around  items-center ">
            <skill.icon className="text-7xl " style={{ color: skill.color }} />
            <p className="uppercase mt-4 font-bold">{skill.title}</p>
          </div>
        ))}
      </div>
        </div>
      
    );
  }

export default SkillDetail;
