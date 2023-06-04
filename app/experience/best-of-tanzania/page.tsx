import Image from "next/image"
import { getExperience } from "@/components/page"

const Experience = async () => {
    const experience = await getExperience(168)
    return (
        <>
            <div className="relative w-full h-[calc(100vh/2)]">
                <Image
                    src={experience.acf.image}
                    alt={experience.acf.title}
                    fill
                />
            </div>
            <div className="container px-4 mx-auto">
                <h2>{experience.acf.title}</h2>
                <div dangerouslySetInnerHTML={{ __html: experience.acf.description }}></div>
                <Itinerary itins={experience.acf.itinerary} />
            </div>
        </>
    )
}

const Itinerary = (props: any) => {
    const { itins } = props

    return (
        <div>
            {
                Array.from(itins).map((itin: any, i: any) => (
                    <Itin
                        title={itin.title}
                        activity={itin.activity}
                        key={i}
                    />
                ))
            }
        </div>
    )
}

const Itin = (props: any) => {
    const { title, activity } = props
    return (
        <div>
            <div>
                <div>{title.day}</div>
                <div>{title.location}</div>
            </div>
            <div dangerouslySetInnerHTML={{ __html: activity }}></div>
        </div>
    )
}


export default Experience