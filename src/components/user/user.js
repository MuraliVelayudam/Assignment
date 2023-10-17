import React from 'react'
import "./user.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'


export default function User() {


    return (
        <div className='user-card'>
            <div className='user-description-container'>
                {/* User Profile Img */}
                <div className='img-container'>
                    <img src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="logo" />
                </div>
                {/* User Name and Role */}
                <div className='name-container'>
                    <p className='name-user'>John Smith</p>
                    <p className='role'>Project Manager</p>
                </div>
            </div>
            {/* Down Arrow */}
            <FontAwesomeIcon icon={faAngleDown} size="2xs" style={{ color: "#ffffff", }} />
        </div>
    )
}
