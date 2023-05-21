'use client'

import { getPage } from "@/components/page"
import Image from "next/image"

const AboutPage = async () => {
    const page = await getPage(8)

    return (
        <>
            <div className="text-center py-12 px-6 mt-12">
                <div className="container mx-auto">
                    <h1 className="font-display font-bold text-5xl mb-6 uppercase">{page.acf.title}</h1>
                    <div className="flex">
                        {page.acf.images.map(
                            (image: any, i: any) => (
                                <div className="w-full h-auto relative" key={i}>
                                    <Image
                                        src={image.url}
                                        alt="starlyn thrilling adventures"
                                        fill
                                        style={{ objectFit: "contain" }}
                                    />
                                </div>
                            )
                        )}
                    </div>
                    <div className="w-full md:w-1/2 mx-auto" dangerouslySetInnerHTML={{ __html: page.acf.about_us }}></div>
                </div>
            </div>
            <div className="text-center py-12 px-6 mt-12">
                <div className="container mx-auto">
                    <h1 className="font-display text-base font-extrabold mb-6">{page.acf.our_story.title}</h1>
                    <div className="w-full md:w-1/2 mx-auto" dangerouslySetInnerHTML={{ __html: page.acf.our_story.content }}></div>
                </div>
            </div>
            <div className="text-center py-12 px-6 mt-12">
                <div className="container mx-auto">
                    <h1 className="font-display text-base font-extrabold mb-6">{page.acf.our_values.title}</h1>
                    <div className="w-full md:w-1/2 mx-auto" dangerouslySetInnerHTML={{ __html: page.acf.our_values.content }}></div>
                </div>
            </div>
            <div className="text-center py-12 px-6 mt-12">
                <div className="container mx-auto">
                    <h1 className="font-display text-base font-extrabold mb-6">{page.acf.our_mission.title}</h1>
                    <div className="w-full md:w-1/2 mx-auto" dangerouslySetInnerHTML={{ __html: page.acf.our_mission.content }}></div>
                </div>
            </div>
            <div className="text-center py-12 px-6 mt-12">
                <div className="container mx-auto">
                    <h1 className="font-display text-base font-extrabold mb-6">{page.acf.our_services.title}</h1>
                    <div className="w-full md:w-1/2 mx-auto" dangerouslySetInnerHTML={{ __html: page.acf.our_services.content }}></div>
                </div>
            </div>
        </>
    )
}

export default AboutPage