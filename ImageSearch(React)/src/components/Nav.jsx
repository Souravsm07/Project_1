import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <>
   <nav className="navbar navbar-expand-lg navbar-light bg-dark " >
  <div className="container-fluid">
    <Link className="navbar-brand text-info " to="/"><b>ImageSearch</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
        </li>

        <li className="nav-item">
          <a className="nav-link text-light" href="/search">Search</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Nav
