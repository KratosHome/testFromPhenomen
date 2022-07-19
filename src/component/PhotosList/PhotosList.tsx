import React, {FC, memo} from 'react';
import "./PhotosList.scss"
import {PhotosListType} from "./ProductListType";
import {Link} from "react-router-dom";

export const PhotosList: FC<PhotosListType> = memo(({searchPhotos}) => {

    return (
        <div className="containerPhotosList">
            {searchPhotos.map((item: any) =>
                <Link to={`/${item.id}`}
                      key={item.id}
                >
                    <div>
                        <img src={item.thumbnailUrl} alt={item.title}/>
                        <div className="namePhotosList">{item.title}</div>
                    </div>
                </Link>
            )}
        </div>
    );
});
