import React from 'react'
import "./dash.css"
import OverView from "../overView/overView"
import ProductSell from '../product/productSell';
import { FcBusinessman } from "react-icons/fc";
import { FcSearch } from "react-icons/fc";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowUpLong } from '@fortawesome/free-solid-svg-icons'
import { faArrowDownLong } from '@fortawesome/free-solid-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'
import { faSackDollar } from '@fortawesome/free-solid-svg-icons'
import { faHandHoldingDollar } from '@fortawesome/free-solid-svg-icons'
import { faCashRegister } from '@fortawesome/free-solid-svg-icons'





export default function Dash(props) {

    return (
        <>
            <div className='dash-card'>
                <div className='wish-container'>
                    <h4 className='name-user'>Hello John <FcBusinessman />,</h4>
                    <div className='search-card'>
                        <FcSearch />
                        <input type="search" placeholder='Search' className='input-search' />
                    </div>
                </div>
                {/* track card */}
                <div className='track-card'>
                    {/* Card - 1 */}
                    <div className='track'>
                        <div className='icon'>
                            <FontAwesomeIcon icon={faSackDollar} fade size="2xl" style={{ color: "#ffffff", }} />
                        </div>
                        <div className='box-description'>
                            <p className='earn'>Earning</p>
                            <h1 className='m-head'>$198K</h1>
                            <p className='para-month'><span className='arrow-head'><FontAwesomeIcon icon={faArrowUpLong} size="2xs" style={{ color: 'green', }} />37.8%</span> this month</p>
                        </div>
                    </div>
                    {/* Card - 2 */}
                    <div className='track'>
                        <div className='icon' style={{ backgroundColor: '#FC92E3' }}>
                            <FontAwesomeIcon icon={faFolder} fade size="2xl" style={{ color: "#ffffff", }} />
                        </div>
                        <div className='box-description'>
                            <p className='earn'>Orders</p>
                            <h1 className='m-head'>$2.4K</h1>
                            <p className='para-month'><span className='arrow-head' style={{ color: 'red' }}><FontAwesomeIcon icon={faArrowDownLong} size="2xs" style={{ color: 'red', }} />37.2%</span> this month</p>
                        </div>
                    </div>
                    {/* Card - 3 */}
                    <div className='track'>
                        <div className='icon' style={{ backgroundColor: '#3EDBF0' }}>
                            <FontAwesomeIcon icon={faHandHoldingDollar} fade size="2xl" style={{ color: "#ffffff", }} />
                        </div>
                        <div className='box-description'>
                            <p className='earn'>Balance</p>
                            <h1 className='m-head'>$2.4K</h1>
                            <p className='para-month'><span className='arrow-head' style={{ color: 'red' }}><FontAwesomeIcon icon={faArrowDownLong} size="2xs" style={{ color: 'red', }} />2%</span> this month</p>
                        </div>
                    </div>
                    {/* Card - 4 */}
                    <div className='track'>
                        <div className='icon' style={{ backgroundColor: '#FFC600' }}>
                            <FontAwesomeIcon icon={faCashRegister} fade size="2xl" style={{ color: "#ffffff", }} />
                        </div>
                        <div className='box-description'>
                            <p className='earn'>Total Sales</p>
                            <h1 className='m-head'>$89K</h1>
                            <p className='para-month'><span className='arrow-head'><FontAwesomeIcon icon={faArrowUpLong} size="2xs" style={{ color: 'green', }} />11%</span> this Week</p>
                        </div>
                    </div>
                </div>
                <OverView />
                <ProductSell />
            </div>
        </>
    )
}
