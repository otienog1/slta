'use client'

import Link from "next/link"
import Image from 'next/image'
import Logo from '../public/_Logo.svg'
import { useState } from "react"

const Navbar = () => {
    const [open, setOpen] = useState(false)

    return (
        <nav className="navbar flex items-center justify-center">
            <div className="max-w-screen-xl w-full flex flex-wrap items-center justify-between mx-auto p-4">
                <Link href={'/'} className="flex items-center">
                    <Image
                        src={Logo}
                        width={137 / 2}
                        height={115 / 2}
                        alt="Starlyn Thrilling Adventures"
                        className="mr-3"
                    />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Starlyn Thrilling Adventures</span>
                </Link>

                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                    onClick={() => setOpen(!open)}
                >
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                </button>

                <div className={`${open ? 'block' : "hidden"} w-full md:block md:w-auto`}>
                    <div className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0">
                        <Link href={'/'}>
                            <span className="block py-2 pl-3 pr-4 text-white rounded hover:text-yellow-300 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0">Home</span>
                        </Link>
                        <Link href={'/destinations'}>
                            <span className="block py-2 pl-3 pr-4 text-white rounded hover:text-yellow-300 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0">Destinations</span>
                        </Link>
                        <Link href={'/experience'}>
                            <span className="block py-2 pl-3 pr-4 text-white rounded hover:text-yellow-300 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0">Experience</span>
                        </Link>
                        <Link href={'/about'}>
                            <span className="block py-2 pl-3 pr-4 text-white rounded hover:text-yellow-300 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0">About</span>
                        </Link>
                        <Link href={'/contact'}>
                            <span className="block py-2 pl-3 pr-4 text-white rounded hover:text-yellow-300 md:hover:bg-transparent md:border-0 md:hover:text-yellow-300 md:p-0">Contact</span>
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar