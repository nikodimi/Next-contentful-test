import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ContentfulCard = ({ cardItems }) => {
    console.log('cardItems', cardItems)
    const { title, subheading, url, image } = cardItems.fields

    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {subheading}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
            </Card.Body>
      </Card>
    )
}

export default ContentfulCard