import React, {memo, useEffect} from 'react';
import {useParams} from "react-router-dom";
import "./PhotosPage.scss"
import {useAppDispatch, useAppSelector} from "../../hooks";
import {fetshPhotoAction} from "../../store/action";
import {Loader} from "../../component";

export const PhotosPage = memo(() => {

    const pageId = useParams();
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(fetshPhotoAction(pageId.id))
    }, [dispatch]);

    const {loading, photos} = useAppSelector(state => state.getPhotoReducer)

    return (
        <div className="containerPhotosPage">
            {loading && <Loader/>}
            <div>{photos.title}</div>
            <img src={photos.url} alt={photos.url}/>
        </div>
    );
});
