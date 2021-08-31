import { useState } from 'react';
import RegisterScreen from './RegisterScreen';
import './Login.css';
import SignupScreen from './SignupScreen';

function Login() {
  const [signIn, setSignIn] = useState(false);
  const [register, setRegister] = useState(false);

  const handleChangeSigning = () => {
      setSignIn(true);
      setRegister(!register);
  }

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <h2 className="loginScreen__logo">TRAZfLIX</h2>
        <button onClick={handleChangeSigning} className="loginScreen__button">
         {!register ? <h4>Sign Up</h4> : <h4>Sign In</h4>}
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">

        {signIn ? (
        !register ? <SignupScreen setRegister={setRegister}/> : <RegisterScreen setRegister={setRegister}/>
        ) : (
          <>
            <h1>Unlimited Films, TV programs and more.</h1>
            <h2>Watch anywhere. Cancel at anytime</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership
            </h3>
            <div className="loginScreen__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="loginScreen__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;
