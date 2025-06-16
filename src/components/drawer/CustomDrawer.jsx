import {Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText} from "@mui/material";
import './drawer.css';
import List from '@mui/material/List';
import { Link } from 'react-router-dom';
import {paths} from "../../utils/constants";

export const CustomDrawer = ({isDrawerOpen, toggleDrawer}) => {
    return <Drawer
        anchor="left"
        open={isDrawerOpen}
        onClose={toggleDrawer}
        className="navbar-drawer"
    >
        <Box className="drawer-content">
            <List className="drawer-nav">
                {paths.map((item) => (
                    <ListItem key={item.text} disablePadding>
                        <ListItemButton
                            component={Link}
                            to={item.to}
                            onClick={toggleDrawer}
                            className="drawer-link"
                        >
                            <ListItemIcon className="drawer-link-icon">
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText primary={item.text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    </Drawer>
}