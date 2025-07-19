import {Box, CircularProgress} from "@mui/material";

export const CustomLoader = ({loading, content}) => {
    const spinner = (
        <Box style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
            {loading && <CircularProgress />}
        </Box>
    );

    return (
        <Box>
            {spinner}
            <Box style={{ opacity: loading ? 0.5 : 1, pointerEvents: loading ? 'none' : 'auto' }}>
                {spinner}
                {content}
            </Box>
        </Box>
    );
}