import {Box} from "@mui/material";

export const BlobPreview = ({ blobUrl, width = 100, height = 60 }) => {
    return (
        <Box
            sx={{
                width,
                height,
                position: 'relative',
                overflow: 'hidden',
                borderRadius: 1,
                '& img': {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                }
            }}
        >
            <img
                src={blobUrl}
                alt="File preview"
                onError={(e) => {
                    e.currentTarget.style.display = 'none';
                }}
            />
        </Box>
    );
};