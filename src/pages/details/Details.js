import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const Details=({dataFromSearchHome})=> {
    console.log(dataFromSearchHome)
    console.log(useParams())

    const params=useParams()
    const filteredDetail = dataFromSearchHome.filter(item=>item.recipe.label===params.label)
    console.log(filteredDetail)
    return (
        <div className="d-flex m-auto" style={{width:"30%"}}>
            <Card sx={{ maxWidth: 900, height: 600 }}>
            <CardMedia
                component="img"
                height="360"
                image={filteredDetail[0].recipe.image}
                alt=""
            />
            <CardContent>
                {
                    filteredDetail[0].recipe.ingredients.map(text=> {
                        return (
                            <Typography variant="body2" color="text.secondary">
                                {text.text}  
                            </Typography>
                        )
                    })
                }
            </CardContent>
            </Card>
        </div>
    )
}

export default Details;