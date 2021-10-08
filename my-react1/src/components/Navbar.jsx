import React from "react";
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import {BrowserRouter,Route} from "react-router-dom";
const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.container}>
            <div className={`${s.item} ${s.active}`}>
                <NavLink to="/Profile" className={s.none__link} activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Dialogs" className={s.none__link} activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/News" className={s.none__link} activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Music" className={s.none__link} activeClassName={s.active}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to="/Settings" className={s.none__link} activeClassName={s.active}>Settings</NavLink>
            </div>
        </div>
        </nav>
    );
}

export default Navbar;
