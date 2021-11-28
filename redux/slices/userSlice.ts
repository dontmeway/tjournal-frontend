import { RootState } from './../index';
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ResponseAuth } from "../../utils/api/types";
import { HYDRATE } from 'next-redux-wrapper';

export interface UserSliceType {
    data: ResponseAuth | null;
}

const initialState = {
    data: null
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserData: (state: UserSliceType, { payload }: PayloadAction<ResponseAuth>) => {
            state.data = payload;
        }
    },
    extraReducers: {
        [HYDRATE]: (state: UserSliceType, { payload }) => {
            return {
                ...state,
                ...payload.user
            }
        }
    }
})


export const { setUserData } = userSlice.actions;

export const selectUserData = (state: RootState): ResponseAuth => state.user.data;


export const userReducer = userSlice.reducer;