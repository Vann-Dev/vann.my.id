import Image from "next/image";
import Link from "next/link";

export default function Contact() {
    return (
        <section id="contact" className="bg-sea relative -mt-1 pt-12">
            <div className="container px-4 md:px-8 pt-20 text-white pb-72 xl:pb-96">
                <h2 data-aos="flip-up" className='text-center tracking-wide drop-shadow-2xl text-3xl md:text-6xl xl:text-7xl font-semibold'>
                    Interested to work together?
                </h2>

                <div data-aos="zoom-in" className="mt-20 md:mt-44 lg:mt-64">
                    <h3 className="text-center drop-shadow-2xl text-xl md:text-4xl lg:text-6xl">
                        Contact me at
                    </h3>
                    <div className="grid place-items-center">
                        <Link href={"mailto:me@vann.my.id"} className="text-center drop-shadow-2xl mt-4 md:mt-8 lg:mt-14 text-base md:text-2xl lg:text-4xl">me@vann.my.id</Link>
                    </div>
                </div>

                <Image src={"/koi.png"} alt="" width={300} height={300} className="w-44 md:w-72 lg:w-80 xl:w-96 absolute -left-16 md:-left-28 top-44 md:top-64 lg:top-80" />

                <div className="flex justify-between mt-32 md:mt-52 lg:mt-64">
                    <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="0" className="rounded-full bg-bubble drop-shadow-2xl transition-transform hover:-translate-y-3 w-16 md:w-28 xl:w-44 aspect-square flex items-center justify-center">
                        <Link href={"https://discord.com/users/435497505883422721"}>
                            <Image className='w-12 md:w-20 xl:w-32' alt='' src={"/contact-icons/discord.svg"} height={0} width={0} />
                        </Link>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="100" className="rounded-full bg-bubble drop-shadow-2xl transition-transform hover:-translate-y-3 w-16 md:w-28 xl:w-44 aspect-square flex items-center justify-center">
                        <Link href={"https://github.com/Vann-Dev"}>
                            <Image className='w-12 md:w-20 xl:w-32' alt='' src={"/contact-icons/github.svg"} height={0} width={0} />
                        </Link>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="300" className="rounded-full bg-bubble drop-shadow-2xl transition-transform hover:-translate-y-3 w-16 md:w-28 xl:w-44 aspect-square flex items-center justify-center">
                        <Link href={"https://wa.me/6285280423005"}>
                            <Image className='w-12 md:w-20 xl:w-32' alt='' src={"/contact-icons/whatsapp.svg"} height={0} width={0} />
                        </Link>
                    </div>
                    <div data-aos="fade-up" data-aos-anchor-placement="bottom-bottom" data-aos-delay="500" className="rounded-full bg-bubble drop-shadow-2xl transition-transform hover:-translate-y-3 w-16 md:w-28 xl:w-44 aspect-square flex items-center justify-center">
                        <Link href={"https://www.linkedin.com/in/stevanvincent/"}>
                            <Image className='w-12 md:w-20 xl:w-32' alt='' src={"/contact-icons/linkedin.svg"} height={0} width={0} />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}