import React from 'react'
import Header from './Header'
import { useState } from 'react'
import { useRef } from 'react';
import { validateCredentials } from "../utils/validations"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { auth } from '../utils/firebase';
import { BG_URL } from '../utils/constants';

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);
    const [errMessage, setErrMessage] = useState(null);
    
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = validateCredentials(emailRef.current.value, passwordRef.current.value);
        setErrMessage(message);
        if (message) return;

        if (!isSignIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {displayName: nameRef.current.value})
            .catch((error) => {
              setErrMessage(error.message);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(
        auth,
        emailRef.current.value,
        passwordRef.current.value
      )
        .then((userCredential) => {
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + "-" + errorMessage);
        });
    }
  };

    return (
        <div>
            <Header />
            <img src={BG_URL}
                alt="background"
                className="absolute" />
            <form className="w-3/12 absolute px-6 py-2 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1
                    className="font-bold text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1>
                {!isSignIn ? (<input
                    type="text"
                    ref={nameRef}
                    placeholder="Full Name"
                    className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
                ) : null}
                <input type="text"
                    placeholder="Email Address"
                    ref={emailRef}
                    className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
                <input
                    type="password"
                    placeholder="Password"
                    ref={passwordRef}
                    className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
                <p className="font-bold text-red-700 text-lg">{errMessage}</p>
                <button
                    onClick={(e) => handleSubmit(e)}
                    className="p-4 mt-6 mb-1 bg-red-700 w-full rounded-lg">{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="cursor-pointer py-4" onClick={() => setIsSignIn(prevState => !prevState)}>
                    {isSignIn ? "New to Netflix? Sign Up" : "Already Signed up? Sign In Now"}
                </p>
            </form>
        </div>
    );
};

export default Login