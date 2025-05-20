import React from 'react'

import'../../Styles/FooterStyle.css';
import { FaMapMarkerAlt } from "react-icons/fa";      // Location
import { FaPhoneAlt } from "react-icons/fa";           // Phone
import { FaEnvelope } from "react-icons/fa";           // Mail
import { FaFacebookF } from "react-icons/fa";          // Facebook
import { FaInstagram } from "react-icons/fa";          // Instagram
import { FaLinkedinIn } from "react-icons/fa";         // LinkedIn
import { FaTwitter } from "react-icons/fa";           //twitter
const Footer = () => {
    return (
       <div className='contact-main'>
                <div>
                    <p> <span><FaMapMarkerAlt /></span>Chicago, US</p>
                    <p><span><FaPhoneAlt /></span>Phone: +00 151515</p>
                    <p><span>< FaEnvelope /></span> Email: mail@mail.com</p>
                </div>
                
                <div className='contact-icon'>
                    <p><span> < FaTwitter /></span><span><FaFacebookF /></span> <span><FaLinkedinIn /></span><span> <FaInstagram /></span></p>
                    <p>Powered by <a>w3.css</a></p>
                </div>
            </div>

       
    )
}

export default Footer