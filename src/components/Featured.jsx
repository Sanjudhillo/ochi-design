import { motion, useAnimate , useAnimation} from "framer-motion";
import { div } from "framer-motion/client";
import React from "react";


const Featured = () => {
    
    const cards = [useAnimation(),useAnimation()];
    const handleHover=(index)=>{
        cards[index].start({y:"0%"})
    }

    const handleHoverEnd=(index)=>{
        cards[index].start({y:"100%"})
    }

    return(
        <div data-scroll data-scroll-section className="w-full py-20 relative">
            <div className="w-full px-20 border-b-2 pb-15 border-zinc-700">
                <h1 className="text-8xl font-['Neue_Montreal'] tracking-tight">Featured projects</h1>
            </div>
            <div className="px-20">
            <div className="cards w-full flex gap-10 mt-10">
                    <motion.div onHoverStart={()=>handleHover(0)}
                    onHoverEnd={()=>{handleHoverEnd(0)}}
                    className="cardcontainer w-1/2 h-[75vh] relative">
                       
                        <h1 className="absolute flex text-[#CDEA68] overflow-hidden right-0 top-1/2 translate-x-1/2 -translate-y-1/2 z-[9] leading-none text-8xl font-regular tracking-tight">
                        {"FYDE".split('').map((item,index) =>
                          <motion.span initial={{y:"100%"}} animate={cards[0]}
                          transition={{ease:[0.2 , 1 , 0.36 ,1], delay:index*.01}}
                          className="inline-block" >{item}</motion.span>)}
                        </h1>
                        <div className="card w-full rounded-xl h-full overflow-hidden">
                            <img 
                                className="w-full h-full object-cover" 
                                src="https://ochi.design/wp-content/uploads/2023/09/Frame-3875-1326x1101.jpg" 
                                alt="Featured Project" 
                            />
                        </div>
                    </motion.div>
                    <motion.div onHoverStart={()=>handleHover(1)}
                    onHoverEnd={()=>{handleHoverEnd(1)}} className="cardcontainer w-1/2 h-[75vh] relative">
                        <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] tracking-tight leading-none text-8xl font-regular">
                        {"VISE".split('').map((item,index) =>
                          <motion.span initial={{y:"100%"}} animate={cards[1]}
                          transition={{ease:[0.22, 1 , 0.36 ,1],
                             delay:index*.01}}
                          className="inline-block" >{item}</motion.span>)}
                        </h1>
                        <div className="card w-full overflow-hidden rounded-xl h-full">
                            <img 
                                className="w-full h-full object-cover" 
                                src="https://ochi.design/wp-content/uploads/2023/09/Frame-3875-1326x1101.jpg" 
                                alt="Featured Project" 
                            />
                        </div>
                    </motion.div>
            </div>
            </div>
        </div>
    )
}
export default Featured;