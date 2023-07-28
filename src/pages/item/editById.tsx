import DeleteIcon from '@mui/icons-material/Delete';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import SaveIcon from '@mui/icons-material/Save';
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { useParams } from "react-router-dom";
import { NavbarComponent } from "../../components/navbarComponent";

const EditById = () => {
    const { id } = useParams();
    return (
        <>
            <NavbarComponent />
            <Container maxWidth="xl">
                <Box display={"flex"}>
                    <Box flexGrow={1}>
                        <h1>Form Edit Item with ID : {id}</h1>
                    </Box>
                    <Box display={"flex"} alignItems={"center"} >
                        <Button color="primary" variant="contained" endIcon={<DeleteIcon />}>
                            <Typography>Remove</Typography>
                        </Button>
                    </Box>
                </Box>
                <TextField
                    required
                    id="item-name"
                    label="Name"
                    focused
                    sx={{ mb: 3 }}
                    fullWidth
                    defaultValue={"Item 1"}
                />
                <TextField
                    id="outlined-number"
                    label="Quantity"
                    type="number"
                    required
                    fullWidth
                    focused
                    sx={{ mb: 3 }}
                    InputLabelProps={{
                        shrink: true,
                    }}
                    defaultValue={10}
                />
                <TextField
                    id="item-description"
                    label="Description"
                    multiline
                    rows={5}
                    focused
                    fullWidth
                    sx={{ mb: 3 }}
                    defaultValue="Description Item 1"
                />
                <Box>
                    <Button variant="contained" sx={{ mr: 3 }} endIcon={<SaveIcon />}>
                        <Typography>
                            Save
                        </Typography>
                    </Button>
                    <Button variant="contained" endIcon={<RestartAltIcon />}>
                        <Typography>
                            Reset
                        </Typography>
                    </Button>
                </Box>

            </Container>
        </>
    )
}

export { EditById };
