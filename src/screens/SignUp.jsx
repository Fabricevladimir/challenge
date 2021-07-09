import React, {useState} from 'react';

import './styles/SignUp.css';

function SignUp() {
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
    <div className="sign-up">
      <h1>Sign Up</h1>
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
      <p>Already have an account? Sign in here</p>
    </div>
  );
}

export default SignUp;
