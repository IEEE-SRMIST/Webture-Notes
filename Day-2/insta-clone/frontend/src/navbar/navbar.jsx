import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import profile from '../assets/profile.jpg'
import Search from '../assets/search'
import Home from '../assets/home'
import Message from '../assets/message'
import Newpost from '../assets/newpost'
import Logout from '../assets/logout'

import './navbar.css'

axios.defaults.baseURL = 'https://ieee-petstagram.herokuapp.com'

const Navbar = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : null;

  const handleLogout = async () => {
    console.log('calling')
    try {
      await axios.post('/api/auth/logout');
    } catch (error) {
    } finally {
      navigate('/auth');
      localStorage.removeItem('user');
    }
  }

  return (
    <header className="top-bar">
      <nav>
        <div className="logo">Petstagram</div>
        <label className="search-input">
          <Search />
          <input type="text" placeholder="Search" />
        </label>

        <div className="nav-item">
          <Home />
        </div>

        <div className="nav-item">
          <Message />
        </div>

        <div className="nav-item">
          <Newpost />
        </div>

        <div className="nav-item" onClick={() => navigate('/auth')}>
          <img
            className="profile-pic"
            src={profile}
            alt="Profile pic"
          />
        </div>

        <div className='nav-item' onClick={handleLogout}>
          {
            user ? <Logout /> : null
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar