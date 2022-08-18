import React, { useState } from "react";
import "./LoginScreen.css";
import SignUpScreen from "./SignUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);

  return (
    <div className="LoginScreen">
      <div className="loginscreen_background">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          className="loginscreen_logo"
        />
        <button onClick={() => setSignIn(true)} className="loginscreen_button">
          Sign In
        </button>

        <div className="loginscreen_gradient"></div>

        <div className="loginscreen_body">
          {signIn ? (
            <SignUpScreen />
          ) : (
            <>
              <h1>Unlimited films,TV programmes and more.</h1>
              <h2>Watch anywhere. Cancel at any time.</h2>
              <h3>
                Ready to watch? Enter your email to create or restart your
                membership.
              </h3>
              <div className="loginscreen_input">
                <form>
                  <input type="email" placeholder="Email Address" />
                  <button
                    className="loginscreen_getstarted"
                    onClick={() => setSignIn(true)}
                  >
                    GET STARTED
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default LoginScreen;
