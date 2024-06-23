import React from "react";
// import { FaShoppingCart } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="bg-black flex text-gray-400 justify-around">
            <ul className="flex flex-col text-left p-4">
                <li>Contact</li>
                <li>Career</li>
                <li>Head Office</li>
                <li>Email</li>
            </ul>
            <div className='w-20'>
                <img src='https://uploads.turbologo.com/uploads/design/hq_preview_image/881852/draw_svg20210625-19886-u8ghol.svg.png' alt='Logo' className='h-auto w-auto max-w-20 max-h-full mt-5' />
            </div>
            <ul className="flex flex-col text-left p-4">
                <li>Jobs</li>
                <li>opportunities</li>
                <li>year of establishment</li>
                <li>Company Details</li>
            </ul>
        </div>
    )
}

export default Footer;