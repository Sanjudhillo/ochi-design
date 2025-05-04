import { div } from 'framer-motion/client';
import React, { useEffect } from 'react';
import { useState } from 'react';

const Eyes = () => { 

    const [rotate, setRotate] = useState(0);

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;
            // console.log(x,y)
            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;
            //  console.log(deltaX,deltaY)
            var angle = Math.atan2(deltaY, deltaX) * (180/Math.PI);
            //  console.log(angle)

            setRotate(angle-180);

        })
    })
    return(
        <div className='eyes w-full h-screen overflow-hidden'>
            <div data-scroll data-scroll-speed="-.7" className=' relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
                <div className=' flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  rounded'>
                    <div className=' flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                        <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
                            <div style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}className=" absolute w-full line h-10 top-26 left-42 -translate-x-[50%] -translate-y-[50%]">
                                <div className="w-12 h-12 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center'>
                    <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative'>
                        <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className=' w-full line h-10 absolute top-26 left-42 -translate-x-[50%] -translate-y-[50%]'>
                            <div className='w-12 h-12 rounded-full bg-zinc-100'></div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
        }
    
export default Eyes;