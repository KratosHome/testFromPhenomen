import React from 'react';
import "./Header.scss"
import {Link} from "react-router-dom";

export const Header = () => {
    return (
        <div className="containerHeader">
            <h1>
                <Link to="/">LOGO</Link>
            </h1>
            <h2>Photos</h2>
        </div>
    );
};
