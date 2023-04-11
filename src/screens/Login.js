import React, { useState } from 'react'
import './Login.css' ;
import SignInScreen from './SignInScreen';

function Login() {

  const [signIn , setSignIn] = useState(false) ;


  return (
    <div className = 'loginScreen'>
      <div className ='loginScreen__background'>
         <img 
           className = 'loginScreen__logo' 
           src= 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png'/>


         <button className='loginScreen__button'
                 onClick = {()=> setSignIn(true)}>Sign In</button>
         <div className = 'loginScreen__gradient' />

      </div>
      <div className = 'loginScreen__body' >
      {signIn ? <SignInScreen /> :   <>
        <h1>Unlimited films , TV programmes and more.</h1>
        <h2>Watch anywhere . Cancel at any time </h2>
        <h3>Ready to watch ? Enter your email to create or restart your memmbership </h3>
      
        <div className='loginScreen__input'>
          <form>
            <input type = 'email' placeholder='Email Address'/>
            <button className = 'loginScreen__getStarted'
                    onClick = {()=> setSignIn(true )}>Get Started</button>
            </form>
          
        </div>
        </> }
      </div>
    </div>
  )
}

export default Login