export default function Home() {
    return (
        <section id='home' className='min-h-screen relative bg-[url("/hero-bg.webp")] bg-no-repeat bg-cover bg-center w-screen h-screen'>
            <div data-aos="fade-down" data-aos-duration="1000" className='px-4 md:px-8 pt-64 lg:pt-72 text-white'>
                <h1 className='outline-primary text-center outline-4 text-4xl md:text-7xl lg:text-9xl stroke tracking-wide text-white'>HELLO, WORLD</h1>
                <p className='text-center text-white tracking-wide font-normal md:text-lg lg:text-xl text-sm drop-shadow-2xl'>A very very very beginner web Developer</p>
                <p className='mt-52 text-lg lg:text-2xl text-center animate-bounce tracking-wide drop-shadow-2xl'>Scroll Down</p>
            </div>

            <svg className='absolute bottom-0 -mt-24 md:-mt-32 lg:-mt-28 xl:-mt-48 w-full h-auto fill-background' viewBox="0 0 1440 196" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1440 0C995.394 306.648 292.081 127.77 -4 0V196H1440V0Z" />
            </svg>
        </section>
    )
}