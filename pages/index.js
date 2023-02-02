import Layout from '@/components/Layout'
import ContentfulCard from '../components/ContentfulCard'
import { getContentCard, getContentHero, getContentNavbar, getContentSearchBar } from '../lib/api'
import Carousel from '@/components/Carousel'
import Hero from '@/components/Hero'

export const getStaticProps = async() => {

    return {
        props: {
            elements: {
                cards: await getContentCard(),
                navbar: await getContentNavbar(),
                searchbar: await getContentSearchBar(),
                hero: await getContentHero()
            }   
        }
    }
}

export default function Home ({ elements }) {
    console.log('elements.searchbar', elements.searchbar)
    return (
        <>
            <Layout navbar={elements.navbar} searchbar={elements.searchbar}>
                <div>
                    <Hero hero={elements.hero} />
                </div>
                <div className="flex max-w-5xl mx-auto gap-8 group pt-5">
                    <ContentfulCard cards={elements.cards}/>
                </div>
                {/* <div>
                    <Carousel />
                </div> */}
            </Layout>
        </>
    )
}