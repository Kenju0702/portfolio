import React from "react";
function SkillDetail({ skills }) {
    return (
        <div className="my-14 -mx-30">
            <div className="grid grid-cols-4 gap-12 px-10">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col justify-around items-center ">
            <skill.icon className="text-7xl " style={{ color: skill.color }} />
            <p className="uppercase mt-4 font-bold">{skill.title}</p>
          </div>
        ))}
      </div>
        </div>
      
    );
  }

export default SkillDetail;
