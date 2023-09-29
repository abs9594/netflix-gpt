import React from 'react'
import Header from './Header'
import { useState } from 'react'

const Login = () => {
    const [isSignIn, setIsSignIn] = useState(true);

    return (
      <div>
        <Header />
        <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
            alt="background"
            className="absolute"/>
        <form className="w-3/12 absolute p-6 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80">
                <h1
                    className="font-bold text-3xl py-4">{isSignIn ? "Sign In" : "Sign Up"}</h1> 
                {!isSignIn ?(<input
                    type="text"
                    placeholder="Full Name"
                    className="p-4 my-4 w-full bg-gray-700" />
                ):null}
                <input type="text"
                    placeholder="Email Address"
                    className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
                <input
                    type="password"
                    placeholder="Password"
                    className="p-4 my-4 w-full bg-gray-700 rounded-lg" />
                
                <button
                    className="p-4 my-6 bg-red-700 w-full rounded-lg">{isSignIn ? "Sign In" : "Sign Up"}</button>
                <p className="cursor-pointer py-4" onClick={()=>setIsSignIn(false)}>{isSignIn?"New to Netflix? Sign Up":null}</p>
        </form>
      </div>
    
  )
}

export default Login