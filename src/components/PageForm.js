import React from 'react';
import { Link } from 'react-router-dom';

function PageForm(props) {
  const { title, buttonText, onSubmit, isRegister } = props;

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleChangeEmail(e) {
    setEmail(e.target.value);
  }

  function handleChangePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault()
    onSubmit({ email, password })
    console.log ('Clik')
  }

  return (
    <form onSubmit={handleSubmit} className="form" name="sign-up">
      <h2 className="form__title">{title}</h2>
      <fieldset className="form__fields">
        <label className="email">
          <input
            id="input-email"
            name="email"
            type="email"
            placeholder="Email"
            className="form__input form__text"
            onChange={handleChangeEmail}
            required=""
          />
          <span className="input-email-error" />
        </label>
        <label className="password">
          <input
            id="input-password"
            type="password"
            name="password"
            placeholder='Пароль'
            className="form__input form__text"
            onChange={handleChangePassword}
            minLength={8}
            maxLength={200}
          />
          <span className="input-password-error" />
        </label>
      </fieldset>

      <div className="">
        <button type="submit" className="form__submit-button">{buttonText}</button>
        {isRegister && <span className="form__subtitle">Уже зарегистрированы? <Link to="/sign-in" className="form__link">Войти</Link></span>}
        {!isRegister && <span className="form__subtitle">Еще нет аккаунта? <Link to="/sign-up" className="form__link">Зарегистрироваться</Link></span>}
      </div>
    </form>
  )
}

export default PageForm
