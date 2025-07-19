import {
    Box,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {FileRow} from "../fileRow/FileRow";

export const Contents = ({data}) => {
    return <Box sx={{mt: 3}}>
        <TableContainer component={Paper} elevation={0}>
            <Table size={'small'}>
                <TableHead>
                    <TableRow>
                        <TableCell>Img</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Size</TableCell>
                        <TableCell align="right">Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data && data.content.map((file) => {
                            return <FileRow key={file.fileLocationUUID} file={file}/>
                        }
                    )}
                </TableBody>
            </Table>
        </TableContainer>
    </Box>
}