import { CardGroup,Card,CardImg,CardBody,CardTitle,Button } from 'reactstrap'
import { Link } from 'react-router-dom'

const Cards=({cardData})=> {
    console.log(cardData)
    return (
        <div style = {{width: "200px", display:'inline-block'}}>
        <CardGroup>
        <Card>
            <CardImg
                alt="Card image cap"
                src={cardData.recipe.image}
                top
                width="100%"
            />
            <CardBody>
            <CardTitle tag="h5">
                {cardData.recipe.label}
            </CardTitle>
            <Link to={`/details/${cardData.recipe.label}`}>
                <Button>
                    view
                </Button>
            </Link>
            </CardBody>
        </Card>
        </CardGroup>
        </div>
    )
}

export default Cards;