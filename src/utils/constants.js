import {
    Folder as FilesIcon,
    Home as HomeIcon,
} from "@mui/icons-material";
import {FileStoragePage} from "../pages/FileStoragePage";
import {HomePage} from "../pages/HomePage";

export const paths = [
    { text: 'Home', to: '/', icon: <HomeIcon />, element: <HomePage /> },
    { text: 'Files', to: '/storage', icon: <FilesIcon />, element: <FileStoragePage /> },
]

export const fileColors = {
    pdf: 'error',
    spreadsheet: 'success',
    image: 'primary',
    presentation: 'warning'
};