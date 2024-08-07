import React from "react";

function About() {
  return (
    <div className="w-full p-20 bg-[#CDEA68]">
      <h1 className="text-6xl text-black leading-[4.5vw] tracking-tight">
        Ochi is a strategic partner for fast-growing tech businesses that need
        to raise funds, sell products, explain complex ideas, and hire great
        people.
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 border-[#a1b562] mt-20">
        <div className="w-1/2">
          <h1 className="text-6xl text-black">Our approach:</h1>
          <button className="flex gap-10 items-center px-10 py-6 mt-10 bg-zinc-900 text-white rounded-full">
            READ MORE <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl overflow-hidden">
        <img className="h-[70vh]" src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg" alt="" /></div>
      </div>
    </div>
  );
}

export default About;
