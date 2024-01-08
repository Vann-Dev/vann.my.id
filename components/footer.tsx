import Link from "next/link";

export default function Footer() {
    return (
        <footer id="footer" className="bg-black text-white pb-24 relative -mt-1">
            <div className="container px-4 md:px-8 pt-24" >
                <div className="grid" >
                    <h3 className="mb-2 md:mb-6 lg:mb-10 text-2xl md:text-3xl lg:text-5xl">Assets by:</h3>

                    <Link href={"https://id.pinterest.com/pin/48484133480323275/"} className="w-fit tracking-wider hover:underline md:text-xl lg:text-3xl">Pinterest</Link>
                    <Link href={"https://id.pinterest.com/pin/620863498620558581/"} className="w-fit tracking-wider hover:underline md:text-xl lg:text-3xl">zhpngtree</Link>
                    <Link href={"https://id.pinterest.com/pin/307792955791894554/"} className="w-fit tracking-wider hover:underline md:text-xl lg:text-3xl">Freepik</Link>
                    <Link href={"https://id.pinterest.com/pin/1055599903567409/"} className="w-fit tracking-wider hover:underline md:text-xl lg:text-3xl">Pinterest</Link>
                    <Link href={"https://id.pinterest.com/pin/1044694444797669785/"} className="w-fit tracking-wider hover:underline md:text-xl lg:text-3xl">Freepik</Link>
                    <Link href={"https://id.pinterest.com/pin/351912463885473/"} className="w-fit tracking-wider hover:underline md:text-xl lg:text-3xl">Silvana</Link>
                </div >

                <div className="grid mt-28">
                    <h3 className="mb-2 md:mb-6 lg:mb-10 text-2xl md:text-3xl lg:text-5xl">Reference from:</h3>

                    <Link href={"https://raflymaulana.me"} className="w-fit tracking-wider hover:underline md:text-xl lg:text-3xl">https://raflymaulana.me</Link>
                    <Link href={"https://kuronushi.dev"} className="w-fit tracking-wider hover:underline md:text-xl lg:text-3xl">https://kuronushi.dev</Link>
                </div>

                <div className="grid mt-28">
                    <h3 className="mb-2 md:mb-6 lg:mb-10 text-2xl md:text-3xl lg:text-5xl">Special thanks to:</h3>

                    <Link href={"https://kuronushi.dev"} className="w-fit tracking-wider hover:underline md:text-xl lg:text-3xl">Satou Fuyuki</Link>
                    <Link href={"https://kagchi.my.id"} className="w-fit tracking-wider hover:underline md:text-xl lg:text-3xl">KagChi</Link>
                </div>

                <h3 className="mb-2 md:mb-6 lg:mb-10 text-xs md:text-base lg:text-xl text-right mt-28">Made with 💖 by Vann & Friends</h3>

                <p className="mb-2 md:mb-6 lg:mb-10 text-xs md:text-base lg:text-xl text-center mt-28 px-10 md:px-32 lg:px-52">Website Licensed Under GNU GPLv3. Modification is possible while copyright and license notices must be preserved.</p>

                <p className="mb-2 md:mb-6 lg:mb-10 text-xs md:text-base lg:text-xl text-center mt-28 px-10 md:px-32 lg:px-52">Copyright © {new Date().getFullYear()} Vann-Dev</p>
            </div>
        </footer >
    )
}