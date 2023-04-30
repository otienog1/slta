
const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white text-opacity-40 font-semibold uppercase text-xs tracking-widest bg-opacity-80 px-12">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-4 gap-12 text-center lg:text-left py-24">
                <div>
                    <div className="text-white opacity-50 text-4xl font-display">S L T A</div>
                </div>
                <div>
                    <div className="font-display text-white uppercase text-sm tracking-widest mb-6">More Info</div>
                    <a className="block mb-4">About</a>
                    <a className="block mb-4">Contact</a>
                </div>
                <div>
                    <div className="font-display text-white uppercase text-sm tracking-widest mb-6">More Links</div>
                    <a className="block mb-4">Destinations</a>
                    <a className="block mb-4">Experience</a>
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

export default Footer