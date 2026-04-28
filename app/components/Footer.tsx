import Link from "next/link"
import { LuInstagram } from "react-icons/lu"
import { FaFacebook } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
    return (
        <footer className="bg-neutral-950 text-neutral-100 border-t border-white/10 relative z-30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    
                    {/* Brand */}
                    <div className="md:col-span-2">
                        <h3 className="text-3xl font-black text-blue-500 mb-4">Nairobi Tyres</h3>
                        <p className="mb-6 leading-relaxed max-w-md text-gray-400">
                            Premium performance and safety for your vehicle. Providing top-tier tyres and automotive services to keep you moving forward.
                        </p>
                        <div className="flex gap-x-4">
                            <Link href="/" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                                <LuInstagram className="w-5 h-5"/>
                            </Link>
                            <Link href="/" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                                <FaXTwitter className="w-5 h-5"/>
                            </Link>
                            <Link href="/" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors duration-300">
                                <FaFacebook className="w-5 h-5"/>
                            </Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-blue-500">Quick Links</h4>
                        <ul className="space-y-2">
                            {["Home", "Tyres", "Batteries", "About", "Contact"].map((link) => (
                                <li key={link}>
                                    <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="text-lg font-bold mb-4 text-blue-500">Contact Info</h4>
                        <div className="text-gray-400">
                            <p>
                                <strong className="text-white">Phone:</strong>
                                <br />
                                +2541 167 3345
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            
            {/* Bottom Copyright */}
            <div className="border-t border-white/5 py-8 text-center text-xs text-gray-500">
                © {new Date().getFullYear()} Nairobi Tyres. All rights reserved.
            </div>
        </footer>
    )
}

export default Footer