import {Alert, Snackbar} from "@mui/material";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";

export const ErrorWrapper = ({isError, message, severity, vertical, horizontal, children}) => {
    const [snackBarOpen, setSnackBarOpen] = useState(false);

    useEffect(() => {
        setSnackBarOpen(isError)
    }, [isError])

    return <>
        {children}
        <Snackbar
            open={snackBarOpen}
            autoHideDuration={1000}
            anchorOrigin={{vertical: vertical, horizontal: horizontal}}
        >
            <Alert
                severity={severity ?? "warning"}
                variant="filled"
                icon={false}
                sx={{display: 'flex', alignItems: 'center', width: '100%'}}
            >
                {message}
            </Alert>
        </Snackbar>
    </>
}
ErrorWrapper.propTypes = {
    isError: PropTypes.bool.isRequired,
    message: PropTypes.string.isRequired,
    severity: PropTypes.oneOf(['error', 'warning', 'info', 'success']).isRequired,
    horizontal: PropTypes.oneOf(['left', 'center', 'right']).isRequired,
    vertical: PropTypes.oneOf(['top', 'bottom']).isRequired,
    children: PropTypes.node

};
