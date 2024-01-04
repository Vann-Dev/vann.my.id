"use client"

import Link from "next/link";
import { gsap } from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

export default function Navbar() {
    const tl = useRef<any>(null)
    gsap.registerPlugin(ScrollTrigger)

    useEffect(() => {
        const ctx = gsap.context(() => {
            tl.current = gsap.timeline()
                .from("#navbar", {
                    backgroundColor: "#9ACC50",
                    color: "white",
                    borderColor: "white",
                })
                .to("#navbar", {
                    backgroundColor: "white",
                    color: "#9ACC50",
                    borderColor: "#9ACC50",
                    scrollTrigger: {
                        trigger: "#about",
                        start: "100px center",
                        end: "center center",
                        scrub: true,
                    }
                })
                .fromTo("#navbar", {
                    backgroundColor: "white",
                    color: "#9ACC50",
                    borderColor: "#9ACC50",
                }, {
                    backgroundColor: "#228C48",
                    color: "white",
                    borderColor: "white",
                    scrollTrigger: {
                        trigger: "#work",
                        start: "top center",
                        end: "center center",
                        scrub: true,
                    }
                })
                .fromTo("#navbar", {
                    backgroundColor: "#228C48",
                    color: "white",
                    borderColor: "white",
                }, {
                    backgroundColor: "#B3DFFF",
                    color: "white",
                    borderColor: "white",
                    scrollTrigger: {
                        trigger: "#contact",
                        start: "top center",
                        end: "center center",
                        scrub: true,
                    }
                })
                .fromTo("#navbar", {
                    backgroundColor: "#B3DFFF",
                    color: "white",
                    borderColor: "white",
                }, {
                    backgroundColor: "black",
                    color: "white",
                    borderColor: "white",
                    scrollTrigger: {
                        trigger: "#footer",
                        start: "top center",
                        end: "center center",
                        scrub: true,
                    }
                })
        });

        return () => ctx.revert();
    }, [])

    return (
        <nav data-aos="fade-down" className="fixed top-0 flex justify-center w-full z-50 drop-shadow-2xl">
            <div id="navbar" className="text-base md:text-lg lg:text-2xl text-white gap-x-5 md:gap-x-10 mt-3 md:mt-5 lg:mt-8 md:w-1/2 bg-primary rounded-full px-6 py-2 flex justify-center border-4">
                <Link className="hover:-translate-y-1 hover:underline transition-transform" href={"#home"} >Home</Link>
                <Link className="hover:-translate-y-1 hover:underline transition-transform" href={"#about"} >About</Link>
                <Link className="hover:-translate-y-1 hover:underline transition-transform" href={"#work"} >Work</Link>
                <Link className="hover:-translate-y-1 hover:underline transition-transform" href={"#contact"} >Contact</Link>
            </div>
        </nav>
    )
}