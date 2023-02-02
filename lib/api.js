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

    return card.items
}

export const getContentNavbar = async () => {
    const client = getClient()

    const navbar = await client.getEntries({
        include: 3,
        content_type: 'navbar'
    })

    return navbar.items[0]
}

export const getContentSearchBar = async () => {
    const client = getClient()

    const seachbar = await client.getEntries({
        content_type: 'searchBar'
    })

    return seachbar.items[0]
}

export const getContentCarousel = async () => {
    const client = getClient()

    const carousel = await client.getEntries({
        content_type: 'carousel'
    })

    return carousel.items[0]
}

export const getContentHero = async () => {
    const client = getClient()

    const hero = await client.getEntries({
        content_type: 'hero'
    })

    return hero.items[0]
}