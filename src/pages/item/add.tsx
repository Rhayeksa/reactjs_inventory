import RestartAltIcon from "@mui/icons-material/RestartAlt";
import SaveIcon from "@mui/icons-material/Save";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
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
          <Button variant="contained" sx={{ mr: 3 }} endIcon={<SaveIcon />}>
            <Typography>Submit</Typography>
          </Button>
          <Button variant="contained" endIcon={<RestartAltIcon />}>
            <Typography>Reset</Typography>
          </Button>
        </Box>
      </Container>
    </>
  );
};

export { Add };
