"use client"

import Image from "next/image";
import Link from "next/link";

export interface IPortfolioData {
    id: string;
    date_created: string;
    date_updated: string;
    github_link: string | null;
    title: string;
    link: string;
    description: string;
    custom_links: {
        link_name: string;
        link_url: string;
    }[] | null;
    image: string;
}

export default function Work({ data }: { data: IPortfolioData[] }) {
    return (
        <section id="work" className="-mt-1 bg-forest min-h-screen selection:text-forest selection:bg-white">
            <div className="container px-4 md:px-8 pb-72 pt-32">
                <h2 data-aos="zoom-in" className="text-white text-3xl md:text-6xl xl:text-7xl text-center tracking-wide">My Projects</h2>

                <div className="mt-14 columns-1 md:columns-2 lg:columns-3">
                    {data?.map((val) => (
                        <Link data-aos="zoom-in" href={val.link} key={val.id} className='text-white w-full aspect-video relative transition-colors duration-300 overflow-hidden hover:border-white border-4 border-transparent bg-grass rounded-xl break-inside-avoid-column flex flex-col justify-between mb-3'>
                            <Image src={`https://dashboard.vannapps.com/assets/${val.image}` ?? ""} width={2000} height={2000} alt='' className='min-h-full' />
                            <div className="absolute bg-gradient-to-b from-transparent via-black/20 to-black/70 top-0 left-0 w-full h-full" />
                            <h2 className='font-medium text-sm md:text-lg tracking-widest absolute bottom-3 left-3'>{val.title}</h2>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}