import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from './firebase';

function Login() {
  const history=useNavigate();
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
    const signIn=e=>{
     e.preventDefault();
     //some fance firebase login shitttt......
       auth.signInWithEmailAndPassword(email,password).then((auth) => {
        if(auth){
        history('/Amazon-clone');
      }
       }).catch(error => alert(error.message));

    }

    const register=e=>{
      e.preventDefault();
      //some fance firebase register shitttt......

      auth.createUserWithEmailAndPassword(email,password).then((auth)=>{
        console.log(auth);
        if(auth) {
          history('/Amazon-clone');
        }
      })
      .catch(error => alert(error.message))
     }

  return (
    <div className='login'>
      <Link to="/Amazon-clone">
         <img className='login__logo' src="https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo-500x313.png" alt="lg" />
      </Link>

      <div className="login__container">
        <h1>Sign In</h1>
        <form>
            <h5>E-Mail</h5>
            <input value={email} onChange={e=> setEmail(e.target.value)} type="text" />

            <h5>Password</h5>
            <input value={password} onChange={e=> setPassword(e.target.value)} type="password" />

            <button onClick={signIn} type='submit' className='login__signInButton'>Sign In</button>
            <p>
                By Signing-In , you agree to Amazon's Terms And Conditions of Use & Sale. Please See our Privacy 
                Notice , our Cookies Notice and our Interest-Based Ads.
            </p>

            <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
        </form>
      </div>
    </div>
  )
}

export default Login
