import {useGetFileAccessQuery} from "../../services/fileApi";
import {CustomLoader} from "../../common/CustomLoader";
import {ErrorWrapper} from "../../common/ErrorWrapper";
import {CommonTableComponent, PageData} from "../../common/CommonTableComponent";

export const FileTable = () => {
    return (
        <CommonTableComponent
            datasourceQuery={useGetFileAccessQuery}
            pageData={new PageData(true)}
            errorMessage = "Не удалось загрузить файлы"
        />
    );
};