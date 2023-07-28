import { Box, Container } from "@mui/material";
import { CardListComponent } from "../components/cardListComponent";
import { NavbarComponent } from "../components/navbarComponent";

const Home = () => {
  return (
    <div>
      <NavbarComponent />
      <Container maxWidth="xl">
        <h1>New Item</h1>
        <Box display={"flex"} flexWrap={"wrap"}>
          <CardListComponent name="Item 1" quantity={30} />
          <CardListComponent name="Item 1" quantity={30} />
          <CardListComponent name="Item 1" quantity={30} />
          <CardListComponent name="Item 1" quantity={30} />
        </Box>
        <h1>TODO List</h1>
        <ul>
          <li>show Item desc by id (item terbaru)</li>
          <li>Item dengan quantity terbanyak</li>
          <li>Item dengan quantity terrendah</li>
        </ul>
      </Container>
    </div>
  );
};

export { Home };
