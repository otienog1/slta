const Navbar = () => (
    <nav className="bg-gray-100 py-12 flex items-center justify-center uppercase tracking-widest text-xs text-gray-500">
        <div className="container flex justify-between pl-4">
            <div>
                <a>SLTA</a>
            </div>
            <div>
                <a className="mx-4">Home</a>
                <a className="mx-4">Destinations</a>
                <a className="mx-4">Experience</a>
                <a className="mx-4">About</a>
                <a className="mx-4">Contact</a>
            </div>
        </div>
    </nav>
)

export default Navbar