import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {

    return (
        <div className="navBar">
            <div className='myNameBox'>
                <h1 className='myName'>Dre Lopez Delgado</h1>
            </div>
            <div className='navLinksBox'>
                <li><NavLink to="/Home" activeClassName="activeLink">Home</NavLink></li>
                <li><NavLink to="/AboutMe" activeClassName="activeLink">About Me</NavLink></li>
                <li><NavLink to="/Experience" activeClassName="activeLink">Experience and Education</NavLink></li>
                <li><NavLink to="/Projects" activeClassName="activeLink">Projects</NavLink></li>
                <li><NavLink to="/ContactMe" activeClassName="activeLink">Contact Me</NavLink></li>
            </div>
        </div>
    )

}

export default NavBar 