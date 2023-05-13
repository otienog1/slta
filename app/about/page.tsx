import { getPage } from "@/components/page"

const AboutPage = async () => {
    const page = await getPage(8)
    return (
        <>
            <div className="text-center py-12 px-6 mt-12">
                <h1 className="font-display font-bold text-5xl mb-6">{page.acf.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: page.acf.about_us }}></div>
            </div>
            <div className="text-center py-12 px-6 mt-12">
                <h1 className="font-display font-bold text-5xl mb-6">{page.acf.our_story.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: page.acf.our_story.content }}></div>
            </div>
            <div className="text-center py-12 px-6 mt-12">
                <h1 className="font-display font-bold text-5xl mb-6">{page.acf.our_values.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: page.acf.our_values.content }}></div>
            </div>
            <div className="text-center py-12 px-6 mt-12">
                <h1 className="font-display font-bold text-5xl mb-6">{page.acf.our_mission.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: page.acf.our_mission.content }}></div>
            </div>
            <div className="text-center py-12 px-6 mt-12">
                <h1 className="font-display font-bold text-5xl mb-6">{page.acf.our_services.title}</h1>
                <div dangerouslySetInnerHTML={{ __html: page.acf.our_services.content }}></div>
            </div>
        </>
    )
}

export default AboutPage