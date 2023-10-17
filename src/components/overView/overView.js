import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import "./overView.css"


export default function OverView() {


    return (
        <div className='over-card'>
            <div className='month-card'>
                <div className='des-container'>
                    <div className='head-over'>
                        <p style={{ color: 'black', fontVariant: 'small-caps', fontWeight: 'bold', fontSize: '14px' }}>Overview</p>
                        <p>Monthly Earning</p>
                    </div>
                    <div className='monthly-over'>
                        <p>Quarterly
                            <FontAwesomeIcon icon={faAngleDown} size="2xs" style={{ color: "gray", marginLeft: '5px' }} />
                        </p>
                    </div>
                </div>
                <div className='months' style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around' }}>
                    <div className='mon' style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ backgroundColor: 'rgb(228, 228, 208,.7)', width: '35px', height: '100px', borderRadius: '10px', boxShadow: '0px 0px 1px lightGray' }}></span>Jan
                    </div>
                    <div className='mon' style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ backgroundColor: 'rgb(228, 228, 208,.7)', width: '35px', height: '30px', borderRadius: '10px', boxShadow: '0px 0px 1px lightGray' }}></span>Feb
                    </div>
                    <div className='mon' style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ backgroundColor: 'rgb(228, 228, 208,.7)', width: '35px', height: '80px', borderRadius: '10px', boxShadow: '0px 0px 1px lightGray' }}></span>Mar
                    </div>
                    <div className='mon' style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ backgroundColor: 'rgb(228, 228, 208,.7)', width: '35px', height: '110px', borderRadius: '10px', boxShadow: '0px 0px 1px lightGray' }}></span>Apr
                    </div>
                    <div className='mon' style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ backgroundColor: 'rgb(228, 228, 208,.7)', width: '35px', height: '30px', borderRadius: '10px', boxShadow: '0px 0px 1px lightGray' }}></span>May
                    </div>
                    <div className='mon' style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ backgroundColor: 'rgb(228, 228, 208,.7)', width: '35px', height: '120px', borderRadius: '10px', boxShadow: '0px 0px 1px lightGray' }}></span>Jun
                    </div>
                    <div className='mon' style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ backgroundColor: 'rgb(228, 228, 208,.7)', width: '35px', height: '100px', borderRadius: '10px', boxShadow: '0px 0px 1px lightGray' }}></span>Jul
                    </div>
                    <div className='mon' style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ backgroundColor: '#B4B4B3', width: '35px', height: '160px', borderRadius: '10px', boxShadow: '0px 0px 1px lightGray' }}></span>Aug
                    </div>
                    <div className='mon' style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ backgroundColor: 'rgb(228, 228, 208,.7)', width: '35px', height: '100px', borderRadius: '10px', boxShadow: '0px 0px 1px lightGray' }}></span>Sep
                    </div>
                    <div className='mon' style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ backgroundColor: 'rgb(228, 228, 208,.7)', width: '35px', height: '60px', borderRadius: '10px', boxShadow: '0px 0px 1px lightGray' }}></span>Oct
                    </div>
                    <div className='mon' style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ backgroundColor: 'rgb(228, 228, 208,.7)', width: '35px', height: '50px', borderRadius: '10px', boxShadow: '0px 0px 1px lightGray' }}></span>Nov
                    </div>
                    <div className='mon' style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                        <span style={{ backgroundColor: 'rgb(228, 228, 208,.7)', width: '35px', height: '90px', borderRadius: '10px', boxShadow: '0px 0px 1px lightGray' }}></span>Dec
                    </div>
                </div>
            </div>
            {/* circle */}
            <div className='circle-card' style={{ display: 'flex' }}>
                <div className='customers-card'>
                    <p style={{ fontSize: '16px', fontWeight: 'bold', fontVariant: 'small-caps', color: 'black' }}>Customers</p>
                    <p>Customers that buy products</p>
                </div>
                <div className='pie-container' style={{ display: 'flex', alignItems: "center", justifyContent: 'flex-end' }}>
                    <div className='progress'>
                        <span className='text' id="txt">65%</span>
                    </div>
                    <span className='customers-text'>Total New Customers</span>
                </div>
            </div>

        </div>
    )

}
