import {AppDispatch} from "../../rootReduser"
import {photosServer} from "../../../API";
import { getPhotosReducer } from "../../reduser";


export const fetshExchangeRateAction = (limit: number, pages: number) => async (dispatch: AppDispatch) => {
    try {
        dispatch(getPhotosReducer.actions.getPhotosReduceFetching())
        let response = await photosServer.getPhotos(limit, pages)
        dispatch(getPhotosReducer.actions.getPhotosReduceSucces(response.data))
    } catch (e: any) {
        dispatch(getPhotosReducer.actions.getPhotosReduceError(e.message))
    }
}



