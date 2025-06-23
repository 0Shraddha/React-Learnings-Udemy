import { useState } from "react";

export default function Login() {
  const [emailIsValid, setEmailIsValid] = useState();
  
  const email = useRef();
  const password = useRef();
 
  function handleSubmit(e){
    e.preventDefault();
    
    
    const enteredEmail = email.target.value;
    const enteredPassword = password.target.value;

    const isEmailValid = !enteredEmail.includes('@');

    {!isEmailValid? setEmailIsValid(true) : ''}
    setEmailIsValid(false);

  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" onBlur={() => handleInputBlur('email')} onChange={(e) => handleInputChange('email', e.target.value)}/>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" onBlur={() => handleInputBlur('password')} onChange={(e) => handleInputChange('password', e.target.value)}/>
        </div>
      </div>

      <div className="control-error"> { isEmailValid ? "Please enter correct email" : "" } </div>

      <p className="form-actions">
        <button type="reset" className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>

      <button></button>
    </form>
  );
}
