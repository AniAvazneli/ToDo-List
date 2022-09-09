import ImageOfSun from "./images/icon-sun.svg";
import ImageOfMoon from "./images/icon-moon.svg";

const Header = (props) => {
    return <div className="header">
        <h1 className="todoHeadline">TODO</h1>
        <div onClick={props.changeTheme} className="headerImages">
            {props.darkMode ? 
                <img className="sun" src={ImageOfSun} alt="sun" />
            :   <img className="sun" src={ImageOfMoon} alt="sun" />
            }
        </div>
    </div>
}

export default Header;