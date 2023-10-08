import React from 'react'
import { BiHomeSmile } from 'react-icons/bi'
import { Link } from 'react-router-dom'

const NavBar = () => {
    
  return (
    <>
      <div className="border-bottom border-light fixed-top">
        <div className="">
          <div className="row">
              <nav className="navbar navbar-expand Nav">
                    <ul className="navbar-nav">
                        <li className="nav-item fs-5">
                          <Link className="nav-link px-4" to="/">
                          <BiHomeSmile/></Link>
                        </li>
                        <li className="nav-item fs-5">
                          <Link className="nav-link px-4 py-0" to="/exp">
                          Experience</Link>
                        </li>
                        <li className="nav-item fs-5">
                          <Link className="nav-link px-4 py-0" to="/skill">
                          Skill</Link>
                        </li>
                    </ul>
              </nav>
          </div>
        </div>
      </div>
    </>
  )
}

export default NavBar