import React from 'react';
import { Link } from 'react-router-dom';

const Register = ({ onRegister }) => {

  const [state, setState] = React.useState({
    email: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({
      ...state,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    onRegister(state)
  }


  return (
    <form onSubmit={handleSubmit} className="form" >
      <h1 className="form__title">Регистрация</h1>
      <fieldset className="form__fields">
        <label className="email">
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Email"
            className="form__input form__text"
            value={state.email}
            onChange={handleChange}
          />
        </label>
        <label className="password">
          <input
            id="password"
            type="password"
            name="password"
            placeholder='Пароль'
            className="form__input form__text"
            value={state.password}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <button type="submit" className="form__submit-button">Зарегистрироваться</button>

      <p className="form__subtitle"> Уже зарегистрированы?</p>
      <Link to="/sign-in" className="form__link">Войти</Link>
    </form>

  )

}

export default Register