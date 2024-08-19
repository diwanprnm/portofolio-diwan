import profilePicture from '../assets/profilePicture.png'
import '../Styles/Header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import Button from 'react-bootstrap/Button';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function Header() {
  return (
   <header>
    <div className="header-jumbotron">
            <img src={profilePicture} class="rounded-circle border border-primary-5" />
            <h3>Diwan Purnama</h3>
            <p>Web Developer</p>
            
            <div className='socialMedia'>
                <a href="https://www.instagram.com/diwanprnm/" target='_blank'><FaInstagram/></a>
                <a href="https://www.linkedin.com/in/diwan-purnama-724a09201/" target='_blank'><FaLinkedin /></a>
            </div>
            <br/>
    </div>
   </header>
  )
}

export default Header
