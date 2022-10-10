import React from 'react';

function Login(props) {

  const { title, textSubmit } = props

  return (
    <form className="form">
      <div>
        <h1 className="form__title">{title}</h1>
        <fieldset className="form__fields">
          <label className="email">
            <input
              type='url'
              placeholder='Email'
              className="form__input form__text"
              required />
          </label>
          <label className="password">
            <input
              type='text'
              placeholder='Пароль'
              className="form__input form__text"
              minLength="2" maxLength="40"
              required />
          </label>
        </fieldset>
      </div>
      <button type="submit" className="form__submit-button">{textSubmit}</button>
    </form>
  )

}
export default Login