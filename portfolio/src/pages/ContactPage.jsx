import React from "react";

const ContactPage = () => {
  return (
    <div className="text-white mt-32">
      <h1 className="text-4xl font-bold text-center">Contact</h1>
      <div className=" justify-center text-center mt-10 text-xm">
        <p className="text-xm">
          Feel free to reach out to me for any questions!
        </p>
        <form
          action=""
          className=" space-x-3 bg-gray-800 w-[500px] h-full rounded m-auto pl-5 space-y-6 py-5"
        >
          <legend className="font-semibold text-xl float-start">
            Email Me
          </legend>
          <input
            type="email"
            className="block w-[90%]  p-3 rounded bg-transparent border border-purple-500 outline-none"
            placeholder="Enter Your Email"
          />
          <input
            type="text"
            className="block w-[90%]  p-3 rounded bg-transparent border border-purple-500 outline-none"
            placeholder="Enter Your Name"
          />
          <textarea
            className=" block w-[90%] p-3 rounded bg-transparent border border-purple-500 outline-none"
            placeholder="Enter Your Messages"
          />
          <button className="w-[50%]  bg-purple-600 p-3 rounded hover:bg-purple-700">
            send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
