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
}

export default function Work({ data }: { data: IPortfolioData[] }) {
    return (
        <section id="work" className="-mt-1 bg-forest min-h-screen">
            <div className="container px-4 md:px-8 pb-72 pt-32">
                <h2 data-aos="zoom-in" className="text-white text-3xl md:text-6xl xl:text-7xl text-center tracking-wide">My Projects</h2>

                <div className="mt-14 columns-1 md:columns-2 lg:columns-4">
                    {
                        data?.map((val) => (
                            <Link data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" href={val.link} key={val.id} className='text-white transition-colors duration-300 hover:border-white border-4 border-transparent bg-grass p-4 rounded-xl break-inside-avoid-column flex flex-col justify-between h-full mb-3'>
                                <div>
                                    <h2 className='font-bold text-sm md:text-lg tracking-widest'>{val.title}</h2>
                                    <p className='text-xs mt-2 md:text-sm'>{val.description}</p>
                                </div>

                                <div>
                                    <div className='flex justify-between w-full items-end mt-6'>
                                        <div>
                                            <Link href={val.link}>
                                                <Image className='w-6 aspect-square hover:scale-125 transition-all' alt='' src={"/icons/link.svg"} height={0} width={0} />
                                            </Link>
                                            {
                                                val.custom_links &&
                                                <div className='mt-4'>
                                                    {
                                                        val.custom_links?.map(link => (
                                                            <Link key={link.link_name} href={link.link_url}>
                                                                <p className='text-xs md:text-sm text-white/70 underline hover:text-white transition-colors'>{link.link_name}</p>
                                                            </Link>
                                                        ))
                                                    }
                                                </div>
                                            }
                                        </div>
                                        {
                                            val.github_link
                                            &&
                                            <Link href={val.github_link}>
                                                <Image className='w-5 aspect-square hover:scale-125 transition-all' alt='' src={"/icons/github.svg"} height={0} width={0} />
                                            </Link>
                                        }
                                    </div>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}