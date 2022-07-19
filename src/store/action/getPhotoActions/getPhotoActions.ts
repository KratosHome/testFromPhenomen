import { photosServer } from "../../../API"
import {getPhotoReducer} from "../../reduser"
import {AppDispatch} from "../../rootReduser"


export const fetshPhotoAction = (pages: string| undefined) => async (dispatch: AppDispatch) => {
    try {
        dispatch(getPhotoReducer.actions.getPhotoReduceFetching())
        let response = await photosServer.getPhoto(pages)
        dispatch(getPhotoReducer.actions.getPhotoReduceSucces(response.data))
    } catch (e: any) {
        dispatch(getPhotoReducer.actions.getPhotoReduceError(e.message))
    }
}



