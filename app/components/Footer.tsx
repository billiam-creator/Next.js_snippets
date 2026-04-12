import Link from "next/link"
import { BiX } from "react-icons/bi"
import { BsInstagram } from "react-icons/bs"
import { CgTwitter } from "react-icons/cg"
import { FaFacebook } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import { LuInstagram } from "react-icons/lu"
import { PiCellSignalX } from "react-icons/pi"

const Footer = () => {
    return(
        <footer className="bg-secondary text-neutral-100 transition-colors
        duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8"></div>
            {/*Brand*/}
           <div className="col-span-1 md:col-span w-2xl">
            <h3 className="text-3xl font-black font-heading text-blue-500 mb-4">Nairobi Tyres</h3>
            <p className="mb-6 leading-relaxed max-w-md">Premium performance and safety for your vehicle. Providing top-tier tyres and automotive services to keep you moving forward.</p>
            {/*icons*/}
            <div className="flex gap-x-4">
            {/*instagram*/}
            <Link href="/" className="w-10 h-10 bg-secondary/40 rounded-full 
            flex items-center justify-center hover:bg-red-500
             transiton-colors duration-300">
            <LuInstagram className="w-5 h-5"/>
            </Link>

            {/*X*/}
            <Link href="/" className="w-10 h-10 bg-secondary/40 rounded-full 
            flex items-center justify-center hover:bg-red-500
             transiton-colors duration-300">
            <FaXTwitter className="w-5 h-5"/>
            </Link>

            {/*facebook*/}
            <Link href="/" className="w-10 h-10 bg-secondary/40 rounded-full 
            flex items-center justify-center hover:bg-red-500
             transiton-colors duration-300">
            <FaFacebook className="w-5 h-5"/>
            </Link>
            </div>
            </div>
            {/*quick links */}
            <div>
                <h4 className="text-lg font-bold font-heading mb-4 text-blue-500">Quick Links</h4>
                <ul className="space-y-2">
                    {["Home", "Tyres", "Batteries", "About", "Contact"].map(
                   (link) => (
                        <li key={link}>
                            <Link href="#" className="hover:text-red-500
                            transition-colors duration-300">{link}</Link>
                            </li>
                    ))}
              </ul>
            </div>
            {/* Contact */}
            <div>
                <h4 className="text-lg font-bold font-heading mb-4">Contact Info</h4>
                <div><p>
                    <strong>Phone:</strong>
                    <br />
                    +2541 167 3345
                    </p>
                    </div>
            </div>
            </div>
            </footer>
    )
}
export default Footer