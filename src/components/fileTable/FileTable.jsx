import {
    Box,
    Paper,
    Table,
    TableBody,
    TableContainer,
    TableHead,
    TableCell,
    TableRow,
    TablePagination
} from '@mui/material';
import {FileRow} from "../fileRow/FileRow";
import {useGetFileAccessQuery} from "../../services/fileApi";
import {CustomLoader} from "../../utils/components/CustomLoader";
import {Contents} from "./Contents";
import {ErrorWrapper} from "../../utils/components/ErrorWrapper";
import {useState} from "react";

export const FileTable = () => {

    const fileGetError = "Ошибка при получении файлов";

    const [pageSize, setPageSize] = useState(10);
    const [pageNumber, setPageNumber] = useState(0);

    const { data: files, isLoading, isError } = useGetFileAccessQuery({pageSize, pageNumber});

    const handleChangePage = (event, newPage) => {
        setPageNumber(newPage);
    }

    const handleChangeRowsPerPage = (event) => {
        setPageSize(parseInt(event.target.value, 10));
        setPageNumber(0);
    };


    return <CustomLoader
            loading={isLoading}
            content={<ErrorWrapper
                isError={isError}
                message={fileGetError}
                horizontal={'center'}
                severity={'error'}
                vertical={'bottom'}>
                <Contents data = {files}/>
                {files && <TablePagination
                    component="div"
                    count={files.totalElements}
                    page={pageNumber}
                    onPageChange={handleChangePage}
                    rowsPerPage={pageSize}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />}
        </ErrorWrapper>}
        />
};