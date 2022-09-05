// import React from 'react';
import imageOfMoon from "./images/icon-moon.svg";
import imageOfSun from "./images/icon-sun.svg";

const Header = () => {
    return <div className="header">
        <h1>TODO</h1>
        <div className="headerImages">
            <img className="sun" src={imageOfSun} alt="sun image" />
            <img className="moon" src={imageOfMoon} alt="moon image" />
        </div>
    </div>
}

export default Header;