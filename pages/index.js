import { createClient } from 'contentful'
import ContentfulCard from '../components/ContentfulCard'

export const getStaticProps = async() => {

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY
  })

  const card = await client.getEntries({content_type: 'card'})

  return {
    props: {
      cardItems: card.items[0]
    }
  }

}

export default function Recipes({ cardItems }) {
  console.log('cardItems', cardItems)
  return (
    <div className="card-wrapper">
        <ContentfulCard cardItems={cardItems}/>
    </div>
  )
}