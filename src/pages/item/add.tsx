import { Box, Button, Container, TextField } from "@mui/material";
import { NavbarComponent } from "../../components/navbarComponent";

const Add = () => {
    return (
        <>
            <NavbarComponent />
            <Container maxWidth="xl">
                <h1>Form Add Item</h1>
                <TextField
                    required
                    id="item-name"
                    label="Name"
                    focused
                    sx={{ mb: 3 }}
                    fullWidth
                />
                <TextField
                    id="outlined-number"
                    label="Quantity"
                    type="number"
                    required
                    fullWidth
                    focused
                    InputLabelProps={{
                        shrink: true,
                    }}
                    sx={{ mb: 3 }}
                />
                <TextField
                    id="item-description"
                    label="Description"
                    multiline
                    rows={5}
                    focused
                    fullWidth
                    sx={{ mb: 3 }}
                // defaultValue="Hello World"
                />
                <Box>
                    <Button variant="contained" sx={{ mr: 3 }}>
                        Submit
                    </Button>
                    <Button variant="contained">
                        Reset
                    </Button>
                </Box>
            </Container>
        </>
    )
}

export { Add };
