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
    }),
});


export const { useGetFileAccessQuery } = fileApi;