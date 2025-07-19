import {Box, TablePagination} from "@mui/material";
import {Contents} from "../components/fileTable/Contents";
import {useState} from "react";
import {CustomLoader} from "./CustomLoader";
import {ErrorWrapper} from "./ErrorWrapper";

export class PageData {
    constructor(enabled = true, initialPageSize = 10, initialPageNumber = 0) {
        this.enabled = enabled;
        this.initialPageSize = initialPageSize;
        this.initialPageNumber = initialPageNumber;
    }
}

export const CommonTableComponent = ({
                                         datasourceQuery, // Accept the query hook as prop
                                         pageData = new PageData(),
                                         errorMessage
                                         // Other props like loading/error handling
                                     }) => {
    // Internal pagination state
    const [pageSize, setPageSize] = useState(pageData.initialPageSize);
    const [pageNumber, setPageNumber] = useState(pageData.initialPageNumber);


    const { data, isLoading, isError } = datasourceQuery({
        pageSize,
        pageNumber
    });

    const handlePageChange = (event, newPage) => {
        setPageNumber(newPage);
    };

    const handleRowsPerPageChange = (event) => {
        const newPageSize = parseInt(event.target.value, 10);
        setPageSize(newPageSize);
        setPageNumber(0);
    };

    return (
        <Box>
            {isLoading ? (
                <CustomLoader loading={true} />
            ) : isError ? (
                <ErrorWrapper
                    isError={isError}
                    message={errorMessage}
                    horizontal={'center'}
                    severity={'error'}
                    vertical={'bottom'}/>
            ) : (
                <Box>
                    <Contents data={data} />
                    {pageData.enabled && data && (
                        <TablePagination
                            component="div"
                            count={data.totalElements || 0}
                            page={pageNumber}
                            onPageChange={handlePageChange}
                            rowsPerPage={pageSize}
                            onRowsPerPageChange={handleRowsPerPageChange}
                        />
                    )}
                </Box>
            )}
        </Box>
    );
};