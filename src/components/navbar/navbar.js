import React from 'react'
import NavLinks from '../navLinks/navLinks'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import User from '../user/user'
import "./navbar.css"
export default function Navbar() {
    return (
        <div className='nav-container'>
            <div>
                <div className='dash-head-card'>
                    <FontAwesomeIcon spin icon={faGear} size="2xl" style={{ color: "white" }} />
                    <p className='dash-heading'>DashBoard</p>
                </div>
                <NavLinks />
            </div>
            <User />
        </div>
    )
}
