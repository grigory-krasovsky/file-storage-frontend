import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApiUrl = 'http://localhost:8080'

export const fileApi = createApi({
    reducerPath: 'fileApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${baseApiUrl}/api` }), // Adjust your base URL
    endpoints: (builder) => ({
        getFileAccess: builder.query({
            query: ({pageSize, pageNumber}) => ({
                url: `/file/location?pageSize=${pageSize}&pageNumber=${pageNumber}`,
                method: 'GET',
            }),
        }),
        getFilePreview: builder.query({
            query: ({parent}) => ({
                url: `/file/access/preview/${parent}`,
                method: 'GET',
                responseHandler: (response) => response.blob().then(blob => URL.createObjectURL(blob)),
            }),
            keepUnusedDataFor: 30
        }),
    }),
});


export const { useGetFileAccessQuery, useGetFilePreviewQuery } = fileApi;