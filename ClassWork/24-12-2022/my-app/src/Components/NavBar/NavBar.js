import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (  
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <div class="collapse navbar-collapse" id="collapsibleNavbar">
      <ul class="navbar-nav">
        <li class="nav-item">
          <Link class="nav-link" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Posts">Post</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/Query">ReactQuery</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default NavBar