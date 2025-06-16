import {AppBar, IconButton, Toolbar, Typography} from "@mui/material";
import './navBar.css';
import {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';

export const Navbar = ({isDrawerOpen, toggleDrawer}) => {

    return (
        <AppBar position="static" className="navbar">
            <Toolbar className="navbar-toolbar">
                <IconButton
                    edge="start"
                    className="navbar-menu-button"
                    onClick={toggleDrawer}
                    aria-label="menu"
                >
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" component="div" className="navbar-title">
                    File Storage
                </Typography>
            </Toolbar>
        </AppBar>
    );
};