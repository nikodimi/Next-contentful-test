import Layout from '@/components/Layout'
import Navigation from '@/components/Navigation'
import ContentfulCard from '../components/ContentfulCard'
import { getContentCard, getContentNavbar } from '../lib/api'

export const getStaticProps = async() => {

    return {
        props: {
            elements: {
                cards: await getContentCard(),
                navbar: await getContentNavbar()
            }   
        }
    }
}

export default function Home ({ elements }) {
    console.log('navbar', elements.navbar)
    console.log('card', elements.cards)
    return (
        <>
            <Layout navbar={elements.navbar}>
                <div className="flex max-w-5xl mx-auto gap-8 group pt-5">
                    <ContentfulCard cards={elements.cards}/>
                </div>
            </Layout>
        </>
    )
}