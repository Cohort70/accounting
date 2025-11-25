import {base_url} from "../../utils/constants.ts";
import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import type {UserData, UserProfile, UserRegister} from "../../utils/types";
import type {RootState} from "../../app/store.ts";

const authEndpoints = ['updateUser'];

export const accountApi = createApi({
    reducerPath: 'account',
    tagTypes: ['profile'],
    baseQuery: fetchBaseQuery({
        baseUrl: base_url,
        prepareHeaders: (headers, {getState, endpoint}) => {
            if (authEndpoints.includes(endpoint)) {
                const token = (getState() as RootState).token;
                headers.set('Authorization', token);
            }
            return headers;
        }
    }),
    endpoints: builder => ({
        registerUser: builder.mutation<UserProfile, UserRegister>({
            query: user => ({
                url: '/account/register',
                method: 'POST',
                body: user
            })
        }),
        fetchUser: builder.query<UserProfile, string>({
            query: token => ({
                url: '/account/login',
                method: 'POST',
                headers: {
                    Authorization: token
                }
            }),
            providesTags: ['profile']
        }),
        updateUser: builder.mutation<UserProfile, { login: string, userData: Omit<UserData, 'login'> }>({
            query: ({userData, login}) => ({
                url: `/account/user/${login}`,
                method: 'PATCH',
                body: userData
            }),
            invalidatesTags: ['profile']
        }),
        changePassword: builder.mutation<void, { newPassword: string, token: string }>({
            query: ({newPassword, token}) => ({
                url: '/account/password',
                method: 'PATCH',
                headers: {
                    Authorization: token
                },
                body: {password: newPassword}
            })
        })
    })
})

export const {useLazyFetchUserQuery, useFetchUserQuery, useRegisterUserMutation,
useChangePasswordMutation, useUpdateUserMutation} = accountApi;