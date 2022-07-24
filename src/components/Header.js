import React from 'react';
import { Route, Link } from 'react-router-dom';
import logo from '../images/header-logo.svg';

function Header({ email }) {
    return (
        <header className="header">
            <img className="header__logo" alt="Логотип Mesto" src={logo} />
            <Route path="/sign-in">
                <Link to="sign-up" className="header__link">Регистрация</Link>
            </Route>
            <Route path="/sign-up">
                <Link to="sign-in" className="header__link">Войти</Link>
            </Route>
            <Route exact path="/">
                <nav className="header__reg-data">
                    <p className="header__email">{email}</p>
                    <button className="header__link">Выйти</button>
                </nav>
            </Route>
        </header>
    );
}

export default Header;