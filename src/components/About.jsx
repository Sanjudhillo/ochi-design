import { div } from 'framer-motion/client';
import React from 'react';  

const About = () => {
    return(
        <div className='w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black'>
            <h1 className='font-[Neue_Montreal] text-[4vw] leading-[4.5vw] tracking-tight'>Ochi is a strategic partner for fast-growing  tech business that need
                 to raise funds, sell products, explain complex ideas, and hire great people.</h1>
            <div className='w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]'>
                <div className='w-1/2'>
                <h1 className='text-7xl'>Our approach:</h1>
                <button className=' flex uppercase items-center gap-10 px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white'>Read More
                    <div className='w-3 h-3 bg-zinc-100 rounded-full'></div>
                </button>
                </div>
                <div className='w-1/2 h-[70vh] bg-[#b0c859] rounded-3xl overflow-hidden relative'>
                    <img 
                        src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-1326x1101.jpg" 
                        alt="Ochi Design Studio" 
                        className="w-full h-full object-cover object-center brightness-110 contrast-125 hover:scale-105 transition-all duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#b0c859]/20"></div>
                </div>
            </div>
        </div>

    )
}
export default About;