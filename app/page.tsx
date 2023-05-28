'use client'

import Slider from "@/components/Slider";
import { getPage } from "@/components/page";
import Image from "next/image";

const HomePage = async () => {

    const page = await getPage(5)

    return (
        <main className="min-h-screen justify-center">
            <div className="h-[calc(100vh-280px)]">
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
            {/* <div className="grid grid-cols-1 2xl:py-72 md:py-36">
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
            </div> */}
            <div className="" style={{ backgroundColor: 'rgba(27, 118, 50, .1)' }}>
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-12 md:py-24 h-[calc(100vh-300px)]">
                            <div className="relative h-full w-full">
                                <Image
                                    src={page.acf.section_3.image}
                                    alt="image"
                                    fill
                                    style={{ objectFit: "contain", objectPosition: "right" }}
                                />
                            </div>
                        </div>
                        <div className="p-12 md:p-32 flex justify-end items-center">
                            <div className="max-w-md">
                                {/* <div className="w-10 h-0.5 bg-yellow-800 mb-4"></div> */}
                                {/* <h2 className="text-4xl mb-8 tracking-widest">
                                    {page.acf.section_3.our_tours.title}
                                </h2> */}
                                <div
                                    className="tracking-wide text-xl leading-8 child:mb-6"
                                    dangerouslySetInnerHTML={
                                        { __html: page.acf.section_3.our_tours.content }
                                    }>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="md:py-28">
                <div className="container mx-auto">
                    <div className="max-w-2xl text-center mx-auto mb-16">
                        <h2 className="font-heading mb-5 text-6xl tracking-tighter" data-config-id="auto-txt-1-3">
                            {page.acf.section_3.our_tours.title}
                        </h2>
                        <p className="text-xl tracking-tight" data-config-id="auto-txt-2-3">Use and re-use tons of responsive sections to create the perfect layout. Sections are organised into convenient categories.</p>
                    </div>
                    <div className="flex flex-wrap -m-9">
                        <div className="w-full md:w-1/2 lg:w-1/4 p-9">
                            <div className="group cursor-pointer">
                                <div className="mb-6 overflow-hidden rounded-lg">
                                    {/* <Image className="w-full rounded-lg transform hover:scale-105 transition duration-500" src="basko-assets/images/blog/blog.jpg" alt="" data-config-id="auto-img-1-3" /> */}
                                </div>
                                <p className="mb-3 text-indigo-500 font-semibold tracking-tight" data-config-id="auto-txt-3-3">Finance</p>
                                <h3 className="mb-4 text-xl group-hover:text-gray-900 font-semibold group-hover:underline" data-config-id="auto-txt-4-3">10 tips for managing your money in the new year</h3>
                                <span className="text-sm text-gray-600 tracking-tight" data-config-id="auto-txt-5-3">August 28, 2022</span>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 p-9">
                            <div className="group cursor-pointer">
                                <div className="mb-6 overflow-hidden rounded-lg">
                                    {/* <Image className="w-full rounded-lg transform hover:scale-105 transition duration-500" src="basko-assets/images/blog/blog2.jpg" alt="" data-config-id="auto-img-2-3" /> */}
                                </div>
                                <p className="mb-3 text-indigo-500 font-semibold tracking-tight" data-config-id="auto-txt-6-3">Budget</p>
                                <h3 className="mb-4 text-xl group-hover:text-gray-900 font-semibold group-hover:underline" data-config-id="auto-txt-7-3">The benefits of creating a budget and how to get started</h3>
                                <span className="text-sm text-gray-600 tracking-tight" data-config-id="auto-txt-8-3">August 28, 2022</span>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 p-9">
                            <div className="group cursor-pointer">
                                <div className="mb-6 overflow-hidden rounded-lg">
                                    {/* <Image className="w-full rounded-lg transform hover:scale-105 transition duration-500" src="basko-assets/images/blog/blog3.jpg" alt="" data-config-id="auto-img-3-3" /> */}
                                </div>
                                <p className="mb-3 text-indigo-500 font-semibold tracking-tight" data-config-id="auto-txt-9-3">Management</p>
                                <h3 className="mb-4 text-xl group-hover:text-gray-900 font-semibold group-hover:underline" data-config-id="auto-txt-10-3">Why you should consider investing in the stock market</h3>
                                <span className="text-sm text-gray-600 tracking-tight" data-config-id="auto-txt-11-3">August 28, 2022</span>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/4 p-9">
                            <div className="group cursor-pointer">
                                <div className="mb-6 overflow-hidden rounded-lg">
                                    {/* <Image className="w-full rounded-lg transform hover:scale-105 transition duration-500" src="basko-assets/images/blog/blog3.jpg" alt="" data-config-id="auto-img-3-3" /> */}
                                </div>
                                <p className="mb-3 text-indigo-500 font-semibold tracking-tight" data-config-id="auto-txt-9-3">Management</p>
                                <h3 className="mb-4 text-xl group-hover:text-gray-900 font-semibold group-hover:underline" data-config-id="auto-txt-10-3">Why you should consider investing in the stock market</h3>
                                <span className="text-sm text-gray-600 tracking-tight" data-config-id="auto-txt-11-3">August 28, 2022</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container px-4 mx-auto text-center py-24 md:py-32">
                <h2 className="font-heading mb-5 text-6xl tracking-tighter">
                    {page.acf.section_4.title}
                </h2>
                <div
                    className="text-xl tracking-tight"
                    dangerouslySetInnerHTML={
                        {
                            __html: page.acf.section_4.additional_services
                        }
                    }
                >

                </div>
            </div>
            {/* <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="bg-gray-100 p-12 md:p-24 flex justify-start items-center">
                    <div className="max-w-md">
                        <h2 className="text-xl lg:text-2xl mb-8 tracking-widest uppercase">
                            {page.acf.section_5.mission_and_values.title}
                        </h2>
                        <div
                            className="text-xl tracking-tight"
                            dangerouslySetInnerHTML={
                                {
                                    __html: page.acf.section_5.mission_and_values.content
                                }
                            }></div>
                    </div>
                </div>
                <div className="bg-white p-12 md:p-24 flex justify-end items-center">123</div>
            </div> */}
            <div>
                {/* <div className="py-24 lg:py-28 overflow-hidden" style="background: url('basko-assets/images/gradient.png'); background-repeat: no-repeat; background-size: cover;"> */}
                <div className="py-24 lg:py-28 overflow-hidden">
                    <div className="container px-4 mx-auto">
                        <div className="max-w-xl mx-auto text-center">
                            <h2 className="font-heading mb-6 text-6xl text-white tracking-tighter" data-config-id="auto-txt-1-6">Take your personal financing to the next level</h2>
                            <p className="mb-8 text-xl text-gray-200 tracking-tight" data-config-id="auto-txt-2-6">Whereby is the super simple way to connect over video. No apps, downloads, or long meeting links.</p>
                            <a className="inline-block px-5 py-4 text-gray-700 font-semibold tracking-tight bg-white hover:bg-gray-100 rounded-lg focus:ring-4 focus:ring-gray-200 transition duration-200" href="#" data-config-id="auto-txt-3-6">
                                Get in touch
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage