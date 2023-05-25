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
                    <div className="w-1/5" key={i}>
                        <div className="h-72 relative">
                            <Image
                                src={destination.image}
                                alt="starlyn thrilling adventures"
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                        <p className="text-center text-base font-bold w-full my-4">
                            {destination.name}
                        </p>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Destinations