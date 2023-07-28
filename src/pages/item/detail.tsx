import { Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { NavbarComponent } from "../../components/navbarComponent";

const Detail = () => {
    const { id } = useParams();
    return (
        <>
            <NavbarComponent />
            <Container maxWidth="xl">
                <h1>Detail Item</h1>
                <h1>ID : {id}</h1>
                <h1>Name : Item 1</h1>
                <h1>Quantity : 12</h1>
                <h1>Description : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos ad nobis a voluptates saepe eaque. Illum maiores cum maxime placeat recusandae enim dolorum, facere debitis hic numquam dolore nesciunt pariatur!</h1>
            </Container>
        </>
    )
}

export { Detail };
