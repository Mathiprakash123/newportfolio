import React from "react";
import ContactPage from "./ContactPage";
import AboutPage from "./AboutPage";
import SkillPage from "./SkillPage";
import ProjectPage from "./ProjectPage";
const HomePage = () => {
  return (
    <div>
      <div className=" mt-40 flex space-x-40">
        {/* Content */}
        <div className=" text-white">
          <div className=" font-bold text-3xl">
            <h2> Welcome! Hi, I am</h2>
            <h2>Mathiprakash Thirumurugan</h2>
            <h2 className=" mt-10">
              I am a{" "}
              <span className=" text-purple-400">Frontend Developer</span>
            </h2>
          </div>

          <p className="text-base mt-10">
            A Frontend Developer and a fervent learner from Sri Krishna College
            of Technology. With expertise in C++, Java, HTML, CSS, JavaScript,
            ReactJS, Tailwind CSS, and MySQL, I am on a quest to transform ideas
            into digital realities. My portfolio is a showcase of dedication to
            quality, a testament to my passion for technology, and a reflection
            of my journey through challenging projects and continuous growth.
            Ready to innovate, collaborate, and excel.
          </p>
          <button className=" bg-purple-600 rounded p-3 mt-10 hover:bg-purple-700">
            Check My Resume
          </button>
        </div>

        {/* Image */}
        <div>
          <img
            src="https://media.licdn.com/dms/image/D5603AQGqUjAlVYfY0A/profile-displayphoto-shrink_200_200/0/1693233844735?e=2147483647&v=beta&t=2AQohhPJocZO2wGDXYukUK4rW47Uh7oeDSRkJhohQyk"
            alt="No-Image"
            className="rounded-full w-[1400px] h-[300px] "
          />
        </div>
      </div>
      <SkillPage />
      <ProjectPage/>
      <ContactPage />
    </div>
  );
};

export default HomePage;