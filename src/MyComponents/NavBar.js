import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
export class NavBar extends Component {
  render() {
    return (
      <>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
  <Link className="navbar-brand" to="#">  NEWS</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav" >
      <li className="nav-item"><Link className="nav-link" to="/">Home </Link></li>
      <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
      <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li> 
    </ul>
  </div>
</nav>
      </>
    )
  }
}

export default NavBar

//fd83cd68b5584057b39e65b3cddce629 api key