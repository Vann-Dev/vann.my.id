"use client"

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import About from "@/sections/about"
import Contact from '@/sections/contact'
import Home from "@/sections/home"
import Work, { IPortfolioData } from '@/sections/work'
import Image from 'next/image'
import React, { useEffect, useState } from "react";
import { gsap } from 'gsap';
import Loading from '@/components/loading'

export default function Page() {
  const [portfolio, setPortfolio] = useState<IPortfolioData[]>()

  useEffect(() => {
    const getPortfolio = async () => {
      fetch("https://dashboard.vannapps.com/items/stevan_portfolios").then(async (res) => {
        const response = await res.json() as unknown as { data: IPortfolioData[] }

        setPortfolio(response.data)
      }).catch(err => console.log(err))
    }

    if (!portfolio) {
      getPortfolio()
    }
  }, [portfolio])

  if (!portfolio) return (
    <Loading />
  )

  return (
    <main id='main' className='overflow-hidden'>
      <Navbar />

      <Home />

      <svg className='-mt-24 md:-mt-32 lg:-mt-28 xl:-mt-48 w-full h-auto fill-background' viewBox="0 0 1440 196" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 0C995.394 306.648 292.081 127.77 -4 0V196H1440V0Z" />
      </svg>

      <About />

      <div className='mt-32 relative'>
        <Image src={"/tree.png"} width={400} height={700} alt='' className='rounded-2xl bottom-4 md:bottom-32 lg:bottom-48 xl:bottom-[210px] xl:w-[600px] absolute -right-44' />

        <svg className="fill-forest w-full bottom-0 relative" viewBox="0 0 1440 510" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1635 373.842C901.911 -303.222 123.546 91.7319 -174 373.842V510H1635V373.842Z" />
        </svg>
      </div>

      <Work data={portfolio} />

      <svg className='w-full -mt-32 md:-mt-40 lg:-mt-48 xl:-mt-56 fill-sea' viewBox="0 0 1440 420" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 11.4142C1040.49 -87.5655 473.018 503.498 0 11.4142V419.06H1440V11.4142Z" />
      </svg>

      <Contact />

      <svg className='w-full -mt-32 lg:-mt-48 xl:-mt-56 relative fill-black' viewBox="0 0 1440 342" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 116.873C855.416 -41.2438 537.087 -36.6549 -16 116.873V342H1440V116.873Z" />
      </svg>

      <Footer />

    </main>
  )
}
