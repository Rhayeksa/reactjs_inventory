import { Container } from "@mui/material";
import { NavbarComponent } from "../components/navbarComponent";

const Error = () => {
    return (
        <div>
            <NavbarComponent />
            <Container maxWidth="xl">
                <h1>Error Page</h1>
            </Container>
        </div>
    )
}

export { Error };
