import { Box, Container, Divider, Typography } from "@mui/material";
import { CardListComponent } from "../components/cardListComponent";
import { NavbarComponent } from "../components/navbarComponent";

const Home = () => {
  return (
    <>
      <NavbarComponent />
      <Container maxWidth="xl">
        <Box mb={5}>
          <Typography variant="h4" gutterBottom fontWeight={"bold"}>
            New Item
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Box display={"flex"} flexWrap={"wrap"}>
            {Array.from({ length: 4 }).map((it, index) => (
              <CardListComponent
                name={"Item " + (index + 1)}
                quantity={10}
                key={index}
              />
            ))}
          </Box>
        </Box>

        <h1>TODO:</h1>
        <ul>
          <li>Implementasi .env variabel</li>
        </ul>
      </Container>
    </>
  );
};

export { Home };
