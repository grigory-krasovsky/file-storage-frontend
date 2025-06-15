import { TableRow, TableCell, IconButton, Box } from '@mui/material';
import { InsertDriveFile, CloudDownload } from '@mui/icons-material';

const fileColors = {
    pdf: 'error',
    spreadsheet: 'success',
    image: 'primary',
    presentation: 'warning'
};

export const FileRow = ({ file }) => (
    <TableRow>
        <TableCell component="th" scope="row">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <InsertDriveFile color={fileColors[file.type] || 'inherit'} />
                {file.name}
            </Box>
        </TableCell>
        <TableCell align="right">{file.size}</TableCell>
        <TableCell align="right">{file.modified}</TableCell>
        <TableCell align="right">
            <IconButton aria-label="download">
                <CloudDownload />
            </IconButton>
        </TableCell>
    </TableRow>
);