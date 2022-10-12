import React from 'react';

const Login = ({onLogin}) => {

  const [state, setState] = React.useState ({
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
    onLogin(state)
  }


  return (
    <form onSubmit={handleSubmit} className="form">
      <h1 className="form__title">Вход</h1>
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
      <button type="submit" className="form__submit-button">Войти</button>
    </form>
  )

}
export default Login