import ContentfulCard from '../components/ContentfulCard'
import { getContentCard } from '../lib/api'

export const getStaticProps = async() => {

    return {
        props: {
            elements: {
                card: await getContentCard()
            }   
        }
    }
}

export default function Home ({ elements }) {

    return (
        <div className="card-wrapper">
            <ContentfulCard card={elements.card}/>
        </div>
    )
}