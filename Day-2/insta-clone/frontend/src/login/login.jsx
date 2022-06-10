import React, { useState } from 'react';

import './login.css'

const Login = () => {
  const [page, setPage] = useState('login');

  const switchPage = () => {
    setPage(page === 'login' ? 'signup' : 'login');
  }

  const Login = () => {
    return (
      <div className='container'>
        <div className='box'>
          <div className='logo'>Petstagram</div>
          <form id='login-form'>
            <input type='text' />
            <input type='password' />
            <button type='submit'>Login</button>
          </form>
          <div href='/auth' className='link'>Forgot Password?</div>
        </div>
        <div className='box'>
          <p className=''>Don't have an account? <span className='navigate' onClick={switchPage}>Sign up</span></p>
        </div>
      </div>
    )
  };

  const Signup = () => {
    return (
      <div className='container'>
        <div className='box'>
          <div className='logo'>Petstagram</div>
          <p>Sign up to see photos and videos from your friends.</p>
          <form id='signup-form'>
            <input type='text' />
            <input type='text' />
            <input type='text' />
            <input type='text' />
            <button type='submit'>Sign up</button>
          </form>
        </div>
        <div className='box'>
          <p className=''>Have an account? <span className='navigate' onClick={switchPage}>Login</span></p>
        </div>
      </div>
    )
  }

  return (
    <div className='login-wrapper'>
      {
        page === 'login' ? <Login /> : <Signup />
      }
    </div>)
}

export default Login