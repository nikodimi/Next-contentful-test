import { createClient } from "contentful";

const getClient = () => {

    return createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY
    })
}

export const getContentCard = async () => {
    const client = getClient()

    const card = await client.getEntries({
        content_type: 'card'
    })
    
    return card.items[0]
}