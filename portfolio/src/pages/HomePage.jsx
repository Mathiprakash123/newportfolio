import React from "react";

const HomePage = () => {
  return (
    <div className=" mt-40 flex space-x-4">
      {/* Content */}
      <div className=" text-white">
        <div className=" font-bold text-3xl">
          <h2>Hi,I am</h2>
          <h2>Mathiprakash Thirumurugan</h2>
          <h2 className=" mt-10">
            I am a <span className=" text-purple-400">Frontend Developer</span>
          </h2>
        </div>

        <p className="text-base mt-10">
          I am a motivated and versatile individual, always eager to take an new
          challenges.With a passion for learning I am dedicated to delivering
          high-quality results.With a positive attitude and a growth mindset.I
          am ready to make a meaningful contribution and achieve great things
        </p>
        <button className=" bg-purple-600 rounded p-3 mt-5 hover:bg-purple-700">
          Check My Resume
        </button>
      </div>

      {/* Image */}
      <div>
        <img
          src="https://media.licdn.com/dms/image/D5603AQGqUjAlVYfY0A/profile-displayphoto-shrink_200_200/0/1693233844735?e=2147483647&v=beta&t=2AQohhPJocZO2wGDXYukUK4rW47Uh7oeDSRkJhohQyk"
          alt="No-Image"
          className="rounded-full w-[1000px] h-[300px] "
        />
      </div>
    </div>
  );
};

export default HomePage;
