"use client"

import { gsap } from 'gsap';
import Image from 'next/image';
import { useEffect, useRef } from 'react';


export default function CloudBackground() {
    const container = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const ctx = gsap.context((self) => {
            const clouds = self.selector!('.cloudy');

            for (const cloud of clouds) {
                gsap.fromTo(cloud,
                    {
                        x: -500,
                        opacity: Math.floor(Math.random() * (90 - 70 + 1) + 70) / 100,
                    },
                    {
                        x: window.innerWidth,
                        duration: Math.floor(Math.random() * (30 - 20 + 1) + 20),
                        repeat: -1,
                        ease: "none",
                        delay: Math.floor(Math.random() * (3 - 0 + 1) + 0),
                        immediateRender: true,
                    }
                ).play()
            }
        }, container);

        return () => ctx.revert();
    }, [])

    return (
        <div ref={container} className='relative w-screen'>
            <Image className='cloudy absolute ' width={200} height={200} alt='' src={"/cloud-1.webp"} />
            <Image className='cloudy absolute top-20' width={50} height={50} alt='' src={"/cloud-2.webp"} />
            <Image className='cloudy absolute top-32' width={150} height={150} alt='' src={"/cloud-1.webp"} />
            <Image className='cloudy absolute top-24' width={80} height={80} alt='' src={"/cloud-2.webp"} />
            <Image className='cloudy absolute top-20' width={180} height={180} alt='' src={"/cloud-1.webp"} />
            <Image className='cloudy absolute top-44' width={40} height={40} alt='' src={"/cloud-2.webp"} />
            <Image className='cloudy absolute top-20' width={250} height={250} alt='' src={"/cloud-1.webp"} />
        </div>
    )
}