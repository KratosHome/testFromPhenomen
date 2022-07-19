import {intialStateType} from "./intialStateType";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState: intialStateType = {
    photos: [],
    loading: true,
    errors: "",
}

export const getPhotoReducer = createSlice({
    name: "getPhotos",
    initialState,
    reducers: {
        getPhotoReduceFetching: (state:any) => ({
            ...state,
            loading: true
        }),
        getPhotoReduceSucces: (state:any , action: PayloadAction<any[]>) => ({
            ...state,
            photos: action.payload,
            loading: false
        }),
        getPhotoReduceError: (state:any , action: PayloadAction<any[]>) => ({
            ...state,
            errors: action.payload,
            loading: false
        }),
    },
})
export default getPhotoReducer.reducer