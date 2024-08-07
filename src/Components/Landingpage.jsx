import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {
  return (
    <div
      onScroll={() => show()}
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen pt-1"
    >
      <div className="textstructure mt-20 px-20">
        {["WE CREATE", "EYE-OPENING", "PRESENTATION"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-center">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="rounded overflow-hidden w-[7.5vw] h-[5vw] relative top-[0.5vw]"
                  >
                    <img
                      src="https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg"
                      alt=""
                    />
                  </motion.div>
                )}
                <h1 className="text-[7.5vw] leading-[6vw] tracking-tighter">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-400 mt-32 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-2 border-[2px] border-zinc-500 rounded-full font-light text-md">
            START THE PROJECT
          </div>
          <div className="w-10 h-10 rounded-full border-[1px] border-zinc-600 flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
