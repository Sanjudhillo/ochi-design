import { div } from "framer-motion/client";
import React from "react";

const Cards = () => {
    return(
        <div className="h-screen w-full  bg-zinc-100 flex items-center px-32 gap-5">
            <div className="cardcontainer h-[50vh] w-1/2 ">
            <div className="card w-full rounded-xl h-full bg-[#004D43] flex items-center justify-center relative">
                <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
                <button className="absolute px-5 py-1 border-2 left-10 bottom-10 rounded-full">&copy;2024-2025</button>
            </div>
            </div>
            <div className="cardcontainer h-[50vh] w-1/2 flex gap-5">

            <div className="card relative w-full rounded-xl h-full bg-[#192826] flex items-center justify-center">
               <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
               <button className="absolute px-5 py-1 border-2 left-10 bottom-10 rounded-full">&copy;2025</button>
            </div>
            <div className="card relative w-full rounded-xl h-full bg-[#192826] flex items-center justify-center">
               <img className="w-32" src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" />
               <button className="absolute px-5 py-1 border-2 left-10 bottom-10 rounded-full">&copy;2025</button>
            </div>

           
            </div>

        </div>
    )
}
export default Cards;