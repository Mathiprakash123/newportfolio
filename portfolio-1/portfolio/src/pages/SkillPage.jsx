import React from "react";

const SkillsPage = () => {
  // Adjust the structure to include proficiency levels
  const skillCategories = [
    {
      category: "Frontend Development",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "ReactJS", level: 75 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 70 },
        { name: "Spring Boot", level: 65 },
        { name: "MySQL", level: 75 },
      ],
    },
    {
      category: "Programming Languages",
      skills: [
        { name: "C++", level: 80 },
        { name: "Java", level: 70 },
      ],
    },{
      category:"Other",
      skills:[
        {
          name:"Amazon Web Services",level:50
        }
      ]
    }
  ];

  return (
    <div className=" mt-32">
      <h2 className="text-2xl font-bold text-center mb-10">My Skills</h2>
      <div className="p-10 bg-gray-800 rounded">
        {skillCategories.map((category, index) => (
          <div key={index} className="m-4 p-5 rounded bg-gray-700">
            <h3 className="text-xl font-semibold mb-3">{category.category}</h3>
            <ul className="list-none">
              {category.skills.map((skill, index) => (
                <li key={index} className="text-white py-1">
                  <div className="flex justify-between items-center">
                    <span>{skill.name}</span>
                    <span className="ml-2 text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-600 rounded h-2.5 my-1">
                    <div
                      className="bg-purple-500 h-2.5 rounded"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillsPage;