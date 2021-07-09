import {useState} from 'react';
import {Link, useHistory} from 'react-router-dom';

import Loader from '../components/common/Loader/Loader';
import {signUp} from '../services/authService';
import './styles/SignUp.css';

function SignUp() {
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

  async function handleSubmit(event) {
    setIsLoading(true);

    // No page loading/ default behavior
    event.preventDefault();

    // Sign up user and immediately redirect to home/dashboard
    signUp(email, password)
      .then(() => {
        setIsLoading(false);

        // removing sign up so they can't navigate back to it
        history.replace('/');
      })
      .catch((error) => {
        alert(error.message);
        console.log(error.message);

        // loading set to false in here separately as well instead of inside
        // finally block so that the component isn't trying to get updated
        // while it's unmounted, i.e. after history.replace() is ran.
        setIsLoading(false);
      });
  }

  /************************************
   * Render
   ************************************/
  return (
    <div className="sign-up">
      <h1>Sign Up</h1>
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

            <input id="submit-btn" type="submit" value="Sign Up" />
          </form>
          <p>
            Already have an account? <Link to="/login">Sign in here</Link>
          </p>
        </>
      )}
    </div>
  );
}

export default SignUp;
