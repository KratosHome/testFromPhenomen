import {combineReducers} from 'redux';
import {configureStore} from "@reduxjs/toolkit";
import getPhotosReducer from "./reduser/getPhotosReduser/getPhotosReduser";
import getPhotoReducer from './reduser/getPhotoReduser/getPhotoReduser';


export const rootReducer = combineReducers({
    getPhotosReducer: getPhotosReducer,
    getPhotoReducer: getPhotoReducer

})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}


export type rootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]