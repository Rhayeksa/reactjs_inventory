import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { NavbarComponent } from "../../components/navbarComponent";

const RemoveById = () => {
    const { id } = useParams();
    return (
        <>
            <NavbarComponent />
            <Container maxWidth="xl">
                <h1>Remove Item with ID : {id}</h1>
            </Container>
        </>
    )
}

export { RemoveById };
