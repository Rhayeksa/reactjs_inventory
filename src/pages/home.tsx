import { Container } from "@mui/material";
import { NavbarComponent } from "../components/navbarComponent";
import { CardComponent } from "../components/cardComponent";

const Home = () => {
    return (
        <div>
            <NavbarComponent />
            <Container maxWidth="xl">
                <h1>Home Page</h1>
                <CardComponent />

                <h1>TODO List</h1>
                <ul>
                    <li>Recent Item</li>
                    <li>Item dengan quantity terbanyak</li>
                    <li>Item dengan quantity terrendah</li>
                </ul>
            </Container>
        </div>
    )
}

export { Home };