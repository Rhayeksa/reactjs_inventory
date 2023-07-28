import AddIcon from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Container, Fab, TextField } from "@mui/material";
import { Link } from 'react-router-dom';
import { CardListComponent } from "../../components/cardListComponent";
import { NavbarComponent } from "../../components/navbarComponent";

const List = () => {
    // const [state, setState] = useState("")
    return (
        <>
            <NavbarComponent />
            <Container maxWidth="xl">
                <Box display={"flex"} justifyContent={"end"} mb={3}>
                    <TextField id="search-item" label="Search Item" variant="outlined" sx={{ mr: 1 }} size="small" />
                    <Fab color="primary" aria-label="add" sx={{ mr: 5 }} size="small">
                        <SearchIcon />
                    </Fab>
                    <Box flexGrow={1}>
                        <Fab component={Link} to={"/item/add"} color="primary" aria-label="add" size="small">
                            <AddIcon />
                        </Fab>
                    </Box>
                </Box>
                <Box display={"flex"} flexWrap={"wrap"}>
                    <CardListComponent name="Item 1" quantity={235} />
                    <CardListComponent name="Item 2" quantity={235} />
                    <CardListComponent name="Item 3" quantity={235} />
                    <CardListComponent name="Item 4" quantity={235} />
                    <CardListComponent name="Item 5" quantity={235} />
                    <CardListComponent name="Item 6" quantity={235} />
                    <CardListComponent name="Item 1 ss dd ddsd dd sf s" quantity={235} />
                </Box>
            </Container>
        </>
    )
}

export { List };
