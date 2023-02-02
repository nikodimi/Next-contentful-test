import Layout from '@/components/Layout'
import ContentfulCard from '../components/ContentfulCard'
import { getContentCard, getContentNavbar, getContentSearchBar } from '../lib/api'
import Carousel from '@/components/Carousel'

export const getStaticProps = async() => {

    return {
        props: {
            elements: {
                cards: await getContentCard(),
                navbar: await getContentNavbar(),
                searchbar: await getContentSearchBar()
            }   
        }
    }
}

export default function Home ({ elements }) {
    console.log('elements.searchbar', elements.searchbar)
    return (
        <>
            <Layout navbar={elements.navbar} searchbar={elements.searchbar}>
                <div className="flex max-w-5xl mx-auto gap-8 group pt-5">
                    <ContentfulCard cards={elements.cards}/>
                </div>
                <div>
                    <Carousel />
                </div>
            </Layout>
        </>
    )
}