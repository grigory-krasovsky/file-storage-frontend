import {Navbar} from "../navBar/NavBar";
import {Box} from "@mui/material";
import {CustomDrawer} from "../drawer/CustomDrawer";
import {useState} from "react";
import { Outlet } from "react-router-dom";


export const Layout = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(true);
    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };
    return <Box>
        <Navbar
            isDrawerOpen={isDrawerOpen}
            toggleDrawer={toggleDrawer}/>
        <CustomDrawer
            isDrawerOpen={isDrawerOpen}
            toggleDrawer={toggleDrawer}
        />
        <Outlet />
    </Box>
}