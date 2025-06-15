import {Box, Drawer, Toolbar, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText} from '@mui/material';
import { NavItems } from './NavItems';
import { Settings } from '@mui/icons-material';

export const AppDrawer = ({ mobileOpen, handleDrawerToggle }) => (
    <Box component="nav" sx={{ width: { sm: 240 }, flexShrink: { sm: 0 } }}>
        <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            sx={{
                display: { xs: 'block', sm: 'none' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}
        >
            <Toolbar />
            <Divider />
            <List>
                <NavItems />
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><Settings /></ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
        <Drawer
            variant="permanent"
            sx={{
                display: { xs: 'none', sm: 'block' },
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240 },
            }}
            open
        >
            <Toolbar />
            <Divider />
            <List>
                <NavItems />
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton>
                        <ListItemIcon><Settings /></ListItemIcon>
                        <ListItemText primary="Settings" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    </Box>
);