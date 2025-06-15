import { useState } from 'react';
import {Box, CssBaseline, Toolbar} from '@mui/material';
import { AppDrawer } from '../components/AppDrawer/AppDrawer';
import { FileTable } from '../components/FileTable/FileTable';
import {CustomAppBar} from "../components/CustomAppBar";

export const FileStoragePage = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <CustomAppBar handleDrawerToggle={handleDrawerToggle} />
            <AppDrawer mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: 'calc(100% - 240px)' } }}
            >
                <Toolbar />
                <FileTable />
            </Box>
        </Box>
    );
};