import {useState} from 'react';
import {useHistory, Link} from 'react-router-dom';
import Loader from '../components/common/Loader/Loader';

import {logIn} from '../services/authService';
import './styles/Login.css';

function Login() {
  /************************************
   * State
   ************************************/
  let history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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
    setIsLoading(true);

    // No page reloading/ default behavior
    event.preventDefault();

    logIn(email, password)
      .then(() => {
        setIsLoading(false);

        // removing sign up so they can't navigate back to it
        history.replace('/');
      })
      .catch((error) => {
        setIsLoading(false);
        alert(error.message);
        console.log(error);
      });
  }

  /************************************
   * Render
   ************************************/
  return (
    <div className="log-in">
      <h1>Login</h1>
      {isLoading ? (
        <Loader />
      ) : (
        <>
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
        </>
      )}
    </div>
  );
}

export default Login;
