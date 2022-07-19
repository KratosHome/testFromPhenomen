import React, {memo, FC} from 'react';
import "./Search.scss"
import {SearchType} from "./SearchType";

export const Search: FC<SearchType> = memo(({setValue}) => {

    return (
        <div
            className="containerSearch"
        >
            <input
                type="text"
                placeholder="Search..."
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
});
