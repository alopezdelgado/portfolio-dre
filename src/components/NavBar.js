import React from 'react'
import {NavLink} from 'react-router-dom'

const NavBar = () => {

    return (
        <div className="navBar">
            <div className='myNameBox'>
                <h1 className='myName'>Dre Lopez Delgado
                </h1>
            </div>
            <div className='navLinksBox'>
                <div className='about-me'>
                <div className='contact-me'>
                    <li><NavLink to="/Home">Home
                    </NavLink>
                    </li>
                </div>
                    <li><NavLink to="/AboutMe">AboutMe
                    </NavLink>
                    </li>
                </div>
                <div className='experience'>
                    <li><NavLink to="/Experience">Experience and Education
                    </NavLink>
                    </li>
                </div>
                <div className='projects'>
                    <li><NavLink to="/Projects">Projects
                    </NavLink>
                    </li>
                </div>
                <div className='contact-me'>
                    <li><NavLink to="/ContactMe">Contact Me
                    </NavLink>
                    </li>
                </div>
            </div>
        </div>
    )
}

export default NavBar 