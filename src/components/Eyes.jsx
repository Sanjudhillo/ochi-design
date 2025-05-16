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
            <div data-scroll data-scroll-speed="-.7" className='relative w-full h-full'>
                <img 
                    src="/eyes bg.avif" 
                    alt="Background" 
                    className="w-full h-full object-cover brightness-75 contrast-125"
                    loading="eager"
                />
                <div className="absolute inset-0 bg-[#CDEA68]/5 mix-blend-overlay"></div>
                <div className='flex gap-10 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rounded'>
                    <div className=' flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-zinc-100'>
                        <div className="relative w-2/3 h-2/3 bg-zinc-900 rounded-full">
                            <div style={{ 
                                transform: `rotate(${rotate}deg)`,
                                position: 'absolute',
                                top: '50%',
                                left: '50%',
                                transformOrigin: 'center'
                            }} className="w-full line h-10 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-12 h-12 rounded-full bg-zinc-100"></div>
                            </div>
                        </div>
                    </div>
                    <div className='w-[15vw] h-[15vw] rounded-full bg-zinc-100 flex items-center justify-center'>
                    <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative'>
                        <div style={{
                            transform: `rotate(${rotate}deg)`,
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transformOrigin: 'center'
                        }} className='w-full line h-10 -translate-x-1/2 -translate-y-1/2'>
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