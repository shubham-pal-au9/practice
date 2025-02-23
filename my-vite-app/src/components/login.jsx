import { useState } from 'react'
import './Login.scss'

function Login() {

  return (
      <div className='main-login'>
        <span id='login-title'>
            Login
        </span>
        <div className='login-content'>
            <div id='username'>
                <span>Username:</span>
                <input type='text' />
            </div>
            <div id='password'>
                <span>Password:</span>
                <input type='password' />
            </div>
            <div id='loginBtn'>
                <button>Login</button>
            </div>
        </div>
      </div>
  )
}

export default Login
