'use client'

import { getPage } from "@/components/page"
import Image from "next/image"

const AboutPage = async () => {
    const page = await getPage(8)

    return (
        <>
            <div className="hidden w-1/2 w-1/3 w-1/5"></div>
            <div className="text-center py-12 px-6 mt-12">
                <div className="container mx-auto pl-6">
                    <h1 className="font-display font-bold text-5xl mb-20 uppercase">{page.acf.title}</h1>
                    <div className="flex justify-center w-full gap-2 mb-20">
                        {Array.from(page.acf.images).map(
                            (image: any, i: any) => (
                                <div className={`w-1/3 h-[calc(50vh)] relative overflow-hidden`} key={i}>
                                    <Image
                                        src={image.url}
                                        alt="starlyn thrilling adventures"
                                        fill
                                        style={{ objectFit: "cover" }}
                                    />
                                </div>
                            )
                        )}
                    </div>
                    <div className="w-full md:w-1/2 mx-auto" dangerouslySetInnerHTML={{ __html: page.acf.about_us }}></div>
                </div>
            </div>
            <div className="text-center py-12 px-6">
                <div className="container mx-auto">
                    <h1 className="font-display text-base font-extrabold mb-6 uppercase">{page.acf.our_story.title}</h1>
                    <div className="w-full md:w-1/2 mx-auto" dangerouslySetInnerHTML={{ __html: page.acf.our_story.content }}></div>
                    <div className="w-1/2 mx-auto relative h-[90vh] mt-20">
                        <Image
                            src={page.acf.our_story.url}
                            alt="starlyn thrilling adventures"
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </div>
                </div>
            </div>
            <div className="text-center py-12 px-6">
                <div className="container mx-auto">
                    <h1 className="font-display text-base font-extrabold mb-6 uppercase">{page.acf.our_values.title}</h1>
                    <div className="w-full md:w-1/2 mx-auto" dangerouslySetInnerHTML={{ __html: page.acf.our_values.content }}></div>
                </div>
            </div>
            <div className="text-center py-12 px-6">
                <div className="container mx-auto">
                    <h1 className="font-display text-base font-extrabold mb-6 uppercase">{page.acf.our_mission.title}</h1>
                    <div className="w-full md:w-1/2 mx-auto" dangerouslySetInnerHTML={{ __html: page.acf.our_mission.content }}></div>
                </div>
            </div>
            <div className="text-center py-12 px-6">
                <div className="container mx-auto">
                    <h1 className="font-display text-base font-extrabold mb-6 uppercase">{page.acf.our_services.title}</h1>
                    <div className="w-full md:w-1/2 mx-auto" dangerouslySetInnerHTML={{ __html: page.acf.our_services.content }}></div>
                </div>
            </div>
        </>
    )
}

export default AboutPage