import Layout from '@/components/Layout'
// import Navigation from '@/components/Navigation'
import ContentfulCard from '../components/ContentfulCard'
import { getContentCard, getContentNavbar } from '../lib/api'

export const getStaticProps = async() => {

    return {
        props: {
            elements: {
                card: await getContentCard(),
                navbar: await getContentNavbar()
            }   
        }
    }
}

export default function Home ({ elements }) {

    return (
        <>
            {/* <Layout navbar={elements.navbar}/> */}
            <div className="card-wrapper">
                <ContentfulCard card={elements.card}/>
            </div>
        </>
    )
}