'use client'
import { getPage } from "@/components/page"
import Image from "next/image"

const Destinations = async () => {
    const page = await getPage(12)

    return (
        <>
            <div className="container mx-auto flex gap-4 flex-wrap justify-center pt-12 px-6 mt-12">
                <h1 className="font-display font-bold text-4xl mb-20 uppercase tracking-wider">{page.acf.title}</h1>
            </div>
            <div className="container mx-auto flex gap-4 flex-wrap justify-center pb-12 px-6 mb-12">
                {Array.from(page.acf.destinations).map(({ destination }: any, i: any) => (
                    <div className="w-1/4 h-96 relative" key={i}>
                        <Image
                            src={destination.image}
                            alt="starlyn thrilling adventures"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                        <p className="absolute top-1/2 text-center text-white text-3xl font-bold w-full uppercase -translate-y-1/2">
                            {destination.name}
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Destinations