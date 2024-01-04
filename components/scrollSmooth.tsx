"use client"

import Lenis from '@studio-freight/lenis'
import React, { useEffect } from "react";
import Aos from "aos";
import 'aos/dist/aos.css';

export default function ScrollSmooth({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        const lenis = new Lenis();
        Aos.init()

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return (
        children
    )
}