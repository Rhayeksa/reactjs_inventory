import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Card, CardActionArea, CardActions, CardContent, Typography } from "@mui/material";
import { Link, useParams } from 'react-router-dom';

interface CardListComponentProps {
    name: string;
    quantity: number;
};

const CardListComponent = (props: CardListComponentProps) => {
    // const [param, setParam] = useState(props);
    const { id } = useParams()

    return (
        <>
            <Card sx={{ minWidth: 335, mr: 3, mb: 3 }} >
                <CardActionArea component={Link} to={"/item/" + id}>
                    <CardContent>
                        <Typography gutterBottom variant="h6" component="div">
                            {props.name}
                        </Typography>
                        <Typography variant="overline">
                            Quantity : {props.quantity}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions sx={{ display: "flex", justifyContent: "end" }}>
                    <Button color="primary" variant="contained">
                        <EditIcon />
                    </Button>
                    <Button color="primary" variant="contained">
                        <DeleteIcon />
                    </Button>
                </CardActions>
            </Card>
        </>
    )
}



export { CardListComponent };
