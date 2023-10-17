import React from 'react'
import "./navLinks.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse } from '@fortawesome/free-solid-svg-icons'
import { faCube } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { faPercent } from '@fortawesome/free-solid-svg-icons'
import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'





export default function NavLinks(props) {
    return (
        <div className='link-card'>
            <div className='dash-container , dash'>
                <FontAwesomeIcon icon={faHouse} size="sm" style={{ color: "white" }} />
                <p className='dash-para'>Dashboard</p>
            </div>
            {/* product */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div className='dash-container'>
                    <FontAwesomeIcon icon={faCube} size="sm" style={{ color: "#ffffff", }} />
                    <p className='dash-para'>Product</p>
                </div>
                <FontAwesomeIcon icon={faAngleRight} size="2xs" style={{ color: "#ffffff" }} className='arrow' />
            </div>
            {/* Customer */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div className='dash-container'>
                    <FontAwesomeIcon icon={faUser} size="sm" style={{ color: "#ffffff", }} />
                    <p className='dash-para'>Customers</p>
                </div>
                <FontAwesomeIcon icon={faAngleRight} size="2xs" style={{ color: "#ffffff" }} className='arrow' />
            </div>
            {/* Income */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div className='dash-container'>
                    <FontAwesomeIcon icon={faDollarSign} size="sm" style={{ color: "#ffffff", }} />
                    <p className='dash-para'>Income</p>
                </div>
                <FontAwesomeIcon icon={faAngleRight} size="2xs" style={{ color: "#ffffff" }} className='arrow' />
            </div>
            {/* Promote */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div className='dash-container'>
                    <FontAwesomeIcon icon={faPercent} size="sm" style={{ color: "#ffffff", }} />
                    <p className='dash-para'>Promote</p>
                </div>
                <FontAwesomeIcon icon={faAngleRight} size="2xs" style={{ color: "#ffffff" }} className='arrow' />
            </div>
            {/* Help */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div className='dash-container'>
                    <FontAwesomeIcon icon={faInfo} size="sm" style={{ color: "#ffffff", }} />
                    <p className='dash-para'>Help</p>
                </div>
                <FontAwesomeIcon icon={faAngleRight} size="2xs" style={{ color: "#ffffff" }} className='arrow' />
            </div>
        </div>
    )
}
