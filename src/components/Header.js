import React from 'react';
import logo from '../images/logo_white.png';
import { Link, Route, Switch } from 'react-router-dom';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="Логотип" />

      <div className="header__info">
        <p className="header__email">пример почты</p>
        <Link to="/sign-in" className="header__link">Выйти</Link>
      </div>
      {/* <Switch>
        <Route path="/">
        <p className="header_email">пример почты</p>
          <Link to="/sign-in" className="header__link">Выйти</Link>
        </Route>
        <Route path="/sign-up">
          <Link to="/sign-in">  Войти</Link>
        </Route>
        <Route path="/sign-in">
          <Link path="/sign-up">Регистрация</Link>
        </Route>
      </Switch>  */}
    </header>
  )
}

export default Header