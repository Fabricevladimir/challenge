import React, {useState} from 'react';

import Input from '../components/common/LabelledInput/LabelledInput';

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
    <div>
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <Input
          name="email"
          label="Your email"
          value={email}
          onChange={handleEmailChange}
        />
        <Input
          name="password"
          label="Your password"
          value={password}
          onChange={handlePasswordChange}
        />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default SignUp;
