import Link from "next/link"
import Image from 'next/image'
import Logo from '../public/_Logo.svg'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white text-opacity-40 font-semibold uppercase text-xs tracking-widest bg-opacity-80 px-12">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 text-center lg:text-left py-24">
                <div>
                    <Image
                        src={Logo}
                        width={137}
                        height={115}
                        alt="Starlyn Thrilling Adventures"
                    />
                </div>
                <div>
                    <div className="font-display text-white uppercase text-sm tracking-widest mb-6">More Info</div>
                    <Link href={'/about'}>
                        <span className="block mb-4">About</span>
                    </Link>
                    <Link href={'contact'}>
                        <span className="block mb-4">Contact</span>
                    </Link>
                </div>
                <div>
                    <div className="font-display text-white uppercase text-sm tracking-widest mb-6">More Links</div>
                    <Link href={'/destinations'}>
                        <span className="block mb-4">Destinations</span>
                    </Link>
                    <Link href={'experience'}>
                        <span className="block mb-4">Experience</span>
                    </Link>
                </div>
                <div>
                    <div className="font-display text-white uppercase text-sm tracking-widest mb-6">Social Links</div>
                    <a className="block mb-4">Instagram</a>
                    <a className="block mb-4">Facebook</a>
                </div>
            </div>
            <div className="text-sm text-center font-heading font-light tracking-widest uppercase text-white opacity-75 pb-24">
                &copy; Designed by <span className="lowercase">7plus8_</span>
            </div>
        </footer>
    )
}

export default <Footercls></Footercls>