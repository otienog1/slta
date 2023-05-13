'use client'

import Link from "next/link"
import Image from 'next/image'
import Logo from '../public/_Logo.svg'

const Navbar = () => (


    <nav className="bg-gray-100 flex items-center justify-center" >
        <div className="container flex justify-between pl-4">
            <div className="flex flex-col justify-center">
                <Link href={'/'}>
                    <Image
                        src={Logo}
                        width={137 / 2}
                        height={115 / 2}
                        alt="Starlyn Thrilling Adventures"
                    />
                </Link>
            </div>
            <div className="py-8 flex items-center uppercase tracking-widest text-xs text-gray-500">
                <Link href={'/'}>
                    <span className="mx-4">Home</span>
                </Link>
                <Link href={'/destinations'}>
                    <span className="mx-4">Destinations</span>
                </Link>
                <Link href={'/experience'}>
                    <span className="mx-4">Experience</span>
                </Link>
                <Link href={'/about'}>
                    <span className="mx-4">About</span>
                </Link>
                <Link href={'/contact'}>
                    <span className="mx-4">Contact</span>
                </Link>
            </div>
        </div>
    </nav>
)

export default Navbar