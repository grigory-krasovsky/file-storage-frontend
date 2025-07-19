import {TableRow, TableCell, IconButton, Box, Skeleton} from '@mui/material';
import { InsertDriveFile, CloudDownload } from '@mui/icons-material';
import {fileColors} from "../../utils/constants";
import {getFormattedSize} from "../../utils/functions";
import {useGetFilePreviewQuery} from "../../services/fileApi";
import {BlobPreview} from "../../common/ImageDisplayComponent";

export const FileRow = ({ file }) => {
    let fileMetadata = file.fileMetadataResponse.fileMetadataDTO;

    const { data: previewUrl, isLoading, isError } = useGetFilePreviewQuery({
        parent: fileMetadata.fileLocationDTO.id
    });

    return <TableRow>
        <TableCell width={120}>
            {isLoading ? (
                <Skeleton variant="rectangular" width={100} height={60} />
            ) : isError ? (
                <InsertDriveFile color="error" />
            ) : previewUrl ? (
                <BlobPreview blobUrl={previewUrl} />
            ) : (
                <InsertDriveFile />
            )}
        </TableCell>
        <TableCell component="th" scope="row">
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                {/*<InsertDriveFile color={fileColors[file.type] || 'inherit'} />*/}
                {fileMetadata.fileName}
            </Box>
        </TableCell>
        <TableCell align="right">{getFormattedSize(fileMetadata.size)}</TableCell>
        <TableCell align="right">
            <IconButton aria-label="download">
                <CloudDownload />
            </IconButton>
        </TableCell>
    </TableRow>
}