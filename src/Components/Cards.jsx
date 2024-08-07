import React from 'react'

function Cards() {
  return (
    <div className="w-full h-[70vh] bg-zinc-100 flex items-center px-20 gap-5 border-t-[1px] border-zinc-400">
      <div className="cardcontainer h-[50vh] w-1/2">
        <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-[#004D43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2 border-[#9DC660] left-10 bottom-10 text-[#9DC660]">
            &copy;2019-2022
          </button>
        </div>
      </div>
      <div className="cardcontainer flex gap-5 w-1/2 h-[50vh]">
        <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2 border-[#F1F1F1] left-10 bottom-10 text-[#F1F1F1]">
            RATION 5.0 ON
          </button>
        </div>
        <div className="card relative flex items-center justify-center rounded-xl w-full h-full bg-[#212121]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
            alt=""
          />
          <button className="absolute px-5 py-1 rounded-full border-2 border-[#F1F1F1] left-10 bottom-10 text-[#F1F1F1]">
            BUSINESS BOOTCAMP
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards