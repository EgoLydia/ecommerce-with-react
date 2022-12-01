import React from 'react'
import './Footer.scss'
export const Footer = () => {
    return (
        <div className='footer'>
            <div className='top'>
                <div className="item">
                    <h1>Categories</h1>
                    <span>Women</span>
                    <span>Men</span>
                    <span>Shoes</span>
                    <span>Accessories</span>
                    <span>Children</span>
                    <span>New Arrivals</span>
                </div>
                <div className="item">
                    <h1>Links</h1>
                    <span>FAQS</span>
                    <span>Pages</span>
                    <span>Stores</span>
                    <span>Compare</span>
                    <span>Contact</span>
                    <span>Cookies</span>

                </div>
                <div className="item">
                    <h1>About</h1>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, minus sunt! Dicta amet, suscipit tempora harum eaque vero animi culpa aliquam eum esse quis, nemo accusamus cupiditate earum cumque quae.
                        laborum, et explicabo iure laboriosam blanditiis reiciendis quas perspiciatis, ea provident dolorum dolor quo expedita enim! Voluptatum molestias provident, eos inventore quidem repellendus
                        reiciendis quae aliquam et maiores.</span>
                </div>
                <div className="item">
                    <h1>Contact</h1>
                    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet, minus sunt! Dicta amet, suscipit tempora harum eaque vero animi culpa aliquam eum esse quis, nemo accusamus cupiditate earum cumque quae.
                        aborum, et explicabo iure laboriosam blanditiis reiciendis quas perspiciatis, ea provident dolorum dolor quo expedita enim! Voluptatum molestias provident, eos inventore quidem repellendus
                        reiciendis quae aliquam et maiores.</span>
                </div>
            </div>
            <div className='bottom'>
                <div className="left">
                    <span className="logo">LYDStore</span>
                    <span className="copyright">&#169; Copyright 2023. All Rights Reserved</span>
                </div>
                <div className="right">
                    <img src="/src/assets/payment.png" alt="" />
                </div>
            </div>
        </div>

    )
}
