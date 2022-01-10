import React from 'react';
import { Link } from 'react-router-dom';
import "./banner.scss"

const Header = ({
    title,
    span1,
    span2,
}) => {
    return (
        <div className="banner text-center mt-5">
            <h1>{title}</h1>
            <p>{span1}</p>
            <button className="btn">{span2}</button>
        </div>
    );
};

export default Header;