import { motion } from 'framer-motion'
import React from 'react'

function Marquee() {
  return (
    <div data-scroll data-scroll-section  data-scroll-speed=".001" className='w-full py-20 rounded-tl-3xl rounded-tr-3xl text-white bg-[#004D43]'>
        <div className='text border-t-2 border-b-2 border-zinc-400 flex overflow-hidden whitespace-nowrap'>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[22vw] leading-none font-semibold pr-5'>WE ARE OCHI</motion.h1>
            <motion.h1 initial={{x: "0"}} animate={{x: "-100%"}} transition={{repeat: Infinity, ease: "linear", duration: 10}} className='text-[22vw] leading-none font-semibold'>WE ARE OCHI</motion.h1>
        </div>
    </div>
  )
}

export default Marquee
