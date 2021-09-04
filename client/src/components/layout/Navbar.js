import React from 'react'

export default function Navbar () {
  return (
    <nav className="navbar bg-dark">
      <h1>
        <a href="index.html"> <i className="fas fa-record-vinyl"></i> JamLocal </a>
      </h1>
      <ul>
        <li>
          <a href="profiles.html">Musicians</a>
        </li>
        <li>
          <a href="register.html">Register</a>
        </li>
        <li>
          <a href="login.html">Login</a>
        </li>
      </ul>
    </nav>
  )
}
