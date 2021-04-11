import React from "react";
import logoImg from "../../assets/images/Logo.png";

const Header = () => {
    return (
        <header className="headerWrapper">
            <img src={logoImg} alt="logo"></img>
        </header>);
}

export default Header;