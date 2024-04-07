import React from "react";

const projects = [
  {
    id: 1,
    title: "To-Do List",
    skills: ["Html", "Tailwind Css", "React Js"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique error explicabo expedita voluptatum adipisci amet excepturi. Facere, tempora nostrum?",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/024/321/133/original/checklist-pixel-perfect-gradient-linear-ui-icon-wellness-to-do-list-questions-form-feedback-poll-line-color-user-interface-symbol-modern-style-pictogram-isolated-outline-illustration-vector.jpg",
  },
  {
    id: 2,
    title: "Calculator",
    skills: ["Html", "Css", "Js"],
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident similique error explicabo expedita voluptatum adipisci amet excepturi. Facere, tempora nostrum?",
    imageUrl:
      "https://icons.iconarchive.com/icons/dtafalonso/android-lollipop/512/Calculator-icon.png",
  },
  // Add more projects here
];

const ProjectPage = () => {
  return (
    <div className="text-white mt-32 space-y-3">
      <h1 className="text-4xl font-bold text-center mb-10">Projects</h1>
      {projects.map((project) => (
        <div key={project.id} className="bg-gray-800 w-full h-full p-5 rounded flex space-x-32">
          <img src={project.imageUrl} alt={`${project.title} image`} className="w-[200px] rounded" />
          <div className="space-y-4">
            <h1 className="text-xl font-semibold">{project.title}</h1>
            <p>Skills Included</p>
            <ul className="flex space-x-6">
              {project.skills.map((skill, index) => (
                <li key={index} className="border border-purple-400 rounded text-center px-2 py-1">
                  {skill}
                </li>
              ))}
            </ul>
            <h4 className="text-xl font-semibold">Description</h4>
            <p>{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectPage;
