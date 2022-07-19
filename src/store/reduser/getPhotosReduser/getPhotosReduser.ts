import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { intialStateType } from "./intialStateType";


const initialState: intialStateType = {
    photos: [],
    loading: true,
    errors: "",
}

export const getPhotosReducer = createSlice({
    name: "getPhotos",
    initialState,
    reducers: {
        getPhotosReduceFetching: (state:any) => ({
            ...state,
            loading: true
        }),
        getPhotosReduceSucces: (state:any , action: PayloadAction<any[]>) => ({
            ...state,
            photos: action.payload,
            loading: false
        }),
        getPhotosReduceError: (state:any , action: PayloadAction<any[]>) => ({
            ...state,
            errors: action.payload,
            loading: false
        }),
    },
})
export default getPhotosReducer.reducer