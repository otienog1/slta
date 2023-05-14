import Slider from "@/components/Slider";
import { getPage } from "@/components/page";
import Image from "next/image";

const HomePage = async () => {

    const page = await getPage(5)

    return (
        <main className="min-h-screen justify-center">
            <div className="h-[calc(100vh-80px)]">
                <Slider
                    slides={page.acf.section_1.slider}
                    autoplay={!0}
                    direction="next"
                    speed={2}
                    duration={10}
                    current={0}
                    RAF={0}
                />
            </div>
            <div className="grid grid-cols-1 2xl:py-72 md:py-36">
                <div className="container mx-auto sm:px-24">
                    <div
                        className="leading-10 text-xl tracking-wide"
                        dangerouslySetInnerHTML={
                            {
                                __html: page.acf.section_2.content
                            }
                        }
                    >

                    </div>
                </div>
            </div>
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 bg-gray-100">
                    <div className="p-12 md:py-24 h-screen">
                        <div className="relative h-full w-full">
                            <Image
                                src={page.acf.section_3.image}
                                alt="image"
                                fill
                                style={{ objectFit: "contain", objectPosition: "right" }}
                            />
                        </div>
                    </div>
                    <div className="p-12 md:p-32 flex justify-start items-center">
                        <div className="max-w-md">
                            <div className="w-10 h-0.5 bg-yellow-800 mb-4"></div>
                            <h2 className="text-2xl md:text-2xl lg:text-3xl mb-8 tracking-widest uppercase">
                                {page.acf.section_3.our_tours.title}
                            </h2>
                            <div className="text-sm text-gray-600 tracking-wide leading-8" dangerouslySetInnerHTML={{ __html: page.acf.section_3.our_tours.content }}></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="px-4 mx-auto text-center py-24 md:py-32">
                <div className="w-10 h-0.5 bg-yellow-800 mb-4 mx-auto"></div>
                <h2 className="text-2xl md:text-2xl lg:text-3xl mb-8 tracking-widest uppercase">
                    {page.acf.section_4.title}
                </h2>
                <div
                    className="container mx-auto text-base text-gray-600 mb-6 tracking-wide leading-8 md:px-24"
                    dangerouslySetInnerHTML={
                        {
                            __html: page.acf.section_4.additional_services
                        }
                    }
                >

                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-gray-100 p-12 md:p-24 flex justify-start items-center">
                    <div className="max-w-md">
                        <div className="w-10 h-0.5 bg-yellow-800 mb-4"></div>
                        <h2 className="text-xl md:text-xl lg:text-2xl mb-8 tracking-widest uppercase">
                            {page.acf.section_5.mission_and_values.title}
                        </h2>
                        <div
                            className="text-sm text-gray-600 mb-6 tracking-wide leading-8"
                            dangerouslySetInnerHTML={
                                {
                                    __html: page.acf.section_5.mission_and_values.content
                                }
                            }></div>
                    </div>
                </div>
                <div className="bg-white p-12 md:p-24 flex justify-end items-center">123</div>
            </div>
        </main>
    )
}

export default HomePage