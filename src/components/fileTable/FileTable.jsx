import {Box, Paper, Table, TableBody, TableContainer, TableHead, TableCell, TableRow} from '@mui/material';
import {FileRow} from "../fileRow/FileRow";

const files = [
    { id: 1, name: 'Project Report.pdf', type: 'pdf', size: '2.4 MB', modified: 'Yesterday' },
    { id: 2, name: 'Budget.xlsx', type: 'spreadsheet', size: '1.8 MB', modified: '2 days ago' },
    { id: 3, name: 'Vacation.jpg', type: 'image', size: '3.2 MB', modified: '1 week ago' },
    { id: 4, name: 'Presentation.pptx', type: 'presentation', size: '5.7 MB', modified: '3 weeks ago' },
];

export const FileTable = () => (
    <Box sx={{ mt: 3 }}>
        <TableContainer component={Paper} elevation={0}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Size</TableCell>
                        <TableCell align="right">Modified</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {files.map((file) => (
                        <FileRow key={file.id} file={file} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
);