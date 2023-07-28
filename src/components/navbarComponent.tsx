import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import HomeIcon from '@mui/icons-material/Home';
import InventoryIcon from '@mui/icons-material/Inventory';
import MenuIcon from '@mui/icons-material/Menu';
import { Container, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavbarComponent = () => {
    const [openDrawer, setOpenDrawer] = useState(false);

    return (
        <Box sx={{ flexGrow: 1, mb: 3 }}>
            <AppBar position="static">
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ display: "flex", flexGrow: 1 }}>
                            <Typography
                                variant="h6"
                                component="a"
                                href="/"
                                sx={{
                                    fontFamily: 'monospace',
                                    fontWeight: 700,
                                    letterSpacing: '.3rem',
                                    color: 'inherit',
                                    textDecoration: 'none',
                                }}
                            >
                                INVENTORY
                            </Typography>
                        </Box>
                        <IconButton
                            size="large"
                            color="inherit"
                            aria-label="menu"
                            onClick={() => setOpenDrawer(!openDrawer)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Drawer
                            anchor={"right"}
                            open={openDrawer}
                            onClose={() => setOpenDrawer(!openDrawer)}
                        >
                            <List
                                sx={{ width: 250, bgcolor: 'background.paper' }}
                            >
                                <ListItem>
                                    <ListItemText primary="I N V E N T O R Y" sx={{ display: "flex", justifyContent: "center" }} />
                                    <IconButton onClick={() => setOpenDrawer(!openDrawer)} >
                                        <CloseRoundedIcon />
                                    </IconButton>
                                </ListItem>
                                <Divider />
                                <ListItemButton component={Link} to={"/"} onClick={() => setOpenDrawer(!openDrawer)}>
                                    <ListItemIcon>
                                        <HomeIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Home" />
                                </ListItemButton>
                                <ListItemButton component={Link} to={"/item"} onClick={() => setOpenDrawer(!openDrawer)}>
                                    <ListItemIcon>
                                        <InventoryIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Item" />
                                </ListItemButton>
                            </List>
                        </Drawer>
                    </Toolbar>
                </Container>
            </AppBar>
        </Box>
    );
}

export { NavbarComponent };
