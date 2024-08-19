import React from 'react'
import '../Styles/Footer.css'
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <footer>
        <div className='contact'>
        <br/>
        <p>Contact :</p>
        <ul>
            <li><CiMail /> diwanprnm77@gmail.com </li>
            <li><FaPhoneAlt /> +62895377866752</li>
        </ul>
        </div>
        
        <div className='footerweb'>
        &copy; Diwan Purnama 2024
        </div>
       
    </footer>
  )
}

export default Footer
