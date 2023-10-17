import React from 'react'
import "./productSell.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
export default function ProductSell() {


    return (
        <div className='product-card'>
            {/* part-1 */}
            <div className='product-title-container'>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                    <p className='product-item-name'>Product Sell</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }} >
                        <div className="input-card" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} size="sm" style={{ color: "gray" }} className='icon-search' />
                            <input type="search" placeholder='Search' style={{ marginRight: '15px' }} className='input-box' />
                        </div>
                        <div>
                            <p className='days-text'>Last 30 days
                                <FontAwesomeIcon icon={faAngleDown} size="2xs" style={{ color: "gray", paddingLeft: '10px' }} />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* part-2 */}
            <div className='product-name-container' style={{ display: 'flex', alignItems: '', justifyContent: 'space-between' }}>
                <div>
                    <p className='p-name' style={{ margin: '0px' }}>Product Name</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '90px', marginRight: '20px' }}>
                    <p className='p-1' style={{ margin: '0px' }}>Stock</p>
                    <p className='p-2' style={{ margin: '0px' }}>Price</p>
                    <p className='p-3' style={{ margin: '0px' }}>Total Sales</p>
                </div>
            </div>
            <hr />
            {/* part-3 */}
            <div className='product' style={{ display: 'flex', alignItems: '', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Abstract 3D" className='image' />
                    <div style={{ marginLeft: '10px' }}>
                        <h6 style={{ margin: '0px' }} className='p-head-item'>Abstract 3D</h6>
                        <p style={{ margin: '0px' }} className='p-description'>A new Wallpaper of digital Art</p>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '90px', marginRight: '50px' }}>
                    <p className='p-1' >32 in Stock</p>
                    <p className='p-2' >$45.99</p>
                    <p className='p-3' >20</p>
                </div>
            </div>
            {/* part - 4 */}
            <div className='product' style={{ display: 'flex', alignItems: '', justifyContent: 'space-between', marginTop:'10px'}}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <img src="https://images.unsplash.com/photo-1477346611705-65d1883cee1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Abstract 3D" className='image' />
                    <div style={{ marginLeft: '10px' }}>
                        <h6 style={{ margin: '0px' }} className='p-head-item'>Abstract 3D</h6>
                        <p style={{ margin: '0px' }} className='p-description'>A new Wallpaper of digital Art</p>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '90px', marginRight: '50px' }}>
                    <p className='p-1' >32 in Stock</p>
                    <p className='p-2' >$45.99</p>
                    <p className='p-3' >20</p>
                </div>
            </div>
        </div>
    )
}
