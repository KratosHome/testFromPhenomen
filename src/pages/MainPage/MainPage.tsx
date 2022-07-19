import React, {useEffect, useState, memo} from 'react';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {Button, Loader, PhotosList, Search} from "../../component";
import {fetshExchangeRateAction} from "../../store";

export const MainPage = memo(() => {
    const [morePhoto, setMorePhoto] = useState<number>(6)
    const [value, setValue] = useState("")


    const dispatch = useAppDispatch()
    useEffect(() => {
        if (value.length > 1) {
            setMorePhoto(500)
        }
        dispatch(fetshExchangeRateAction(morePhoto, 1))
    }, [dispatch, morePhoto, value]);


    const {loading, photos} = useAppSelector(state => state.getPhotosReducer)

    let searchPhotos = photos.filter((item: any) => {
        return item.title.toLowerCase().includes(value.toLowerCase())
    })


    return (
        <>
            {loading && <Loader/>}
            <Search
                setValue={setValue}
            />
            <PhotosList
                searchPhotos={searchPhotos}
            />
            <Button
                searchPhotos={searchPhotos}
                morePhoto={morePhoto}
                setMorePhoto={setMorePhoto}
            />
        </>
    );
});
