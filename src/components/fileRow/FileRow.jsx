import { TableRow, TableCell, IconButton, Box } from '@mui/material';
import { InsertDriveFile, CloudDownload } from '@mui/icons-material';
import {fileColors} from "../../utils/constants";
import {getFormattedSize} from "../../utils/functions";

export const FileRow = ({ file }) => {
    let fileMetadata = file.fileMetadataResponse.fileMetadataDTO;

    return <TableRow>
        <TableCell component="th" scope="row">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                <InsertDriveFile color={fileColors[file.type] || 'inherit'} />
                {fileMetadata.name}
            </Box>
        </TableCell>
        <TableCell align="right">{getFormattedSize(fileMetadata.size)}</TableCell>
        <TableCell align="right">{file.modified}</TableCell>
        <TableCell align="right">
            <IconButton aria-label="download">
                <CloudDownload />
            </IconButton>
        </TableCell>
    </TableRow>
}