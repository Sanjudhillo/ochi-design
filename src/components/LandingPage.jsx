import { motion } from 'framer-motion';
import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";

const LandingPage = () => {
    
    return (
        <div data-scroll data-scroll-section data-scroll-speed="-0.3" className="w-full h-screen bg-zinc-900 pt-1">
            <div className="textstructure mt-32 px-20">
                {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
                    return (
                        <div key={index} className='masker relative'>
                            <div className='w-fit flex items-end overflow-hidden'>
                                {index === 1 && (
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: "9vw" }}
                                        transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                                        className='mr-[1vw] w-[9vw] h-[5.7vw] -top-[.2vw] relative rounded-md bg-[#CDEA68]'
                                    />
                                )}
                                <h1 className="pt-[2vw] -mb-[1vw] uppercase text-[9vw] leading-[8vw] font-bold font-[Founders_Grotesk_X-Condensed] text-white">{item}</h1>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
                {["For public and private companies", "From the first pitch to IPO"].map((item, index) => (
                    <p key={index} className='text-md font-light tracking-tight leading-none text-zinc-400'>{item}</p>
                ))}
                <div className="start flex items-center gap-5">
                    <div className='px-5 py-2 border-[1px] border-zinc-400 font-light text-md uppercase rounded-full text-zinc-400 hover:text-white hover:border-white transition-colors duration-300 cursor-pointer'>Start the project</div>
                    <div className='w-10 h-10 flex items-center justify-center border-[2px] border-zinc-500 rounded-full hover:border-white transition-colors duration-300 cursor-pointer'>
                        <span className='rotate-[45deg] text-zinc-400 hover:text-white transition-colors duration-300'>
                            <FaArrowUpLong />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LandingPage