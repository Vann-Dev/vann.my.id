import CloudBackground from '@/components/cloudBackground'
import Image from 'next/image'

export default function About() {
    return (
        <section id="about" className='bg-background -mt-1 relative selection:text-background selection:bg-primary'>
            <div className='container px-4 md:px-8 pt-10 md:pt-20 xl:pt-32 z-30 flex-col-reverse relative flex md:flex-row gap-12 md:gap-0 items-center md:justify-between'>
                <div className='md:w-1/2 grid justify-between z-20'>
                    <h2 data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" className='text-primary text-3xl md:text-6xl xl:text-7xl font-semibold'>
                        Who Are You?
                    </h2>
                    <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="300" className='grid gap-y-4 mt-4 md:mt-7 md:text-xl xl:text-2xl'>
                        <p className='text-justify'>
                            Im Stevan, from Indonesia, Im Full-Stack Developer but more likely Front-End developer.
                        </p>
                        <p className='text-justify'>
                            I known as Vann at Discord and known as Vann-Dev at GitHub.
                        </p>
                        <p className='text-justify'>
                            My schedule?, nope, coding is my usual activity, i code at morning, evening, night, even dawn.
                        </p>
                    </div>
                </div>

                <div data-aos="fade-left" data-aos-delay="500" className='aspect-[2/3] w-1/2 md:w-1/4 relative mx-auto md:mx-0'>
                    <Image src={"/image-2.jpg"} layout='fill' objectFit='cover' alt='' className='rounded-2xl relative z-10' />
                </div>
            </div>

            <div className='absolute top-20'>
                <CloudBackground />
            </div>
        </section>
    )
}