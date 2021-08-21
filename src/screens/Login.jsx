import { useState } from 'react';
import './Login.css';
import SignupScreen from './SignupScreen';

function Login() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="loginScreen">
      <div className="loginScreen__background">
        <h2 className="loginScreen__logo">TRAZfLIX</h2>
        <button onClick={() => setSignIn(true)} className="loginScreen__button">
          Sign In
        </button>
        <div className="loginScreen__gradient" />
      </div>
      <div className="loginScreen__body">
        {signIn ? (
          <SignupScreen />
        ) : (
          <>
            <h1>Unlimited Films, TV programs and more.</h1>
            <h2>Watch anywhere. Cancel at anytime</h2>
            <h3>
              Ready to watch? Enter your email to create ot restart your
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
