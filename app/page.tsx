import { Suspense } from "react";

async function getPage(id: any) {
  let res = await fetch(`https://api.starlynthrillingadventures.com/wp-json/wp/v2/pages/${id}?_fields=acf&acf_format=standard`)

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json()
}

export default async function Home() {

  const page = await getPage(5)



  return (
    <main className="min-h-screen justify-center">
      <div className="grid grid-cols-1 px-4 py-8">
        <div className="text-md" dangerouslySetInnerHTML={{ __html: page.acf.section_2.content }}></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="bg-white p-12 md:p-24 flex justify-end items-center">123</div>
        <div className="bg-gray-100 p-12 md:p-24 flex justify-start items-center">
          <div className="max-w-md">
            <div className="w-20 h-1 bg-yellow-800 mb-4"></div>
            <h2 className="font-display font-bold text-2xl md:text-3xl lg:text-4xl mb-6">
              {page.acf.section_3.our_tours.title}
            </h2>
            <div className="text-md text-gray-600 md:text-base mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: page.acf.section_3.our_tours.content }}></div>
          </div>
        </div>
      </div>
      <div className="px-4 mx-auto text-center py-24 md:py-32">
        <div className="w-20 h-1 bg-yellow-800 mb-4 mx-auto"></div>
        <h2 className="font-display font-bold text-3xl mb-6">{page.acf.section_4.title}</h2>
        <div className="text-xl" dangerouslySetInnerHTML={{ __html: page.acf.section_4.additional_services }}></div>
      </div>
    </main>
  )
}