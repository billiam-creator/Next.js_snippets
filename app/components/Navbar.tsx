import Link from 'next/link'
import React from 'react'
import { RiNextjsFill } from 'react-icons/ri'

const Navbar = () => {
  return (
    <nav className='fixed top-0 z-50 w-full flex items-center justify-around py-5 px-24 border-b border-gray-700 bg-black'>

      <Link href="/" className='transition duration-300 hover:scale-110'>
        <RiNextjsFill className='w-16 h-16' />
      </Link>

      <ul className='flex gap-10 text-lg list-none'>
        <li>
          <Link href="/" className='text-gray-300 hover:text-white transition-colors duration-200'>
            Home
          </Link>
        </li>
        <li>
          <Link href="/tyres" className='text-gray-300 hover:text-white transition-colors duration-200'>
            Tyres
          </Link>
        </li>
        <li>
          <Link href="/batteries" className='text-gray-300 hover:text-white transition-colors duration-200'>
            Batteries
          </Link>
        </li>
        <li>
          <Link href="/about" className='text-gray-300 hover:text-white transition-colors duration-200'>
            About
          </Link>
        </li>
        <li>
          <Link href="/contact" className='text-gray-300 hover:text-white transition-colors duration-200'>
            Contact
          </Link>
        </li>
      </ul>

    </nav>
  )
}

export default Navbar