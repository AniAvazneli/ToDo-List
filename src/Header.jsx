// import React from 'react';
// import imageOfMoon from "./images/icon-moon.svg";
import ImageOfSun from "./images/icon-sun.svg";

const Header = () => {
    return <div className="header">
        <h1 className="todoHeadline">TODO</h1>
        <div className="headerImages">
            <img className="sun" src={ImageOfSun} alt="sun" />
        </div>
    </div>
}

export default Header;