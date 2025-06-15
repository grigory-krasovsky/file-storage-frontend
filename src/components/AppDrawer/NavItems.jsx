import { ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Star, Share, Delete, Settings } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const navItems = [
    { text: 'Home', icon: <Home />, path: '/' },
    { text: 'Favorites', icon: <Star />, path: '/favorites' },
    { text: 'Shared', icon: <Share />, path: '/shared' },
    { text: 'Trash', icon: <Delete />, path: '/trash' },
    { text: 'Settings', icon: <Settings />, path: '/settings' }
];

export const NavItems = () => (
    <>
        {navItems.map((item) => (
            <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                </ListItemButton>
            </ListItem>
        ))}
    </>
);