import React from "react";
import logoImg from "../../assets/images/Logo.png";
import style from "./Header.module.css";

const Header = () => {
    return (
        <header className={style.headerWrapper}>
            <img src={logoImg} alt="logo"></img>
        </header>);
}

export default Header;