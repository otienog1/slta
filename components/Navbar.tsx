import Link from "next/link"

const Navbar = () => (
    <nav className="bg-gray-100 py-8 flex items-center justify-center uppercase tracking-widest text-xs text-gray-500">
        <div className="container flex justify-between pl-4">
            <div>
                <a>SLTA</a>
            </div>
            <div>
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