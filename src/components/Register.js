import React from 'react';
import { Link } from 'react-router-dom';

function Register(props) {

  const {title, textSubmit}= props

  return (
    <form className="form">
      <h1 className="form__title">{title}</h1>
      <fieldset className="form__fields">
        <label className="email">
        <input
          type='url'
          placeholder='Email'
          className="form__input form__text"
        />
        </label>
        <label className="password">
        <input
          type='text'
          placeholder='Пароль'
          className="form__input form__text"
        />
        </label>
      </fieldset>
      <button type="submit" className="form__submit-button">{textSubmit}</button>
      <p className="form__subtitle"> Уже зарегистрированы?</p>
      <Link to="/sing-in" className="form__link">Войти</Link>
    </form>

  )

}

export default Register