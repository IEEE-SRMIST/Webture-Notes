import React from 'react'
import './navbar.css'
import profile from '../assets/profile.jpg'
import Search from '../assets/search'
import Home from '../assets/home'
import Message from '../assets/message'
import Newpost from '../assets/newpost'

const Navbar = () => {
  return (
    <header class="top-bar">
    <nav>
      <div class="logo">Petstagram</div>
      <label class="search-input">
        <Search/>
        <input type="text" placeholder="Search" />
      </label>

      <div class="nav-item">
        <Home/>
      </div>

      <div class="nav-item">
        <Message/>
      </div>

      <div class="nav-item">
        <Newpost/>
        </div>

      <div class="nav-item">
        <img
          class="profile-pic"
          src={profile}
          alt="Profile pic"
        />
      </div>
    </nav>
  </header>
  )
}

export default Navbar