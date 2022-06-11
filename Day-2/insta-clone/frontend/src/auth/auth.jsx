import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import './auth.css';

axios.defaults.baseURL = 'https://ieee-petstagram.herokuapp.com';
// axios.defaults.baseURL = 'http://localhost:5000';

const Auth = () => {
  const navigate = useNavigate();

  const [page, setPage] = useState('login');

  const switchPage = () => {
    setPage(page === 'login' ? 'signup' : 'login');
  }

  useEffect(() => {
    const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;
    if (user) return navigate('/');
  }, [])

  const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
      e.preventDefault();
      if (username.length === 0 || password.length === 0) {
        alert('Incomplete details');
        return;
      }
      try {
        const data = { user: username, password };
        const response = await axios.post('/api/auth/login', data);
        if (response.status === 200) {
          const user = response.data.data.user;
          const authToken = response.data.data.authToken;
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('authToken', authToken);
          alert('Login Successful!');
          navigate('/');
          return;
        } else throw new Error();
      } catch (error) {
        console.log(error);
        alert('Couldn\'t login try again');
      }
    }

    return (
      <div className='container'>
        <div className='box'>
          <div className='logo'>Petstagram</div>
          <form id='login-form' onSubmit={handleLogin}>
            <input type='text' placeholder='Enter your username or email' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Login</button>
          </form>
          <div href='/auth' className='link'>Forgot Password?</div>
        </div>
        <div className='box'>
          <p className=''>Don't have an account? <span className='navigate' onClick={() => { switchPage(); setUsername(''); setPassword('') }}>Sign up</span></p>
        </div>
      </div>
    )
  };

  const Signup = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');

    const handleSignup = async (e) => {
      e.preventDefault();
      if (username.length === 0 || password.length === 0 || email.length === 0 || name.length === 0 || !email.includes('@')) {
        alert('Incomplete details');
        return;
      }
      try {
        const data = { username, email, password, fullName: name };
        const response = await axios.post('/api/auth/signup', data);
        if (response.status === 201) {
          console.log(response.data)
          const user = response.data.data.user;
          const authToken = response.data.data.authToken;
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('authToken', authToken);
          alert('Signup Successful!');
          navigate('/');
          return;
        } else if (response.status === 409) {
          alert('Account already exists!');
          return;
        } else throw new Error();
      } catch (error) {
        console.log(error);
        alert('Couldn\'t signup try again');
      }
    }

    return (
      <div className='container'>
        <div className='box'>
          <div className='logo'>Petstagram</div>
          <p>Sign up to see photos and videos from your friends.</p>
          <form id='signup-form' onSubmit={handleSignup}>
            <input type='text' placeholder='Enter your full name' value={name} onChange={(e) => setName(e.target.value)} />
            <input type='text' placeholder='Enter your email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='text' placeholder='Enter your username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type='password' placeholder='Enter your password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Sign up</button>
          </form>
        </div>
        <div className='box'>
          <p className=''>Have an account? <span className='navigate' onClick={() => { switchPage(); setUsername(''); setPassword(''); setEmail(''); setName(''); }}>Login</span></p>
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

export default Auth;