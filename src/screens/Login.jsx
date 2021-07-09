import {useState} from 'react';
import {Link} from 'react-router-dom';

import './styles/Login.css';

function Login() {
  /************************************
   * State
   ************************************/
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  /************************************
   * Private Functions
   ************************************/
  // Multiple handlers used for input in order to facilitate validation
  function handleEmailChange({target: {value}}) {
    setEmail(value);
  }

  function handlePasswordChange({target: {value}}) {
    setPassword(value);
  }

  function handleSubmit(event) {
    // No page loading/ default behavior
    event.preventDefault();
  }

  /************************************
   * Render
   ************************************/
  return (
    <div className="log-in">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Your email</label>
        <input
          id="email"
          name="email"
          value={email}
          onChange={handleEmailChange}
        />

        <label htmlFor="password">Your password</label>
        <input
          id="password"
          name="password"
          value={password}
          onChange={handlePasswordChange}
        />

        <input id="login-btn" type="submit" value="Login" />
      </form>
      <p>
        Don't have an account? <Link to="/signup">Sign up here</Link>
      </p>
    </div>
  );
}

export default Login;
