import React from 'react';

function Register(props) {

  return (
    <form className="register">
      <h1 className="register__title">Регистрация</h1>
      <fieldset className="register__fields">
        <label className="email">
        <input
          type='url'
          placeholder='Email'
          className="register__input register__text"
        />
        </label>
        <label className="password">
        <input
          type='text'
          placeholder='Пароль'
          className="register__input register__text"
        />
        </label>
      </fieldset>
      <button type="submit" className="register__submit-button">Зарегистрироваться</button>
      <h2 className="register__subtitle"> Уже зарегистрированы? Войти</h2>
    </form>

  )

}

export default Register