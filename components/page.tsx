'use client'

async function getPage(id: any) {
    let res = await fetch(`https://api.starlynthrillingadventures.com/wp-json/wp/v2/pages/${id}?_fields=acf&acf_format=standard`)

    if (!res.ok) {
        throw new Error('Failed to fetch data');
    }

    return res.json()
}

export { getPage }