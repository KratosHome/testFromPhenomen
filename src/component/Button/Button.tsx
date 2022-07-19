import React, {FC, memo} from 'react';
import "./Button.scss"
import {ButtonType} from './ButtonType';

export const Button: FC<ButtonType> = memo(({setMorePhoto, morePhoto, searchPhotos}) => {
    return (
        <div
            className="containerButton"
        >
            {searchPhotos.length >= 5 ?
                <button
                    onClick={() => setMorePhoto(morePhoto + 5)}
                >
                    Show more
                </button>
                :
                null
            }
        </div>
    );
});
