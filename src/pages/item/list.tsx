import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Container, Fab, TextField } from "@mui/material";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CardListComponent } from "../../components/cardListComponent";
import { NavbarComponent } from "../../components/navbarComponent";
// import { findAll } from "../../slices/item";
import { findAll } from "../../services/item";

const List = () => {
  // const [state, setState] = useState("")
  // const item = useSelector((state: any) => state);
  // const dispatch = useDispatch<ThunkDispatch<any, any, any>>();

  // useEffect(() => {
  //   dispatch(findAll());
  //   // console.log(findAll());
  // }, [dispatch]);

  // useEffect(() => {
  //   axios.get("http://127.0.0.1:8000/v1/item");
  // });

  // console.log(item);

  return (
    <>
      <NavbarComponent />
      <Container maxWidth="xl">
        <Box display={"flex"} justifyContent={"end"} mb={3}>
          <TextField
            id="search-item"
            label="Search Item"
            variant="outlined"
            sx={{ mr: 1 }}
            size="small"
          />
          <Fab color="primary" aria-label="add" sx={{ mr: 5 }} size="small">
            <SearchIcon />
          </Fab>
          <Box flexGrow={1}>
            <Fab
              component={Link}
              to={"/item/add"}
              color="primary"
              aria-label="add"
              size="small"
            >
              <AddIcon />
            </Fab>
          </Box>
        </Box>
        <Box display={"flex"} flexWrap={"wrap"}>
          {Array.from({ length: 10 }).map((it, index) => (
            <CardListComponent
              name={"Item " + (index + 1)}
              quantity={10}
              key={index}
            />
          ))}
        </Box>
      </Container>
    </>
  );
};

export { List };
